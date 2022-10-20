import React from "react";
import Item from "./Item";

const ItemList = ({ data }) => {
  return (
    <section className="bg-gray-900 bg-auto pt-20  flex flex-wrap  justify-center items-center gap-x-12 gap-y-14 text-white">
      {data.map((movie) => (
        <Item key={movie.id} datamovie={movie} />
      ))}
    </section>
  );
};

export default ItemList;
