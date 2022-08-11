import React, { Component } from "react";
import Board from "./Board";
import { View } from "react-native";
class Game extends Component {
  render() {
    return (
      <View>
        <Board />
      </View>
    );
  }
}
export default Game;
