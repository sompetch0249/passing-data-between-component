import React, { Component } from "react";
import Supershop from "./Supershop";

const store_1 = {
  name: "Pack sell wine",
  category: "Liqure store",
  price: "$$",
  sells: {
    sell_1: { name: "white", price: "$20" },
    sell_2: { name: "red", price: "$60" }
  }
};

class Store extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  pickLiqure = (supershop, drink) => {
    let newState = this.state;
    newState = {
      pick: {
        supershop: supershop,
        drink: drink.name
      }
    };
    this.setState(newState);
  };

  showMessage = () => {
    if (this.state.pick) {
      return (
        <div>
          <p>{`${this.state.pick.supershop} drinks ${
            this.state.pick.drink
          }!`}</p>
        </div>
      );
    }
  };

  render() {
    return (
      <div>
        <p>Let's Shop!</p>
        <Supershop
          name={"Beer for life"}
          category={"Beer store"}
          price={"$"}
          sells={{
            sell_1: { name: "Colona", price: "$10" },
            sell_2: { name: "Butlight", price: "$7" }
          }}
          sendDrink={this.pickLiqure.bind(this)}
        />
        <Supershop {...store_1} sendDrink={this.pickLiqure.bind(this)} />
        {this.showMessage()}
      </div>
    );
  }
}

export default Store;
