import { Text } from "react-native";
import { useState } from "react";
function Message(props) {
  const [winner, setWinner] = useState(props.winner);
  const winMessage = () => {
    console.log("winmessage");
    if (winner) return "X won the game";
    return "O won the game";
  };
  return <Text>{winMessage()}</Text>;
}
export default Message;
