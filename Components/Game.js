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
  handleWinner = (turn) => {
    if (turn) {
      this.setState({ winner: "X" });
    } else {
      this.setState({ winner: "O" });
      return null;
    }
    console.log("winner handled");
  };
  handleTie = () => {
    console.log("test handleTie");
    this.render();
  };
  render() {
    console.log("game returned");
    return (
      <View>
        {/* <Message winner={this.state.winner} /> */}
        <Board onTie={this.handleTie} onWinnerChosen={this.handleWinner} />
      </View>
    );
  }
}
export default Game;
