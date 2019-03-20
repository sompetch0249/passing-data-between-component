import React, { Component } from "react";

class Supershop extends Component {
  pick = drink => {
    this.props.pickLiqure(this.props.name, drink);
  };
  render() {
    return (
      <div>
        <h1>Store: {this.props.name}</h1>
        <li>Category: {this.props.category}</li>
        <li>Price: {this.props.price}</li>
        <li>
          <button onClick={() => this.pick(this.props.sells.sell_1)}>
            {this.props.sells.sell_1.name}
          </button>
        </li>
        <li>
          <button onClick={() => this.pick(this.props.sells.sell_2)}>
            {this.props.sells.sell_2.name}
          </button>
        </li>
      </div>
    );
  }
}

export default Supershop;
