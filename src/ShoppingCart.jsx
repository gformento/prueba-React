// src/components/ShoppingCart.jsx
import React from "react";
import "./ShoppingCart.css"; // Opcional: para estilos del carrito

const ShoppingCart = ({ cart, onRemoveFromCart, onClearCart }) => {
  // Calcula el total del carrito
  const total = cart.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0
  );

  return (
    <div className="shopping-cart">
      <h2>Tu Carrito de Compras</h2>
      {cart.length === 0 ? (
        <p>El carrito está vacío.</p>
      ) : (
        <>
          <ul className="cart-items">
            {cart.map((item) => (
              <li key={item.product.id} className="cart-item">
                <img
                  src={item.product.image}
                  alt={item.product.name}
                  className="cart-item-image"
                />
                <div className="cart-item-details">
                  <p>{item.product.name}</p>

                  {/* Este es tu "no se" en la captura, es la descripción */}
                  <p className="cart-item-description">
                    <p>Producto: {item.product.name}</p>
                    <p>Cantidad: {item.quantity} </p>
                  </p>

                  <p className="product-card-price">
                    <p>Precio Unitario: ${item.product.price.toFixed(2)}</p>
                  </p>

                  <p>
                    Subtotal: ${(item.product.price * item.quantity).toFixed(2)}
                  </p>
                </div>
                <button
                  className="remove-from-cart-button"
                  onClick={() => onRemoveFromCart(item.product.id)}
                >
                  Eliminar
                </button>
              </li>
            ))}
          </ul>
          <div className="cart-total">
            <h3>Total del Carrito: ${total.toFixed(2)}</h3>
            <button className="checkout-button">Proceder al Pago</button>
            <br /> <br />
            <button className="checkout-button" onClick={() => onClearCart()}>
              Vaciar Carrito
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default ShoppingCart;
