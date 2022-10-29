import React from "react";
import { Link } from "react-router-dom";
import ItemCart from "./ItemCart";
import { useCartContext } from "../context/CartContext";

const ItemCartContainer = () => {
  const { cart, totalPrice } = useCartContext();

  if (cart.length === 0) {
    return (
      <div class="p-4 w-full max-w-sm bg-white rounded-lg border shadow-md sm:p-8 dark:bg-gray-900 dark:border-gray-700">
        <div className="flex flex-col justify-between items-center m-4">
          <h5 className="text-base h-8 font-bold leading-none text-gray-900 dark:text-white">
            No hay elementos en el carrito
          </h5>
          <Link
            to="/"
            className="text-base h-8 font-medium text-blue-600 hover:underline dark:text-blue-500"
          >
            Hacer compras
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div class="p-4 w-full max-w-lg bg-white rounded-lg border shadow-md sm:p-8 dark:bg-gray-900 dark:border-gray-700">
      <div className="flex justify-between items-center  mt-4 mb-2">
        <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">
          Movie List
        </h5>
        <p className="text-base font-medium text-blue-600 truncate dark:text-white">
          Subtotal
        </p>
      </div>
      <div className="flow-root">
        <ul
          role="list"
          className="divide-y divide-gray-200 dark:divide-gray-700"
        >
          {cart.map((product) => (
            <ItemCart key={product.id} product={product} />
          ))}
        </ul>
      </div>
      <div class="flex justify-between items-center  mt-4 mb-2">
        <h5 class="text-lg font-bold leading-none text-gray-900 dark:text-white">
          Total:
        </h5>
        <p class="text-base font-medium text-blue-600  dark:text-blue-500">
          ${totalPrice()}
        </p>
      </div>
    </div>
  );
};

export default ItemCartContainer;
