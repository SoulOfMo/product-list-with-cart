import waffles from "./assets/images/image-waffle-desktop.jpg";
import carbonNetural from "./assets/images/icon-carbon-neutral.svg";
import addtocart from "./assets/images/icon-add-to-cart.svg";
import emptycart from "./assets/images/illustration-empty-cart.svg";
import itemData from "./data.json";
import { useEffect, useState } from "react";

function App() {
  const [CartItems, setCartItems] = useState([]);

  // FUNCTIONS++
  // function setTozero(id) {
  //   setCartItems((cartItems) =>
  //     cartItems.map((item) =>
  //       item.id === id ? { ...item, quantity: 0 } : item
  //     )
  //   );
  // }

  function addToCart(newItem) {
    setCartItems((cartItems) => {
      // Check if the item already exists in the cart
      const existingItem = cartItems.findIndex(
        (item) => item.id === newItem.id
      );
      // If the item exists, update its quantity and total price
      if (existingItem !== -1) {
        const updatedCartItem = [...cartItems];
        updatedCartItem[existingItem] = {
          ...updatedCartItem[existingItem],
          price: newItem.price,
          quantity: newItem.quantity,
          totalPrice: newItem.quantity * newItem.price,
        };
        return updatedCartItem;
      } else {
        // If the item doesn't exist, add it to the cart
        return [...cartItems, newItem];
      }
    });
  }

  function handleRemoveFromCart(id) {
    setCartItems((cartItems) => cartItems.filter((item) => item.id !== id));
  }

  // function handleIncreaseQuantity(id) {
  //   setCartItems((cartItems) =>
  //     cartItems.map((item) =>
  //       item.id === id ? { ...item, quantity: item.quantity + 1 } : item
  //     )
  //   );
  // }

  return (
    <main>
      <Menu
        handleAddToCart={addToCart}
        cartedItems={CartItems}
        onDeleteCartItem={handleRemoveFromCart}
      />
      <Cart cartItems={CartItems} onDeleteCartItem={handleRemoveFromCart} />
    </main>
  );
}

export default App;

function Menu({ handleAddToCart, cartedItems, onDeleteCartItem }) {
  return (
    <div className="menu-section">
      <h1>Desserts</h1>
      <div className="desserts-container">
        {itemData.map((item, i) => (
          <Dessert
            handleAddToCart={handleAddToCart}
            item={item}
            key={item.id}
            cartedItems={cartedItems}
            onDeleteCartItem={onDeleteCartItem}
          />
        ))}
      </div>
    </div>
  );
}

function Dessert({ item, handleAddToCart, cartedItems, onDeleteCartItem }) {
  const [quantity, setQuantity] = useState(0);
  const { name, price, id } = item;

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
        <img src={waffles} alt={item.name} />
      </div>
      {quantity < 1 && (
        <button
          onClick={increaseQuantity}
          className="btn addtocart"
          aria-label="addtocart"
        >
          <img src={addtocart} alt="add-cart-icon" />
          <span>Add to cart</span>
        </button>
      )}

      {quantity >= 1 && (
        <button className="btn action-btn">
          <span aria-label="decrese-btn" onClick={decreaseQuantity}>
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

function Cart({ cartItems, onDeleteCartItem }) {
  const cartedItems = cartItems.filter((item) => item.quantity > 0);
  const totalOrder = cartItems.reduce(
    (acc, cur, id, arr) => acc + cur.totalPrice,
    0
  );

  console.log(totalOrder);

  return (
    <div className="cart-container">
      <h2>Your Cart ({cartedItems.length})</h2>

      {cartedItems.length > 0 ? (
        cartedItems.map((item) => (
          <AddedToCart
            key={item.id}
            cartedItems={item}
            onDeleteCartItem={onDeleteCartItem}
          />
        ))
      ) : (
        <EmptyCart cartItems={cartedItems} />
      )}

      {cartItems.length > 0 && <ConfirmOrder totalOrder={totalOrder} />}
    </div>
  );
}

function EmptyCart() {
  return (
    <div className="empty-cart">
      <img src={emptycart} alt="empty-cart" />
      <p>Your added items will apper here</p>
    </div>
  );
}

function AddedToCart({ cartedItems, onDeleteCartItem }) {
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

function ConfirmOrder({ totalOrder }) {
  return (
    <div className="confirm-order">
      <div className="total">
        <span>Order Total</span>
        <span className="total-price">${totalOrder.toFixed(2, 0)}</span>
      </div>
      <div className="type-of-delivery">
        <img src={carbonNetural} alt="carbon-netural img"></img>This is a
        <span>carbon-netural </span> delivery
      </div>
      <button>Confirm Order</button>
    </div>
  );
}
