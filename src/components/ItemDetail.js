import React, {useState} from "react";
import { Link } from "react-router-dom";
import ItemCount from "./ItemCount";

const ItemDetail = ({ data }) => {
  const imageUrl = "https://image.tmdb.org/t/p/w300" + data.poster_path;

  const [goToBuy, setgoToBuy] = useState(false);

  const onAdd = (quantity) => {
    setgoToBuy(true);
  };

  return (
    <div className="card lg:card-side  bg-gray-900 shadow-xl m-auto my-10 w-3/4">
      <figure>
        <img className="h-full " src={imageUrl} alt="Album" />
      </figure>
      <div className="card-body  justify-end ">
        <div className="text-white ">
          <h2 className="card-title mb-4">{data.title}</h2>
          <h3> Ranking: {data.vote_average}</h3>
          <p>{data.overview}</p>
        </div>
        <div className="card-actions justify-end">
          {goToBuy ? (
            <Link to="/cart" className=" font-semibold relative inline-block text-lg font-medium text-[#FF6A3D] border border-current rounded-lg m-auto my-20 p-3 "> Buy Now </Link>
          ) : (
            <ItemCount initial={2} stock={10} onAdd={onAdd} />
          )}
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
