import React, { Component } from "react";
import Product from "./product";
class Products extends Component {
  render() {
    return (
      <div className="row">
        {this.props.products.map((product) => (
          <Product
            key={product.id}
            product={product}
            onAddItem={this.props.onAddItem}
          />
        ))}
      </div>
    );
  }
}

export default Products;
