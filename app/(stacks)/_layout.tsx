import { Stack } from "expo-router";

export default function StackLayout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: { backgroundColor: "#060112" },
        headerTintColor: "#fff", // deixa o título branco
      }}
    >
      {/* chat */}
      <Stack.Screen
        name="chat"
        options={{
          headerTitle: "Nome do contato",
          headerStyle: { backgroundColor: "#060112" },
        }}
      />
    </Stack>
  );
}
