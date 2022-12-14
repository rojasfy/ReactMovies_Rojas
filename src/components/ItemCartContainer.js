import React, { useState } from "react";
import { Link } from "react-router-dom";
import ItemCart from "./ItemCart";
import { useCartContext } from "../context/CartContext";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import Swal from "sweetalert2";
import "animate.css";
import { useUseContext } from "../context/UserProvider";

const ItemCartContainer = () => {
  const { cart, totalPrice , clearCart} = useCartContext();
  const { upuser } = useUseContext();
  const [idCollection, setidCollection] = useState([]);

  console.log(upuser);
  console.log(Object.keys(upuser).length)
  
  const order = {
    buyer: upuser,
    items: cart.map((product) => ({
      id: product.id,
      title: product.title,
      price: product.price,
      quantity: product.quantity,
    })),
    total: totalPrice(),
  };

  const handleClick = () => {
    if (Object.keys(upuser).length=== 0) {
      Swal.fire("Debes crear tu usuario");
    } else {
      const db = getFirestore();
      const ordersCollection = collection(db, "orders");
      addDoc(ordersCollection, order).then(({ id }) => setidCollection(id));
      Swal.fire({
        icon: "success",
        title: "Éxito",
        text: `Tu orden #${idCollection} fue emitida con éxito`,
        showConfirmButton: false,
        timer: 3000,
        showClass: {
          popup: "animate__animated animate__fadeInDown",
        },
        hideClass: {
          popup: "animate__animated animate__fadeOutUp",
        },
      });
      clearCart();
    }
  };

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
      <div className="card-actions flex-col justify-end">
        <button
          className=" font-semibold relative inline-block text-base font-medium text-[#FF6A3D] border border-current rounded-lg m-auto mt-6 mb-2 py-2 px-3 "
          onClick={handleClick}
        >
          Emitir orden
        </button>
        <Link
          to="/"
          className="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500 m-auto"
        >
          Ver más productos
        </Link>
      </div>
    </div>
  );
};

export default ItemCartContainer;
