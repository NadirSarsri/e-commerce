import React, { Component } from "react";
import Products from "./components/products";
import Cart from "./components/cart";
import Navbar from "./components/navbar";

class App extends Component {
  state = {
    products: [
      {
        id: 1,
        title: "Apple watch 4",
        price: 3000.0,
        imageUrl: "./images/img01.jpg",
      },
      {
        id: 2,
        title: "Huawei watch pro 5",
        price: 3500.0,
        imageUrl: "./images/img02.jpg",
      },
      {
        id: 3,
        title: "Saumsung watch 2",
        price: 2000.0,
        imageUrl: "./images/img03.jpg",
      },
      {
        id: 4,
        title: "Xiaomi watch 3",
        price: 5000.0,
        imageUrl: "./images/img04.jpg",
      },
    ],
    cart: [],
    cartVisibility: false,
  };

  handleCartVisibility = () => {
    this.setState({ cartVisibility: false });
  };

  handleShowCart = () => {
    this.setState({ cartVisibility: true });
  };

  handleAddItem = (product) => {
    const cart = [...this.state.cart];
    const productIsInCart = this.state.cart.find(
      (item) => item.id === product.id
    );
    if (!productIsInCart) {
      // item did not exist in cart yet
      const item = { ...product, quantity: 1 };
      cart.push(item);
    } else {
      const item = {
        ...productIsInCart,
        quantity: productIsInCart.quantity + 1,
      };
      const index = cart.findIndex((it) => it.id === product.id);
      cart[index] = item;
    }
    this.setState({ cart, cartVisibility: true });
  };

  handleIncrementQuantity = (itemInCart) => {
    const item = { ...itemInCart, quantity: itemInCart.quantity + 1 };

    const items = [...this.state.cart];
    const index = items.findIndex((it) => it.id === item.id);
    items[index] = item;

    this.setState({ cart: items });
  };
  handleDecrementQuantity = (itemInCart) => {
    const item = { ...itemInCart, quantity: itemInCart.quantity - 1 };

    const items = [...this.state.cart];
    const index = items.findIndex((it) => it.id === item.id);
    items[index] = item;

    this.setState({ cart: items });
  };
  handleRemoveItem = (itemInCart) => {
    const cart = this.state.cart.filter((it) => it.id !== itemInCart.id);
    this.setState({ cart });
  };

  render() {
    const { cartVisibility, cart } = this.state;
    return (
      <div>
        {cartVisibility && (
          <Cart
            items={cart}
            onCloseCart={this.handleCartVisibility}
            onIncrement={this.handleIncrementQuantity}
            onDecrement={this.handleDecrementQuantity}
            onRemove={this.handleRemoveItem}
          />
        )}
        <Navbar totalItems={cart.length} onShowCart={this.handleShowCart} />
        <main className="container pt-3">
          <div className="row">
            <div className="col-lg-4">categories</div>
            <div className="col-lg-8">
              {
                <Products
                  products={this.state.products}
                  onAddItem={this.handleAddItem}
                />
              }
            </div>
          </div>
        </main>
      </div>
    );
  }
}

export default App;
