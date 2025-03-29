import { useState, useEffect } from "react";

export function Dessert({ item, handleAddToCart, onDeleteCartItem }) {
  const [quantity, setQuantity] = useState(0);
  const { name, price, id } = item;
  const img = item.image.tablet;

  console.log(item);

  useEffect(() => {
    if (quantity > 0) {
      handleAdd();
    }
  }, [quantity]);

  function handleAdd() {
    const newAdded = {
      id,
      name,
      price,
      quantity,
      totalPrice: quantity * price,
    };

    handleAddToCart(newAdded);
  }

  function increaseQuantity() {
    setQuantity((quantity) => quantity + 1);
  }

  function decreaseQuantity() {
    setQuantity((quantity) => (quantity >= 1 ? quantity - 1 : 0));
    if (quantity === 1) {
      onDeleteCartItem(id);
    }
  }

  return (
    <div className="dessert">
      <div className="dessert-img">
        <img src={img} alt={item.name} />
      </div>
      {quantity < 1 && (
        <button
          onClick={increaseQuantity}
          className="btn addtocart"
          aria-label="addtocart"
        >
          <img src="/assets/images/icon-add-to-cart.svg" alt="add-cart-icon" />
          <span>Add to cart</span>
        </button>
      )}

      {quantity >= 1 && (
        <button className="btn action-btn">
          <span aria-label="decrese-btn" onClick={() => decreaseQuantity()}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="10"
              height="2"
              fill="#000"
              viewBox="0 0 10 2"
            >
              <path fill="#fff" d="M0 .375h10v1.25H0V.375Z" />
            </svg>
          </span>
          <span className="quantity">{quantity}</span>
          <span aria-label="increase-btn" onClick={increaseQuantity}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="10"
              height="10"
              viewBox="0 0 10 10"
            >
              <path
                fill="#fff"
                d="M10 4.375H5.625V0h-1.25v4.375H0v1.25h4.375V10h1.25V5.625H10v-1.25Z"
              />
            </svg>
          </span>
        </button>
      )}

      <div className="dessert-details">
        <span className="catergory">{item.category}</span>
        <p className="dessert-name">{item.name}</p>
        <span className="price">${item.price.toFixed(2, 0)}</span>
      </div>
    </div>
  );
}
