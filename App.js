import { TailwindProvider } from "tailwindcss-react-native";
import { StatusBar } from "expo-status-bar";
import { Pressable, StyleSheet, Text, View } from "react-native";
import StartMenu from "./components/StartMenu";

function App() {
  return (
    <TailwindProvider>
      <View style={styles.container}>
        <StartMenu />
      </View>
    </TailwindProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
export default App;
