import { Pressable, View, Text } from "react-native";
import React, { Component } from "react";
import Game from "./Game";
class StartMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chosenOption: null,
    };
  }

  StartSinglePlayer() {
    this.setState({ chosenOption: 1 });
  }
  Start2Players() {
    this.setState({ chosenOption: 2 });
  }
  StartMultiPlayer() {
    this.setState({ chosenOption: 3 });
  }
  render() {
    if (this.state.chosenOption == null)
      return (
        <View>
          <Pressable onPress={() => this.StartSinglePlayer()}>
            <Text>SinglePlayer</Text>
          </Pressable>
          <Pressable onPress={() => this.Start2Players()}>
            <Text>2 players</Text>
          </Pressable>
          <Pressable onPress={this.StartMultiPlayer}>
            <Text>Multiplayer</Text>
          </Pressable>
        </View>
      );
    else if (this.state.chosenOption == 2) {
      return (
        <View>
          <Game />
        </View>
      );
    }
  }
}
export default StartMenu;
