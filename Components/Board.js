import React, { Component } from "react";
import Square from "./Square";
import { View, StyleSheet, Text } from "react-native";
class Board extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isActive: true,
      turn: true,
      squares: Array(9).fill(null),
    };
  }
  message() {
    if (this.state.isActive) {
      return `${this.state.turn == true ? "X" : "O"}'s turn`;
    } else {
      return `${this.state.turn == true ? "X" : "O"} won the game`;
    }
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
      this.setState({ isActive: false });
      this.props.onWinnerChosen(this.state.turn);
    } else {
      console.log("nobody wins");
      if (squaresClone.every((square) => square != null)) {
        const squaresClone = squares.slice();
        squaresClone.forEach((element) => {
          element = null;
        });
        this.setState(
          { isActive: false, squares: squaresClone },
          this.props.onTie()
        );
        console.log("tie");
      } else this.setState({ turn: !this.state.turn });
    }
  }
  handleClick(i) {
    if (this.state.isActive) {
      if (this.state.squares[i] == null) {
        const squaresClone = this.state.squares.slice();
        if (this.state.turn) squaresClone[i] = "X";
        else squaresClone[i] = "O";
        this.setState(
          {
            squares: squaresClone,
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
    return (
      <View>
        <Text>{this.message()}</Text>
        {this.renderBoard()}
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
