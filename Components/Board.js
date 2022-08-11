import React, { Component } from "react";
import Square from "./Square";
import { View, StyleSheet } from "react-native";
class Board extends Component {
  constructor(props) {
    super(props);
    this.state = {
      turn: "true",
      squares: Array(9).fill(null),
    };
  }
  checkWin() {}
  handleClick(i) {
    if (this.state.squares[i] == null) {
      const squares = this.state.squares.slice();
      console.log("test");
      if (this.state.turn) squares[i] = "X";
      else squares[i] = "O";
      console.log(squares[i]);
      this.setState({ squares: squares, turn: !this.state.turn });
      this.checkWin();
    }
  }
  renderSquare(i) {
    return (
      <Square
        value={this.state.squares[i]}
        pressed={() => this.handleClick(i)}
      ></Square>
    );
  }
  render() {
    return (
      <View>
        <View style={styles.boardRow}>
          {this.renderSquare(0)} {this.renderSquare(1)} {this.renderSquare(2)}
        </View>
        <View style={styles.boardRow}>
          {this.renderSquare(3)} {this.renderSquare(4)} {this.renderSquare(5)}
        </View>
        <View style={styles.boardRow}>
          {this.renderSquare(6)} {this.renderSquare(7)} {this.renderSquare(8)}
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  boardRow: {
    flex: 1,
    flexDirection: "row",
  },
});
export default Board;
