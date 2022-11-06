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
            <Link
              to={"/"}
              className="h-16 p-2 mb-0 btn btn-ghost normal-case text-base"
            >
              Inicio
            </Link>
          </li>
          <li tabIndex={0}>
            <Link
              to={"/"}
              className="h-16 p-2 mb-0 btn btn-ghost normal-case text-base"
            >
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
            <ul>
              <li>
                <NavLink to="/genero/Action" className="p-1  text-white">
                  Acción
                </NavLink>
              </li>
              <li>
                <NavLink to="/genero/Suspense" className="p-1 text-white ">
                  Suspenso
                </NavLink>
              </li>
              <li>
                <NavLink to="/genero/Fantasy" className="p-1  text-white">
                  Fantasía
                </NavLink>
              </li>
              <li>
                <NavLink to="/genero/Comedy" className="p-1 text-white ">
                  Comedia
                </NavLink>
              </li>
              <li>
                <NavLink to="/genero/Fiction" className="p-1  text-white">
                  Ciencia Ficción
                </NavLink>
              </li>
              <li>
                <NavLink to="/genero/Animation" className="p-1 text-white ">
                  Animada
                </NavLink>
              </li>
              <li>
                <NavLink to="/genero/Drama" className="p-1 text-white ">
                  Drama
                </NavLink>
              </li>
            </ul>
          </li>
          <li>
            <Link className="h-16 p-2 mb-0 btn btn-ghost normal-case text-base">
              Nosotros
            </Link>
          </li>
          <li>
            <Link className="h-16 p-1 mb-0 ">
              <CartWidget />
            </Link>
          </li>
        </ul>
      </div>
      <div className="dropdown dropdown-end">
        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
          <div class="overflow-hidden relative w-8 h-8 bg-gray-100 rounded-full dark:bg-gray-600">
            <svg
              class="absolute -left-1 w-10 h-10 text-gray-400"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </div>
        </label>
        <ul
          tabIndex={0}
          className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
        >
          <li>
            <Link
              to={"/user"} className="justify-between">
              Profile
              <span className="badge">New</span>
            </Link>
          </li>
          <li>
            <a>Settings</a>
          </li>
          <li>
            <a>Logout</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
