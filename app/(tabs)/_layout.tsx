import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Tabs } from "expo-router";
import { BlurView } from "expo-blur";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#6000FB",
        headerShown: false,
        tabBarStyle: { position: "absolute" },
        tabBarBackground: () => <BlurView tint="dark" intensity={100} />,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Chats",
          tabBarIcon: ({ color }) => (
            <FontAwesome size={28} name="comments" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="stories"
        options={{
          title: "Stories",
          tabBarIcon: ({ color }) => (
            <FontAwesome size={20} name="camera" color={color || "white"} />
          ),
        }}
      />
      <Tabs.Screen
        name="configs"
        options={{
          title: "Ajustes",
          tabBarIcon: ({ color }) => (
            <FontAwesome size={24} name="gear" color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
