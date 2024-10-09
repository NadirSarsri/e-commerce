import React, { Component } from "react";

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-md bg-body-tertiary">
        <div className="container-fluid">
          <div>
            <span className="h1 mb-0">My Store</span>
            <span className="ms-3 position-relative">
              <span
                style={{ cursor: "pointer" }}
                className="fs-3"
                onClick={this.props.onShowCart}
              >
                Cart
              </span>
              <span className="badge text-bg-primary rounded rounded-circle position-absolute top-0 start-100 translate-middle">
                {this.props.totalItems}
              </span>
            </span>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
