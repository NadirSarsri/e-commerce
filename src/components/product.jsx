import React, { Component } from "react";
class Product extends Component {
  render() {
    const { imageUrl, title, price } = this.props.product;
    const { product, onAddItem } = this.props;
    return (
      <div className="col-md-6 col-lg-3">
        <div className="card">
          <img src={imageUrl} alt={title} className="card-img-top" />
          <div className="card-body">
            <h4 className="card-title">{title}</h4>
            <h5 className="card-img-subtitle muted">{`${price} MAD`}</h5>
            <button
              onClick={() => onAddItem(product)}
              className="btn btn-sm btn-outline-secondary"
            >
              Add to cart
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Product;
