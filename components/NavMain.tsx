import { PropsWithChildren, useState } from "react";
import {
  Keyboard,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { Search } from "lucide-react-native";
import BuscarContato from "./BuscarContato";

export default function NavMain({
  titulo,
}: PropsWithChildren & { titulo: string }) {
  const [abrirBusca, setAbrirBusca] = useState(false);

  return (
    <>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.navContainter}>
          <View style={styles.container}>
            <Text style={[styles.titulo, styles.whiteText]}>{titulo}</Text>
            <Search
              size={30}
              color={"white"}
              onPress={() => {
                setAbrirBusca(!abrirBusca);
              }}
            />
          </View>
          {abrirBusca && <BuscarContato />}
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
    height: "60%",
    width: "100%",
    display: "flex",
    flexDirection: "row",
    paddingHorizontal: 10,
    justifyContent: "space-between",
    alignItems: "center",
  },
  navContainter: {
    marginTop: 50,
    height: "10%",
    backgroundColor: "#060112",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 10,
  },
  titulo: {
    fontWeight: 800,
    fontSize: 30,
  },
});
