export function AddedToCart({ cartedItems, onDeleteCartItem }) {
  return (
    <>
      <div className="cartedItems">
        <div>
          <p>{cartedItems.name}</p>
          <div className="item-details">
            <span className="quantity">{cartedItems.quantity}x</span>
            <span className="price">{`@ ${cartedItems.price.toFixed(
              2,
              0
            )}`}</span>
            <span className="totalPrice">{`$${cartedItems.totalPrice.toFixed(
              2,
              0
            )}`}</span>
          </div>
        </div>
        <button
          className="btn-delete"
          onClick={() => onDeleteCartItem(cartedItems.id)}
        >
          x
        </button>
      </div>
      <hr></hr>
    </>
  );
}
