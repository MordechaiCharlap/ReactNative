import { Text } from "react-native";
import { useState } from "react";
function Message(props) {
  //const [winner, setWinner] = useState(props.winner);
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
