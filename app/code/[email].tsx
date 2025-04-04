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

export default function CodePage() {
  const { email } = useLocalSearchParams();
  const [code, setCode] = useState(["", "", "", ""]);

  const inputRefs = [
    useRef<TextInput>(null),
    useRef<TextInput>(null),
    useRef<TextInput>(null),
    useRef<TextInput>(null),
  ];

  const handleChange = (text: string, index: number) => {
    const newCode = [...code];
    newCode[index] = text;
    setCode(newCode);

    //todo: Melhorar essa lógica aqui depois.
    if (text !== "" && index < inputRefs.length - 1) {
      inputRefs[index + 1].current?.focus(); // Move para o próximo campo
    }

    if (text === "" && index < inputRefs.length + 1) {
      inputRefs[index - 1].current?.focus(); // Move para o campo anterior
    }
  };

  function changePage() {
    // deve ser passado o id do usuário logado aqui
    // verificar se tem como fazer o lance la de encapsular o layout
    router.push(`/completeInformations/1`);
  }

  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/images/cellphone.png")}
        style={styles.imageSize}
      />
      <Text style={[styles.whiteText, styles.title]}>
        Seu código foi enviado!
      </Text>
      <View style={[styles.inline, { gap: 1 }]}>
        <Text style={styles.whiteText}>Um código foi enviado ao email: </Text>
        <Text style={styles.purpleText}>{email}</Text>
      </View>
      <View style={styles.inline}>
        {inputRefs.map((ref, index) => (
          <TextInput
            key={index}
            ref={ref}
            style={styles.codeInput}
            keyboardType="numeric"
            maxLength={1}
            value={code[index]}
            onChangeText={(text) => handleChange(text, index)}
          />
        ))}
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
  codeInput: {
    borderWidth: 1,
    borderColor: "#6000FB",
    width: 60,
    height: 60,
    borderRadius: 10,
    fontSize: 30,
    textAlign: "center",
    color: "white",
  },
  inline: {
    display: "flex",
    flexDirection: "row",
    gap: 20,
  },
});
