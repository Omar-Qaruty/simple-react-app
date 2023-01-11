import { Route, Routes } from "react-router-dom";
import Navigation from "../components/Nav/Navigation";
import ProductItem from "../components/Products/ProductItem";
import Products from "./containrs/Products";
import Favorites from "./containrs/Favorites";

function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
    </>
  );
}

export default App;
