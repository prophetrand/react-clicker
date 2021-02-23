import React, { Component } from "react";
import ItemCard from "./components/ItemCard";
import Navbar from "./components/Navbar"
import './App.css';
import chibis from "./chibis.json";

class App extends Component {
  state = {
    chibis: chibis,
    score: 0,
    topScore: 0,
    clicked: [],
    message: "Click an image to begin the game!"
  }

  shuffleChibi = () => {
    // Durstenfeld shuffle using ES6 syntax
    const array = this.state.chibis;
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    this.setState({ chibis: array });
  }

  selectChibi = (id) => {
    if (this.state.clicked.indexOf(id) !== -1) {
      // if the clicked image has an id that is in the "clicked" array, then it will have an index that does not equal -1. Score and clicked array are reset as a result.
      this.setState({
        score: 0,
        clicked: [],
        message: "Failure! But you can try again..."
      });
    } else {
      // if the clicked image conversely does not have its id in the "clicked" array, then its id is pushed into it. Then state.score increases by 1 and state.topScore increases if it has been surpassed.
      this.state.clicked.push(id);
      
      this.setState({
        score: this.state.score + 1,
        message: "Success! Push forward!"
      });

      if (this.state.score >= this.state.topScore) {
        this.setState({
          topScore: this.state.topScore + 1
        })
      }
    }
    
    this.shuffleChibi();
  }

  // Lifecycle method utilized to shuffle order of images when the App component is first mounted.
  componentDidMount() {
    this.shuffleChibi();
  }

  render() {
    return (
      <div>
        <Navbar score={this.state.score} topScore={this.state.topScore} message={this.state.message}/>
        <main className="container">
          {this.state.chibis.map(chibi => (
            <ItemCard
              id={chibi.id}
              key={chibi.id}
              image={chibi.image}
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
