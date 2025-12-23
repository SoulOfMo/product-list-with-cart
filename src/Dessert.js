import Icon from "./Icon";

export function Dessert({cart, item, handleAddToCart, handleRemoveFromCart}) {
  const quantity = cart.find((i) => i.id === item.id)?.quantity || 0;
  function increaseQuantity() {
    handleAddToCart(item, 1);
  }

  function decreaseQuantity() {
    handleRemoveFromCart(item);
  }

  return (
    <div className="dessert">
      <div className={`dessert-img ${quantity > 0 ? "active" : ""}`}>
        <img src={item.image.desktop} alt={item.name} />
      </div>
      {quantity < 1 && (
        <button
          onClick={() => increaseQuantity()}
          className="btn addtocart"
          aria-label="addtocart"
        >
          <img src="/assets/images/icon-add-to-cart.svg" alt="add-cart-icon" />
          <span>Add to cart</span>
        </button>
      )}

      {quantity >= 1 && (
        <button className="btn action-btn">
          <span aria-label="decrese-btn" onClick={decreaseQuantity}>
            <Icon />
          </span>
          <span className="quantity">{quantity}</span>
          <span aria-label="increase-btn" onClick={increaseQuantity}>
            <Icon type="plus" />
          </span>
        </button>
      )}

      <div className="dessert-details">
        <span className="catergory">{item.category}</span>
        <p className="dessert-name">{item.name}</p>
        <span className="price">${item.price.toFixed(2)}</span>
      </div>
    </div>
  );
}
