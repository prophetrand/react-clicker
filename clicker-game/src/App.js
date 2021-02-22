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
    const shuffled = this.state.items.sort(() => Math.random() - 0.1);
    console.log(shuffled);
    this.setState({ items: shuffled });
  }

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
