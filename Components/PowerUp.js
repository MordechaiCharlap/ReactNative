import { useState } from "react";
import { View, Text, StyleSheet, Image, Pressable } from "react-native";
function PowerUp(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{props.player}</Text>

      <Text>{props.powerUp}</Text>
      <Pressable style={styles.imageContainer}>
        <Image
          source={require("../assets/powerUps/flipAll.png")}
          style={styles.powerUpImage}
        ></Image>
      </Pressable>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: "blue",
    width: 200,
    alignItems: "center",
  },
  title: {
    fontSize: 30,
  },
  imageContainer: {
    borderRadius: 5,
    backgroundColor: "yellow",
  },
  powerUpImage: {
    width: 150,
    height: 60,
  },
});
export default PowerUp;
