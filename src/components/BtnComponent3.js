import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "../styles/Styleshetts";
export default function BtnComponent3({ children }) {
  return (
    <TouchableOpacity
      style={styles.button3}
      onPress={() => alert("Agora voce esta logado!")}
    >
      {children}
    </TouchableOpacity>
  );
}
