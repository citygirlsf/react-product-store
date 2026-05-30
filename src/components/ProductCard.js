import './ProductCard.css';


function ProductCard({name, price, description, image, onAddToCart}){
    return (
        <div className="product-card">
            <div className="product-card">
            <img src={image} alt={name} />
            <h2>{name}</h2>
            <p>{description}</p>
            <span className="price">${price}</span>
            <button onClick={onAddToCart}>Add to Cart</button>
            </div>
        </div>
    );
}

export default ProductCard;