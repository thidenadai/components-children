import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "../styles/Styleshetts";
export default function BtnComponent({ children }) {
  return (
    <View>
      <TouchableOpacity
        style={styles.button}
        onPress={() => alert("Agora voce esta logado!")}
      >
        {children}
      </TouchableOpacity>
    </View>
  );
}
