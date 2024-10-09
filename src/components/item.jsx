import React, { Component } from "react";

class Item extends Component {
  render() {
    const { imageUrl, title, quantity, price } = this.props.item;
    const { onIncrement, onDecrement, item, onRemove } = this.props;
    return (
      <div className="row bg-light p-3 shadow-sm rounded-2 mb-3">
        <div className="col-3">
          <img
            src={imageUrl}
            alt={title}
            className="border img-fluid rounded-2"
          />
        </div>
        <div className="col-6">
          <h4>{title}</h4>
          <p>{`Unit price: ${price.toFixed(2)}`}</p>
          <p className="lead fw-bold">{`Subtotal: ${(price * quantity).toFixed(
            2
          )}`}</p>
        </div>
        <div className="col-3 d-flex justify-content-around align-items-center">
          <button
            disabled={quantity === 1}
            onClick={() => onDecrement(item)}
            className="btn btn-sm btn-secondary"
          >
            -
          </button>
          <span className="badge text-bg-primary">{quantity}</span>
          <button
            onClick={() => onIncrement(item)}
            className="btn btn-sm btn-secondary"
          >
            +
          </button>
          <button
            onClick={() => onRemove(item)}
            title="remove item"
            className="btn btn-sm btn-danger"
          >
            &times;
          </button>
        </div>
      </div>
    );
  }
}

export default Item;
