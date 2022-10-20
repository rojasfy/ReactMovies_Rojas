import React, { useState, useEffect } from "react";

const ItemCount = ({ initial, stock, onAdd }) => {
  const styles = {
    background: "whitesmoke",
    borderRadius: " 10px",
    border: "2px solid gray",
    width: "200px",
    height: "140px",
  };

  const [count, setCount] = useState(initial);

  const reduce = () => {
    setCount(count - 1);
  };

  const increase = () => {
    setCount(count + 1);
  };

  useEffect(() => {
    setCount(initial);
  }, [initial]);

  return (
    <div style={styles} className="m-auto  mt-10  p-1">
      <div className="flex flex-row space-x-2 justify-center items-center p-2.5">
        <button
          disabled={count <= 1}
          onClick={reduce}
          className="btn btn-sm h-10 btn-info border-blue-400 text-2xl text-white font-bold"
        >
          -
        </button>
        <span className="countdown text-sm">
          <span
            style={{ "--value": count }}
            className="px-1.5   font-semibold"
          ></span>
        </span>
        <button
          disabled={count >= stock}
          onClick={increase}
          className="btn btn-sm h-10 btn-warning text-xl font-bold border-yellow-400"
        >
          +
        </button>
      </div>
      <button
        disabled={stock <= 0}
        onClick={() => onAdd(count)}
        className="btn btn-success text-xs .font-mono flex flex-row justify-center items-center mx-auto mt-3 p-2 border-green-400"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ItemCount;
