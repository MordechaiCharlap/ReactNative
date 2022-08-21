import { StyleSheet, Pressable, Text } from "react-native";
function StartOverButton(props) {
  if (props.isActive == null)
    return (
      <Pressable style={styles.startOverButton} onPress={props.startOver}>
        <Text style={styles.startOverText}>Start over!</Text>
      </Pressable>
    );
  else
    return (
      <Pressable style={styles.startOverButtonInvisible}>
        <Text style={styles.startOverText}>Start over!</Text>
      </Pressable>
    );
}
const styles = StyleSheet.create({
  startOverButton: {
    margin: 10,
    backgroundColor: "#1e3755",
    borderWidth: 1,
    borderColor: "black",
  },
  startOverButtonInvisible: {
    visibility: "hidden",
    margin: 10,
    backgroundColor: "#1e3755",
    borderWidth: 1,
    borderColor: "black",
  },
  startOverText: {
    color: "white",
  },
});
export default StartOverButton;
