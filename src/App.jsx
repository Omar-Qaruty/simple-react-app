import { Route, Routes } from "react-router-dom";
import Navigation from "../components/Nav/Navigation";
import ProductItem from "../components/Products/ProductItem";
import Products from "./containrs/Products";
import Favorites from "./containrs/Favorites";

// const DUMMY_DATA = [
//   { title: "ward", description: "I am the worst" },
//   {
//     title: "ward",
//     description: "I am Not the worst",
//   },
//   {
//     title: "ward",
//     description: "I maybe  the worst",
//   },
//   {
//     title: "ward",
//     description: "am I  the worst",
//   },
// ];

function App() {
  return (
    <>
      <Navigation />
      {/* <ProductItem data={DUMMY_DATA} />; */}
      {/* <Products /> */}
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
    </>
  );
}

export default App;
