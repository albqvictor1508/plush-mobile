import {
  Keyboard,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import NavMain from "@/components/NavMain";
import Chat from "@/components/Chat";
import { Archive } from "lucide-react-native";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.wrapper}>
        <NavMain titulo="Plush" />
        <View style={styles.container}>
          <Chat />
          <View style={[styles.inline, styles.between, styles.borderB]}>
            <View style={styles.inline}>
              <Archive color={"gray"} size={20} />
              <Text style={styles.grayText}>Arquivadas</Text>
            </View>
            <Text style={styles.grayText}>35</Text>
          </View>
          <View style={{ gap: 50, marginTop: 30 }}>
            <Contact />
            <Contact />
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: "#060112",
  },
  container: {
    backgroundColor: "#060112",
    flex: 1,
    gap: 6,
    paddingVertical: 10,
    paddingHorizontal: 15,
    overflow: "scroll",
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
  inline: {
    display: "flex",
    flexDirection: "row",
    gap: 5,
  },
  between: {
    justifyContent: "space-between",
    paddingVertical: 7,
  },
  borderB: {
    borderWidth: 0.3,
    borderBottomColor: "#3B3B3B",
  },
});
