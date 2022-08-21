import { Text } from "react-native";
function Message(props) {
  const winMessage = () => {
    if (props.winner != null) {
      console.log("Win message");
      if (props.winner) return "X won the game";
      return "O won the game";
    } else {
      console.log("winner is null");
    }
  };
  return <Text>{winMessage()}</Text>;
}
export default Message;
