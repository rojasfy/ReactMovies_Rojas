import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import Error404 from "./components/Error404";
import CartProvider from "./context/CartContext";
import ItemCartContainer from "./components/ItemCartContainer";
import UserForm from "./components/UserForm";
import UserProvider from "./context/UserProvider";

function App() {
  return (
    <>
      <BrowserRouter basename="/ReactMovies_Rojas">
        <CartProvider>
        <UserProvider>
          <NavBar />
          <Routes>
            <Route
              path="/"
              element={<ItemListContainer greeting="Bienvenidos a mi " />}
            />
            <Route
              path="/genero/:generoID"
              element={<ItemListContainer greeting="Bienvenidos a mi " />}
            />
            <Route
              path="/detalle/:detalleID"
              element={<ItemDetailContainer />}
            />
            <Route path="/cart" element={<ItemCartContainer />} />
            <Route path="/user" element={<UserForm />} />
            <Route path="*" element={<Error404 />} />
          </Routes>
          </UserProvider>
        </CartProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
