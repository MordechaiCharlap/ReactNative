import React, { Component } from "react";
import Square from "./Square";
import { View, StyleSheet, Text } from "react-native";
class Board extends Component {
  constructor(props) {
    super(props);
    this.state = {
      turn: "true",
      squares: Array(9).fill(null),
    };
  }
  checkWin(squaresClone) {
    const squares = squaresClone;
    if (
      (squares[0] == squares[1] &&
        squares[0] == squares[2] &&
        squares[0] != null) ||
      (squares[3] == squares[4] &&
        squares[3] == squares[5] &&
        squares[3] != null) ||
      (squares[6] == squares[7] &&
        squares[6] == squares[8] &&
        squares[6] != null) ||
      (squares[0] == squares[3] &&
        squares[0] == squares[6] &&
        squares[0] != null) ||
      (squares[1] == squares[4] &&
        squares[1] == squares[7] &&
        squares[1] != null) ||
      (squares[2] == squares[5] &&
        squares[2] == squares[8] &&
        squares[2] != null) ||
      (squares[0] == squares[4] &&
        squares[0] == squares[8] &&
        squares[0] != null) ||
      (squares[2] == squares[4] &&
        squares[2] == squares[6] &&
        squares[2] != null)
    ) {
      console.log(this.state.turn ? "X wins" : "O wins");
    }

    console.log("nobody wins");
  }
  handleClick(i) {
    if (this.state.squares != null) {
      if (this.state.squares[i] == null) {
        const squaresClone = this.state.squares.slice();
        if (this.state.turn) squaresClone[i] = "X";
        else squaresClone[i] = "O";
        this.setState(
          {
            squares: squaresClone,
            turn: !this.state.turn,
          },
          this.checkWin(squaresClone)
        );
      }
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
  renderBoard() {
    return (
      <View>
        <View style={styles.boardRow}>
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </View>
        <View style={styles.boardRow}>
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </View>
        <View style={styles.boardRow}>
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </View>
      </View>
    );
  }
  render() {
    return this.renderBoard();
  }
}
const styles = StyleSheet.create({
  boardRow: {
    flex: 1,
    flexDirection: "row",
  },
});
export default Board;
