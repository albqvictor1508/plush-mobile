import { StyleSheet, Text, View } from "react-native";
import { EllipsisIcon } from "lucide-react-native";

export default function Chat() {
  return (
    <View style={styles.container}>
      <View style={styles.inline}>
        <Text style={styles.whiteText}>Chats</Text>
        <EllipsisIcon color={"white"} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    overflowY: "scroll",
    width: "100%",
  },
  whiteText: {
    color: "white",
    fontWeight: 600,
    fontSize: 15,
  },
  inline: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
});
