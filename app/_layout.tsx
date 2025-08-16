import { ThemeProvider } from "@/contexts/ThemeContext";
import { ClerkProvider } from "@clerk/clerk-expo";
import { tokenCache } from "@clerk/clerk-expo/token-cache";
import { Stack } from "expo-router";
import "../global.css";
import { Colors } from "@/components/nativeThemeSetter";

export default function RootLayout() {
    const colors = Colors();
  
  return (
    <ClerkProvider tokenCache={tokenCache}>
      <ThemeProvider>
        <Stack
          screenOptions={{
            headerShown: false,
            contentStyle: { flex: 1, backgroundColor: colors.background },
          }}
        >
          <Stack.Screen name="index" />

          <Stack.Screen name="(tabs)" />

          <Stack.Screen name="(auth)" />

          <Stack.Screen name="(settings)" />

          <Stack.Screen name="+not-found" />
        </Stack>
      </ThemeProvider>
    </ClerkProvider>
  );
}
