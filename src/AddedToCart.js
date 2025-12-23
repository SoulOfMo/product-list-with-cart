export function AddedToCart({ cartedItems, onDeleteCartItem }) {
  return (
    <>
      <div className="cartedItems">
        <div>
          <p>{cartedItems.name}</p>
          <div className="item-details">
            <span className="quantity">{cartedItems.quantity}x</span>
            <span className="price">{`@ ${cartedItems.price.toFixed(2)}`}</span>
            <span className="totalPrice">{`$${cartedItems.totalPrice.toFixed(
              2
            )}`}</span>
          </div>
        </div>
        <button
          aria-label="delete-btn"
          className="btn-delete"
          onClick={() => onDeleteCartItem(cartedItems.id)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="10"
            height="10"
            fill="none"
            viewBox="0 0 10 10"
          >
            <path
              fill="#CAAFA7"
              d="M8.375 9.375 5 6 1.625 9.375l-1-1L4 5 .625 1.625l1-1L5 4 8.375.625l1 1L6 5l3.375 3.375-1 1Z"
            />
          </svg>
        </button>
      </div>
      <hr></hr>
    </>
  );
}
