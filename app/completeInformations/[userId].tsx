import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { useLocalSearchParams, router } from "expo-router";
import { useState } from "react";

export default function ChatPage() {
  const { userId } = useLocalSearchParams();

  const [userName, setUserName] = useState("Insira seu Nome");

  return (
    <View style={styles.container}>
      <View style={styles.imgContainer}>
        <Text style={styles.whiteText}>imagem</Text>
      </View>
      <Text style={[styles.whiteText, styles.title]}>{userName}</Text>
      <Text style={{ color: "#6B6B6B" }}>
        Está na hora de completar seu perfil!
      </Text>
      <View
        style={{
          width: 110,
          height: 110,
          borderRadius: "100%",
          backgroundColor: "#1E1E1E",
        }}
      ></View>
      <TextInput
        style={styles.input}
        placeholder="Insira o seu nome..."
        // onChangeText={(text) => setEmail(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="email@email.com"
        // onChangeText={(text) => setEmail(text)}
      />

      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          router.push("/(tabs)");
        }}
      >
        <Text style={styles.buttonText}>Iniciar Jornada</Text>
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
    padding: 60,
    gap: 10,
  },
  imgContainer: {
    backgroundColor: "#1E1E1E",
    borderRadius: 10,
    height: "35%",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  whiteText: {
    color: "white",
  },
  title: {
    fontWeight: 600,
    fontSize: 25,
  },
  input: {
    borderWidth: 1,
    borderColor: "#6000FB",
    width: "100%",
    height: 40,
    borderRadius: 10,
    fontSize: 15,
    padding: 10,
    color: "white",
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
});
