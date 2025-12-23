import {AddedToCart} from "./AddedToCart";
import EmptyCart from "./EmptyCart";
import ConfirmOrder from "./ConfirmOrder";

export default function Cart({cartItems, onDeleteCartItem, handleCheckOut}) {
  const totalOrderPrice = cartItems.reduce(
    (acc, cur) => acc + cur.totalPrice,
    0
  );
  const cartedItems = cartItems.filter((item) => item.quantity > 0);

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

      {cartItems.length > 0 && (
        <ConfirmOrder
          handleCheckOut={handleCheckOut}
          totalOrderPrice={totalOrderPrice}
        />
      )}
    </div>
  );
}
