import React, { useState } from "react";
import ProductCard from "./ProductCard";
import "./ProductCardCreator.css";

const ProductCardCreator = ({ onAddToCart }) => {
  const [products, setProducts] = useState([]);
  const [nextProductId, setNextProductId] = useState(1);

  // **Nuevos estados para los campos del formulario**
  const [productName, setProductName] = useState("");
  const [productDescription, setProductDescription] = useState("");
  const [productPrice, setProductPrice] = useState("");

  // Función para manejar el envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault(); // Previene el comportamiento predeterminado del formulario de recargar la página

    // Validar que los campos no estén vacíos y el precio sea un número válido
    if (
      !productName ||
      !productDescription ||
      !productPrice ||
      isNaN(parseFloat(productPrice))
    ) {
      alert(
        "Por favor, completa todos los campos y asegúrate de que el precio sea un número válido."
      );
      return;
    }

    // Dentro de ProductCardCreator.jsx, en handleCreateCard:
    const newProduct = {
      id: nextProductId,
      name: productName,
      description: productDescription,
      price: parseFloat(productPrice),
      image: `https://via.placeholder.com/150/0000FF/FFFFFF?text=PROD+${nextProductId}`,
    };

    setProducts((prevProducts) => [...prevProducts, newProduct]);
    setNextProductId((prevId) => prevId + 1);

    // Limpiar los campos del formulario después de crear el producto
    setProductName("");
    setProductDescription("");
    setProductPrice("");
  };

  return (
    <div className="product-card-creator">
      <h1>Mi Tienda de Productos</h1>

      {/* Formulario para crear productos */}
      <form onSubmit={handleSubmit} className="product-form">
        <div className="form-group">
          <label htmlFor="productName">Nombre del Producto:</label>
          <input
            type="text"
            id="productName"
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
            placeholder="Ej: Camiseta de Algodón"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="productDescription">Descripción:</label>
          <textarea
            id="productDescription"
            value={productDescription}
            onChange={(e) => setProductDescription(e.target.value)}
            placeholder="Ej: Camiseta suave 100% algodón"
            required
          ></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="productPrice">Precio:</label>
          <input
            type="number"
            id="productPrice"
            value={productPrice}
            onChange={(e) => setProductPrice(e.target.value)}
            placeholder="Ej: 29.99"
            step="0.01" // Permite decimales
            required
          />
        </div>
        <button type="submit" className="create-card-button">
          Crear Producto
        </button>
      </form>

      <div className="product-list">
        {products.length === 0 ? (
          <p>No hay productos todavía. ¡Crea uno!</p>
        ) : (
          products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={onAddToCart}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default ProductCardCreator;
