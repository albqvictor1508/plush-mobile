import { Stack } from "expo-router";

export default function StackLayout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: { backgroundColor: "#060112" },
        headerTintColor: "#fff",
        headerTransparent: true,
        headerBlurEffect: "dark",
      }}
    >
      {/* chat */}
      <Stack.Screen
        name="chat"
        options={{
          headerBackButtonDisplayMode: "minimal",
          headerStyle: { backgroundColor: "#060112" },
          headerShown: false,
        }}
      />
    </Stack>
  );
}
