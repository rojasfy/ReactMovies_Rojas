import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import CartWidget from "./components/CartWidget";
import Error404 from "./components/Error404";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route
            path="/"
            element={<ItemListContainer greeting="Bienvenidos a mi " />}
          />
          <Route
            path="/ReactMovies_Rojas"
            element={<ItemListContainer greeting="Bienvenidos a mi " />}
          />
          <Route
            path="/genero/:generoID"
            element={<ItemListContainer greeting="Bienvenidos a mi " />}
          />
          <Route path="/detalle/:detalleID" element={<ItemDetailContainer />} />
          <Route path="/cart" element={<CartWidget />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
