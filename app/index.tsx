import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Link, router } from "expo-router";

export default function HomePage() {
  function changePage() {
    // router.push("/cadastro");
    router.push("/(tabs)");
  }

  return (
    <View style={styles.container}>
      <View style={styles.imgContainer}>
        <Text style={styles.whiteText}>imagem</Text>
      </View>
      <View style={styles.textContainer}>
        <Text style={[styles.whiteText, styles.title]}>
          Bem-vindo ao <Text style={styles.purpleText}>Plush</Text>
        </Text>
        <Text style={styles.grayText}>Junte-se com seus amigos via chats.</Text>
      </View>
      {/* <Link href="/code"> Mudar de página</Link> */}
      <TouchableOpacity style={styles.button} onPress={changePage}>
        <Text style={styles.buttonText}>Começar agora</Text>
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
    padding: 30,
  },
  imgContainer: {
    backgroundColor: "#1E1E1E",
    borderRadius: 10,
    height: "55%",
    width: "80%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  whiteText: {
    color: "#FFFFFF",
  },
  textContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  grayText: {
    color: "#6B6B6B",
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
  title: {
    fontSize: 32,
  },
  purpleText: {
    color: "#4A00E0",
  },
});
