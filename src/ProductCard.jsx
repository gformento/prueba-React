import "./ProductCard.css";

const ProductCard = ({ product, onAddToCart }) => {
  return (
    <div className="product-card">
      <img
        src={product.image}
        alt={product.name}
        className="product-card-image"
      />
      <div className="product-card-details">
        <h3 className="product-card-name">{product.name}</h3>
        <p className="product-card-description">{product.description}</p>
        <p className="product-card-price">${product.price.toFixed(2)}</p>
        {/* Llama a onAddToCart con el producto actual al hacer clic */}
        <button className="product-card-button"onClick={() => onAddToCart(product)}> Añadir al Carrito </button>
      </div>
    </div>
  );
};

export default ProductCard;
