import { View, Text, TouchableOpacity } from "react-native";
import TxtComponent from "../components/TxtComponent";
import BtnComponent from "../components/BtnComponent";
import BtnComponent2 from "../components/BtnComponent2";
import Img from "../components/ImgComponent";
import BtnComponent3 from "../components/BtnComponent3";
export default function Home() {
  return (
    <View>
      <BtnComponent>
        <Text>ei</Text>
      </BtnComponent>

      <BtnComponent2>
        <Text>ola</Text>
      </BtnComponent2>

      <BtnComponent3>
        <Img></Img>
      </BtnComponent3>
    </View>
  );
}
