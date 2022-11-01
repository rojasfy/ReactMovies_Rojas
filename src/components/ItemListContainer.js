import React, { useState, useEffect } from "react";
import ItemList from "./ItemList";
import {collection, getDocs,getFirestore, query, where} from "firebase/firestore";
// import movies from "../movies.json";
import { useParams } from "react-router-dom";

const ItemListContainer = ({ greeting }) => {
  const styles = {
    texto: {
      /*  background: "#f5f5f5", */
      fontSize: "3.0rem",
      color: "white",
      textAlign: "center",
      lineHeight: "1.8",
      textShadow: ".4rem .4rem 0 rgba(0, 0, 0, .2)",
    },
    textospan: {
      /* color: "orange" */
    },
  };

  const [data, setData] = useState([]);
  const { generoID } = useParams();

  useEffect(() => {
    const db = getFirestore();
		const movieCollection = collection(db, "movies");
		if (generoID) {
			const movieFilter = query(
				movieCollection,
				where("genre", "==", generoID),
			);
			getDocs(movieFilter).then((res) =>
				setData(
					res.docs.map((movie) => ({ id: movie.id, ...movie.data() })),
				),
			);
		} else {
			getDocs(movieCollection).then((res) =>
				setData(
					res.docs.map((movie) => ({ id: movie.id, ...movie.data() })),
				),
			);
		}
  }, [generoID]);

  return (
    <>
      <div style={styles.texto} className=" pt-20 bg-gray-900 bg-auto">
        {greeting}
        <span style={styles.textospan} className="text-[#FF6A3D]">
          "Landing Page"
        </span>
      </div>

      <ItemList data={data} />
    </>
  );
};

export default ItemListContainer;
