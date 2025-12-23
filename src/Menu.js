import itemData from "./data.json";
import {Dessert} from "./Dessert";

function Menu({handleRemoveFromCart, handleAddToCart, cartedItems}) {
  return (
    <div className="menu-section">
      <h1>Desserts</h1>
      <div className="desserts-container">
        {itemData.map((item) => (
          <Dessert
            handleAddToCart={handleAddToCart}
            handleRemoveFromCart={handleRemoveFromCart}
            item={item}
            key={item.id}
            cart={cartedItems}
          />
        ))}
      </div>
    </div>
  );
}

export default Menu;
