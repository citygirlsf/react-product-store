import './Cart.css';

function Cart({ cartItems, cartOpen, onClose, onRemove }) {
  const total = cartItems.reduce((sum, item) => sum + item.price, 0);

  return (
    <div>
      {/* Dark overlay behind cart */}
      {cartOpen && <div className="overlay" onClick={onClose}></div>}

      {/* Cart sidebar */}
      <div className={`cart ${cartOpen ? 'cart-open' : ''}`}>
        <div className="cart-header">
          <h2>Your Cart 🛒</h2>
          <button className="close-btn" onClick={onClose}>✕</button>
        </div>

        {cartItems.length === 0 ? (
          <p className="empty-cart">Your cart is empty</p>
        ) : (
          <div>
            {cartItems.map((item, index) => (
              <div className="cart-item" key={index}>
                <img src={item.image} alt={item.name} />
                <div className="cart-item-info">
                  <h3>{item.name}</h3>
                  <p>${item.price}</p>
                </div>
                <button className="remove-btn" onClick={() => onRemove(item.id)}>✕</button>
              </div>
            ))}

            <div className="cart-total">
              <span>Total:</span>
              <span>${total}</span>
            </div>

            <button className="checkout-btn">Checkout</button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Cart;