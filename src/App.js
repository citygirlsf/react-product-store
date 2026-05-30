import { useState } from 'react';
import ProductCard from './components/ProductCard';
import Cart from './components/Cart';
import './App.css';

const products = [
  {
    id: 1,
    name: "Air Max Sneakers",
    price: 120,
    description: "Lightweight and stylish sneakers for everyday wear.",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400"
  },
  {
    id: 2,
    name: "Leather Backpack",
    price: 85,
    description: "Durable leather backpack with multiple compartments.",
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400"
  },
  {
    id: 3,
    name: "Wireless Headphones",
    price: 199,
    description: "Premium sound quality with noise cancellation.",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400"
  },
  {
    id: 4,
    name: "Sunglasses",
    price: 65,
    description: "UV protected polarized lenses with stylish frame.",
    image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=400"
  },
  {
    id: 5,
    name: "Smart Watch",
    price: 249,
    description: "Track fitness, notifications and more on your wrist.",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400"
  },
  {
    id: 6,
    name: "Canvas Tote Bag",
    price: 35,
    description: "Eco-friendly canvas tote perfect for shopping.",
    image: "https://images.unsplash.com/photo-1544816155-12df9643f363?w=400"
  }
];

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [cartOpen, setCartOpen] = useState(false);

  function addToCart(product) {
    setCartItems([...cartItems, product]);
  }

  function removeFromCart(id) {
    setCartItems(cartItems.filter(item => item.id !== id));
  }

  return (
    <div className="app">
      <header className="store-header">
        <h1>🛍️ My Store</h1>
        <p>Free shipping on orders over $100</p>
        <button className="cart-btn" onClick={() => setCartOpen(true)}>
          🛒 Cart ({cartItems.length})
        </button>
      </header>

      <div className="product-grid">
        {products.map(product => (
          <ProductCard
            key={product.id}
            name={product.name}
            price={product.price}
            description={product.description}
            image={product.image}
            onAddToCart={() => addToCart(product)}
          />
        ))}
      </div>

      <Cart
        cartItems={cartItems}
        cartOpen={cartOpen}
        onClose={() => setCartOpen(false)}
        onRemove={removeFromCart}
      />
    </div>
  );
}

export default App;