export default function ConfirmOrder({
  handleCheckOut,
  className = "",
  totalOrderPrice,
}) {
  return (
    <div className="confirm-order">
      <div className="total">
        <span>Order Total</span>
        <span className="total-price">${totalOrderPrice.toFixed(2)}</span>
      </div>
      <div className={`${className} type-of-delivery`}>
        <img
          src="/assets/images/icon-carbon-neutral.svg"
          alt="carbon-netural img"
        ></img>
        This is a <span> carbon-netural </span> delivery
      </div>
      <button className="action-btn" onClick={() => handleCheckOut()}>
        Confirm Order
      </button>
    </div>
  );
}
