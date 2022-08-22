import { TailwindProvider } from "tailwindcss-react-native";
import { View, Text, StyleSheet, Image, Pressable } from "react-native";
function PowerUp(props) {
  return (
    <TailwindProvider>
      <View className="bg-blue-400">
        <Text style={styles.title}>{props.player}</Text>

        <Text>{props.powerUp}</Text>
        <Pressable className="h-20 w-10 bg-slate-400">
          <Image
            source={require("../assets/powerUps/flipAll.png")}
            className="h-20 w-10 object-scale-down"
          ></Image>
        </Pressable>
      </View>
    </TailwindProvider>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: "blue",
    height: 100,
    width: 200,
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
