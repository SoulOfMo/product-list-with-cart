import Menu from "./Menu";
import Cart from "./Cart";
import {useState} from "react";
import Overlay from "./Overlay";

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [checkOut, setCheckOut] = useState(false);

  function handleCheckOut() {
    setCheckOut((prev) => !prev);
  }

  // function addToCart(item, qty = 1) {
  //   setCartItems((prevCart) => {
  //     const existing = prevCart.find((i) => i.id === item.id);

  //     if (existing) {
  //       const newQty = existing.quantity + qty;
  //       return prevCart.map((i) =>
  //         i.id === item.id
  //           ? {
  //               ...i,
  //               quantity: newQty,
  //               totalPrice: newQty * i.price,
  //             }
  //           : i
  //       );
  //     }

  //     // new item (menu item)
  //     return [
  //       ...prevCart,
  //       {
  //         ...item,
  //         quantity: qty,
  //         totalPrice: item.price * qty,
  //       },
  //     ];
  //   });
  // }

  function addToCart(newItem, qty = 1) {
    setCartItems((prevCart) =>
      prevCart.some((item) => item.id === newItem.id)
        ? prevCart.map((item) =>
            item.id === newItem.id
              ? {
                  ...item,
                  quantity: item.quantity + 1,
                  totalPrice: (item.quantity + 1) * item.price,
                }
              : item
          )
        : [
            ...prevCart,
            {...newItem, quantity: qty, totalPrice: newItem.price * qty},
          ]
    );
  }

  function removeFromCart(item) {
    setCartItems((prevCart) =>
      prevCart.map((itemInCart) =>
        itemInCart.id === item.id
          ? {
              ...itemInCart,
              quantity: itemInCart.quantity - 1,
              totalPrice: (itemInCart.quantity - 1) * itemInCart.price,
            }
          : itemInCart
      )
    );
  }

  function deleteFromCart(id) {
    setCartItems((cartItems) => cartItems.filter((item) => item.id !== id));
  }

  function clearCart() {
    setCartItems([]);
    setCheckOut(false);
  }

  return (
    <main>
      <Menu
        handleAddToCart={addToCart}
        handleRemoveFromCart={removeFromCart}
        cartedItems={cartItems}
        onDeleteCartItem={deleteFromCart}
      />

      <Cart
        cartItems={cartItems}
        onDeleteCartItem={deleteFromCart}
        handleCheckOut={handleCheckOut}
      />
      {checkOut && (
        <Overlay handleStartNewOrder={clearCart} cartItems={cartItems} />
      )}
    </main>
  );
}

export default App;
