import { View, Text, Image } from "react-native";
import { styles } from "../styles/Styleshetts";
const img = {
  uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMal0tBwFJFF0CVIe7cixk3vrardx6ESUvFA&usqp=CAU",
};

export default function Img() {
  return <Image style={styles.img} source={img} />;
}
