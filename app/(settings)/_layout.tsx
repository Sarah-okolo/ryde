import { Stack } from "expo-router";

export default function Layout() {
  return (
    <Stack>
      <Stack.Screen
        name="settings-page"
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="faqs"
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="live-chat"
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="about-us"
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="terms-of-use"
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="privacy-policy"
        options={{
          headerShown: false,
        }}
      />
    </Stack>
  );
}
