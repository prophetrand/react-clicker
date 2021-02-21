import React, { Component } from "react";
import Wrapper from "./components/Wrapper";
import ItemCard from "./components/ItemCard";
import './App.css';
import items from "./items.json";

class App extends Component {
  state = {
    items: items
  }

  render() {
    return (
      <Wrapper>

      </Wrapper>
    )
  }
}

export default App;
