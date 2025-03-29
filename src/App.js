import Menu from "./Menu";
import Cart from "./Cart";
import { useState } from "react";

function App() {
  const [CartItems, setCartItems] = useState([]);

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
