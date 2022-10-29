import React, { useState, useEffect } from "react";
import ItemDetail from "./ItemDetail";
import movies from "../movies.json";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
  const [data, setData] = useState([]);
  const { detalleID } = useParams();


  useEffect(() => {
    const getData = new Promise((resolve) => {
      setTimeout(() => {
        resolve(movies);
      }, 1000);
    });

    getData.then((res) =>
      setData(res.find((movie) => movie.id === parseInt(detalleID)))
    );

  }, []);

  


  return <ItemDetail data={data}/>;
};

export default ItemDetailContainer;