import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "../styles/Styleshetts";
export default function BtnComponent2({ children }) {
  return (
    <View>
      <TouchableOpacity
        style={styles.button2}
        onPress={() => alert("Agora voce esta logado!")}
      >
        {children}
      </TouchableOpacity>
    </View>
  );
}
