import { PropsWithChildren } from "react";
import {
  Keyboard,
  StyleSheet,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { Search } from "lucide-react-native";

export default function BuscarContato() {
  return (
    <>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container}>
          <Search size={20} color={"white"} />
          <TextInput
            placeholder="Buscar..."
            placeholderTextColor={"gray"}
            style={[styles.whiteText, styles.busca]}
          ></TextInput>
        </View>
      </TouchableWithoutFeedback>
    </>
  );
}

const styles = StyleSheet.create({
  whiteText: {
    color: "white",
  },
  container: {
    height: "30%",
    width: "100%",
    backgroundColor: "#1E1E1E",
    display: "flex",
    flexDirection: "row",
    paddingHorizontal: 10,
    alignItems: "center",
    gap: 10,
    borderRadius: 10,
  },
  titulo: {
    fontWeight: 800,
    fontSize: 30,
  },
  busca: {
    width: "100%",
  },
});
