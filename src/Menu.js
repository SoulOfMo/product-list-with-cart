import itemData from "./data.json";
import { Dessert } from "./Dessert";

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

export default Menu;
