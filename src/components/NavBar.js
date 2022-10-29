import React from "react";
import CartWidget from "./CartWidget";
import { NavLink, Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="z-50 navbar bg-base-100  ">
      <div className="flex-1">
        <NavLink className="btn btn-ghost normal-case text-xl" to="/">
          MovieFan
        </NavLink>
      </div>
      <div className="flex-none mr-3">
        <ul className="menu menu-horizontal">
          <li>
            <Link to={"/"} className="h-16 p-2 mb-0 btn btn-ghost normal-case text-base">Inicio</Link>
          </li>
          <li tabIndex={0}>
            <Link to={"/"} className="h-16 p-2 mb-0 btn btn-ghost normal-case text-base">
              Genero
              <svg
                className="fill-current"
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
              >
                <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
              </svg>
            </Link>
            <ul >
              <li>
                <NavLink to="/genero/Action" className="p-1  text-white">Acción</NavLink>
              </li>
              <li>
                <NavLink to="/genero/Suspense" className="p-1 text-white ">Suspenso</NavLink>
              </li>
              <li>
                <NavLink to="/genero/Fantasy" className="p-1  text-white">Fantasía</NavLink>
              </li>
              <li>
                <NavLink to="/genero/Comedy" className="p-1 text-white ">Comedia</NavLink>
              </li>
              <li>
                <NavLink to="/genero/Fiction" className="p-1  text-white">Ciencia Ficción</NavLink>
              </li>
              <li>
                <NavLink to="/genero/Animation" className="p-1 text-white ">Animada</NavLink>
              </li>
              <li>
                <NavLink to="/genero/Drama" className="p-1 text-white ">Drama</NavLink>
              </li>
            </ul>
          </li>
          <li>
            <Link className="h-16 p-2 mb-0 btn btn-ghost normal-case text-base">Quienes Somos</Link>
          </li>
          <li>
            <Link className="h-16 p-1 mb-0 ">
              <CartWidget />
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
