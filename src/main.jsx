import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import ProductCard from "./ProductCard.jsx";
import ProductCardCreator from "./ProductCardCreator.jsx";
import "./ProductCard.css";
import "./ProductCardCreator.css";
import "./App.css";
import "./ShoppingCart.css";

import ShoppingCart from "./ShoppingCart.jsx"; // Asegúrate de importar el componente ShoppingCart

createRoot(document.getElementById("root")).render(
  <App />,
  <ProductCard />,
  <ProductCardCreator />,
  <ShoppingCart /> //
);
