import { Pressable, View, StyleSheet, Text } from "react-native";
import React, { Component } from "react";
class Square extends Component {
  render() {
    return (
      <View>
        <Pressable
          className="square"
          style={styles.square}
          onPress={this.props.pressed}
        >
          <Text style={styles.textInSquare}>{this.props.value}</Text>
        </Pressable>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  square: {
    borderColor: "black",
    borderWidth: 1,
    width: 50,
    height: 50,
  },
  textInSquare: {
    textAlign: "center",
    fontSize: 40,
    fontWeight: "bold",
  },
});
export default Square;
