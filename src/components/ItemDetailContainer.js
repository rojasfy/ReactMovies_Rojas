import React, { useState, useEffect } from "react";
import ItemDetail from "./ItemDetail";
// import movies from "../movies.json";
import { doc, getDoc, getFirestore } from "firebase/firestore";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
  const [data, setData] = useState([]);
  const { detalleID } = useParams();

  useEffect(() => {
    const db = getFirestore();
    const item = doc(db, "movies", detalleID);
    getDoc(item).then((res) => setData({ id: res.id, ...res.data() }));
  }, [detalleID]);

  return <ItemDetail data={data} />;
};

export default ItemDetailContainer;
