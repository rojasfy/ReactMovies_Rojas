import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import CartWidget from "./components/CartWidget";
import Error404 from "./components/Error404";
import CartProvider from "./context/CartContext";
import ItemCartContainer from "./components/ItemCartContainer";

function App() {
  return (
    <>
      <BrowserRouter basename="/ReactMovies_Rojas">
        <CartProvider>
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
            <Route path="*" element={<Error404 />} />
          </Routes>
        </CartProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
