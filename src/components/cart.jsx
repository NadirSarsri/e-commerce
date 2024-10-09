import React, { Component } from "react";
import Item from "./item";

class Cart extends Component {
  render() {
    const { onCloseCart, items, onIncrement, onDecrement, onRemove } =
      this.props;
    return (
      <div className="cart">
        <header>
          <h2 className="display-6 mt-2">{`You've ${items.length} item(s) in the cart`}</h2>
          <button
            title="close cart"
            id="btnClose"
            className="btn btn-sm btn-danger"
            onClick={onCloseCart}
          >
            &times;
          </button>
        </header>
        <hr />
        <h5>
          Total:
          <span>
            {this.props.items
              .reduce(
                (prev, current) => prev + current.quantity * current.price,
                0
              )
              .toFixed(2)}
          </span>
        </h5>
        <hr />
        <div className="container">
          {items.map((item) => (
            <Item
              key={item.id}
              item={item}
              onIncrement={onIncrement}
              onDecrement={onDecrement}
              onRemove={onRemove}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Cart;
