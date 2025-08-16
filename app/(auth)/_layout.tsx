import { Colors } from "@/components/nativeThemeSetter";
import { useAuth } from "@clerk/clerk-expo";
import { Redirect, Stack } from "expo-router";
import { StatusBar, View } from "react-native";

export default function Layout() {
  const colors = Colors();
  const { isSignedIn } = useAuth();

  // If the user is signed in, redirect to the home screen.
  if (isSignedIn) {
    return <Redirect href="/(tabs)/home" />;
  }

  return (
    <>
      <StatusBar hidden={true} />

      <View className="noDefultSafeAreaView">
        <Stack
          screenOptions={{
            headerShown: false,
            contentStyle: { flex: 1, backgroundColor: colors.background },
          }}
        >
          <Stack.Screen name="welcome" />

          <Stack.Screen name="sign-up" />

          <Stack.Screen name="sign-in" />

          <Stack.Screen name="get-started" />

          <Stack.Screen name="forgot-password" />
        </Stack>
      </View>
    </>
  );
}
