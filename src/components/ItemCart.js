import React from "react";
import App from "../App";
import { useCartContext } from "../context/CartContext";

const ItemCart = ({ product }) => {
  const { removeProduct } = useCartContext();
  const imageUrl = "https://image.tmdb.org/t/p/w300" + product.poster_path;
  return (
    <li className="py-3 sm:py-4 mt-4 mb-2">
      <div className="flex items-center space-x-4">
        <div className="flex-shrink-0">
          <img
            className="w-20 h-20 rounded-full"
            src={imageUrl}
            alt={product.title}
          />
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
            Título: {product.title}
          </p>
          <p className="text-sm text-gray-500 truncate dark:text-gray-400">
            Cantidad: {product.quantity}
          </p>
          <p className="text-sm text-gray-500 truncate dark:text-gray-400">
            Precio (und): ${product.price}
          </p>
          <button
            className=" text-sm font-medium text-blue-600 hover:underline dark:text-blue-500 "
            onClick={() => removeProduct(product.id)}
          >
            Eliminar
          </button>
        </div>
        <div className="inline-flex items-center text-sm font-medium text-gray-900 truncate dark:text-white">
          ${product.quantity * product.price}
        </div>
      </div>
    </li>
  );
};

export default ItemCart;
