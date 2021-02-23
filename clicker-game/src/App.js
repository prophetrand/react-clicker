import React, { Component } from "react";
import ItemCard from "./components/ItemCard";
import Navbar from "./components/Navbar"
import './App.css';
import items from "./items.json";

class App extends Component {
  state = {
    items: items,
    score: 0,
    topScore: 0,
    clicked: []
  }

  shuffleChibi = () => {

    const array = this.state.items;

    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    this.setState({ items: array });
  }

  selectChibi = () => {

  }

  // Lifecycle method utilized to shuffle order of images when the App comonent is first mounted.
  componentDidMount() {
    this.shuffleChibi();
  }

  render() {
    return (
      <div>
        <Navbar score={this.state.score} topScore={this.state.topScore} />
        <main className="container">
          {this.state.items.map(item => (
            <ItemCard
              id={item.id}
              key={item.id}
              image={item.image}
              shuffleChibi={this.shuffleChibi}
              selectChibi={this.selectChibi}
            />
          ))}
        </main>
      </div>
    )
  }
}

export default App;
