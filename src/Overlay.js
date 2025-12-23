function Overlay({cartItems, handleStartNewOrder}) {
  const totalOrderPrice = cartItems.reduce(
    (acc, cur) => acc + cur.totalPrice,
    0
  );

  return (
    <div className="confirmed-container">
      <div className="confirmed-details">
        <div>
          <img
            src="/assets/images/icon-order-confirmed.svg"
            alt="order-confirmed"
          />
        </div>

        <h2>Order Confirmed</h2>
        <p>We hope you enjoy your food!</p>
        <div className="orders">
          {cartItems.map((item) => (
            <Order cartItems={item} key={item.id} />
          ))}

          <div className="total">
            <span>Order Total</span>
            <span className="total-price">${totalOrderPrice.toFixed(2)}</span>
          </div>
        </div>
        <button
          aria-label="confirm order"
          onClick={() => handleStartNewOrder()}
          className="action-btn"
        >
          Start New Order
        </button>
      </div>
    </div>
  );
}
function Order({cartItems}) {
  return (
    <div className="order">
      <div className="order-details">
        <img src={cartItems.image.thumbnail} alt="order-image" />
        <div>
          <p className="item-name">{cartItems.name}</p>
          <div className="item-price-details">
            <span className="item-quantity">{cartItems.quantity}x</span>
            <span className="item-price">
              <span>@</span>
              {` $${cartItems.price.toFixed(2)}`}
            </span>
          </div>
        </div>
      </div>
      <span className="item-totalprice">
        ${cartItems.totalPrice.toFixed(2)}
      </span>
    </div>
  );
}

export default Overlay;
