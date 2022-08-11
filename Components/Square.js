import { Pressable, View, StyleSheet } from "react-native";
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
          {this.props.value}
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
    textAlign: "center",
    fontSize: 40,
    fontWeight: "bold",
  },
});
export default Square;
