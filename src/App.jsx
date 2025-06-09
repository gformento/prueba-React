// src/App.jsx
import React, { useState } from "react"; // Importa useState
import ProductCardCreator from "./ProductCardCreator";
import ShoppingCart from "./ShoppingCart"; // Importa el nuevo componente
import "./App.css";

function App() {
  // Estado para el carrito de compras
  // Cada item en 'cart' será un objeto { product: {}, quantity: N }
  const [cart, setCart] = useState([]);

  // Función para añadir un producto al carrito
  const addToCart = (productToAdd) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find(
        (item) => item.product.id === productToAdd.id
      );

      if (existingItem) {
        // Si el producto ya existe, incrementa la cantidad
        return prevCart.map((item) =>
          item.product.id === productToAdd.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        // Si el producto no existe, añádelo con cantidad 1
        return [...prevCart, { product: productToAdd, quantity: 1 }];
      }
    });
  };

  // Función para eliminar un producto del carrito o decrementar su cantidad
  const removeFromCart = (productId) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find(
        (item) => item.product.id === productId
      );

      if (existingItem && existingItem.quantity > 1) {
        // Si hay más de una unidad, solo decrementa la cantidad
        return prevCart.map((item) =>
          item.product.id === productId
            ? { ...item, quantity: item.quantity - 1 }
            : item
        );
      } else {
        // Si es la última unidad o no existe (para seguridad), elimina el item
        return prevCart.filter((item) => item.product.id !== productId);
      }
    });
  };
  // ¡NUEVA FUNCIÓN! Para vaciar el carrito
  const clearCart = () => {
    setCart([]); // Establece el estado del carrito a un array vacío
  };
  return (
    <div className="App">
      {/* Pasamos la función addToCart al ProductCardCreator para que sus tarjetas puedan usarla */}
      <ProductCardCreator onAddToCart={addToCart} />
      <hr /> {/* Un separador visual */}
      {/* Pasamos el estado del carrito y la función para eliminar/decrementar */}
      <ShoppingCart
        cart={cart}
        onRemoveFromCart={removeFromCart}
        onClearCart={clearCart}
      />
    </div>
  );
}

export default App;
