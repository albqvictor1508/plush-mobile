import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Contact() {
  return (
    <TouchableOpacity
      onPress={() => console.log("clicou")}
      style={styles.container}
    >
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          gap: 10,
        }}
      >
        <View style={styles.imgView}></View>
        <View>
          <Text style={styles.whiteText}>Nome</Text>
          <Text style={styles.whiteText}>Mensagem</Text>
        </View>
      </View>
      <View
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 3,
        }}
      >
        <Text style={styles.whiteText}>21:46</Text>
        <View
          style={{
            backgroundColor: "#6000FB",
            height: 30,
            width: 30,
            borderRadius: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text style={styles.whiteText}>270</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    height: "15%",
  },
  imgView: {
    backgroundColor: "#6B6B6B",
    borderRadius: "100%",
    width: 60,
    height: 60,
  },
  whiteText: {
    color: "white",
  },
});
