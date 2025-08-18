import { Stack } from "expo-router";
import { Colors } from "@/components/nativeThemeSetter";

export default function Layout() {
  const colors = Colors();
  
  return (
    <Stack
      screenOptions={{
        headerShown: false,
        contentStyle: { flex: 1, backgroundColor: colors.background },
      }}
    >
      <Stack.Screen name="settings-page" />

      <Stack.Screen name="faqs" />

      <Stack.Screen name="live-chat" />

      <Stack.Screen name="about-us" />

      <Stack.Screen name="terms-of-use" />

      <Stack.Screen name="privacy-policy" />

      <Stack.Screen name="delete-account" />
    </Stack>
  );
}
