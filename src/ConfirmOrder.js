export default function ConfirmOrder({ totalOrder }) {
  return (
    <div className="confirm-order">
      <div className="total">
        <span>Order Total</span>
        <span className="total-price">${totalOrder.toFixed(2, 0)}</span>
      </div>
      <div className="type-of-delivery">
        <img
          src="/assets/images/icon-carbon-neutral.svg"
          alt="carbon-netural img"
        ></img>
        This is a <span> carbon-netural </span> delivery
      </div>
      <button>Confirm Order</button>
    </div>
  );
}
