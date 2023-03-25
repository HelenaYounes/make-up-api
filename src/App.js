import React, {Component} from 'react';
import './App.css';
import Scoreboard from './Scoreboard.js';

class App extends Component {
  state = {
    listPlayers: [
      {
        name: "aba",
        score: 300,
        id: 1
      },
      {
        name: "bbjjjjjjb",
        score:5,
        id: 2
      },
      {
        name: "ccc",
        score: 6,
        id: 3
      }
    ]
  };
  incrementScore = (player) => {
    this.setState(prevState => {
      return {
        score: this.state.score +1
      }
    })
  }
  render(){
    return(
      <div className="scoreboard">
        <Scoreboard listPlayers={this.state.listPlayers} totalPlayers={this.state.listPlayers.length} incrementScore={this.incrementScore}/>
      </div>
    );
  }
}

export default App;
