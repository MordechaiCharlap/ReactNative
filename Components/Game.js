import React, { Component } from "react";
import Board from "./Board";
import Message from "./Message";
import { View } from "react-native";
class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      winner: null,
    };
  }
  winner = (winnerLetter = null) => {
    if (winnerLetter) {
      this.setState({ winner: winnerLetter });
    } else {
      if (this.state.winner != null) return this.state.winner;
      return null;
    }
  };
  render() {
    console.log("game returned");
    return (
      <View>
        <Message winner={this.winner} />
        <Board winner={this.winner} />
      </View>
    );
  }
}
export default Game;
