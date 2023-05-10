import { Image, View } from "react-native";
import { Text } from "react-native-paper";
import { styles } from "../utils/styles";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.tabTop}>
        <Text style={styles.logoText}>Toyota Quiz</Text>
      </View>
      <Image
        source={{ uri: "https://picsum.photos/300" }}
        style={{ width: 300, height: 300 }}
      />

      <Text style={styles.texto}>Oi eu sou a Home</Text>
    </View>
  );
}
