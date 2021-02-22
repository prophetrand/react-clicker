import React, { Component } from "react";
import ItemCard from "./components/ItemCard";
import Navbar from "./components/Navbar"
import './App.css';
import items from "./items.json";

class App extends Component {
  state = {
    items: items,
    score: 0,
    topScore: 0
  }

  render() {
    return (
      <div>
        <Navbar />
        <main className="container">
          {this.state.items.map(item => (
            <ItemCard 
              id={item.id}
              key={item.id}
              image={item.image}
            />
          ))}
        </main>
      </div>
    )
  }
}

export default App;
