import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      {/* Main Home */}
      <Stack.Screen
        name="index"
        options={{
          headerShown: false,
          headerTitle: "Home",
          headerStyle: { backgroundColor: "#060112" },
        }}
      />
      {/* Cadastro email */}
      <Stack.Screen
        name="cadastro"
        options={{
          headerTitle: "Verificar Código",
          headerTintColor: "white",
          headerStyle: { backgroundColor: "#060112" },
        }}
      />
      {/* Confirmação do codigo */}
      <Stack.Screen
        name="code/[email]"
        options={{
          headerTitle: "Verificar Código",
          headerTintColor: "white",
          headerStyle: { backgroundColor: "#060112" },
        }}
      />
      {/* Informaçoes adicionais */}
      <Stack.Screen
        name="completeInformations/[userId]"
        options={{
          headerTitle: "Informações",
          headerTintColor: "white",
          headerStyle: { backgroundColor: "#060112" },
        }}
      />
      {/* Chats */}
      <Stack.Screen
        name="(tabs)"
        options={{
          headerShown: false,
          headerTintColor: "white",
          headerStyle: { backgroundColor: "#060112" },
        }}
      />
    </Stack>
  );
}
