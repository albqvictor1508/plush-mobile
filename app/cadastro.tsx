import { Link, router, useLocalSearchParams } from "expo-router";
import { useRef, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  TextInput,
} from "react-native";

export default function CadastroPage() {
  const [email, setEmail] = useState("");

  function changePage() {
    router.push(`/code/${email}`);
  }

  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/images/cellphone.png")}
        style={styles.imageSize}
      />
      <Text style={[styles.whiteText, styles.title]}>Digite seu Email</Text>

      <View style={styles.labelView}>
        <Text style={styles.whiteText}>Email: </Text>
        <TextInput
          style={styles.emailInput}
          onChangeText={(text) => setEmail(text)}
        />
      </View>

      <TouchableOpacity style={styles.button} onPress={changePage}>
        <Text style={styles.buttonText}>Continuar</Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#060112",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 30,
    padding: 40,
  },
  imageSize: {
    height: 200,
    width: 200,
  },
  button: {
    backgroundColor: "#6000FB", // Cor do fundo
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8, // Borda arredondada
    alignItems: "center",
    width: "100%",
  },
  buttonText: {
    color: "white", // Cor do texto
    fontSize: 16,
    fontWeight: "bold",
  },
  whiteText: { color: "white" },
  purpleText: { color: "#6000FB" },
  title: { fontSize: 25, fontWeight: 700 },
  emailInput: {
    borderWidth: 1,
    borderColor: "#6000FB",
    width: "100%",
    height: 60,
    borderRadius: 10,
    fontSize: 15,
    padding: 10,
    color: "white",
  },
  inline: {
    display: "flex",
    flexDirection: "row",
    gap: 20,
  },
  labelView: {
    display: "flex",
    flexDirection: "column",
    gap: 10,
    width: "100%",
  },
});
