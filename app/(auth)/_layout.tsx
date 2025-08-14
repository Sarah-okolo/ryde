import { useAuth } from "@clerk/clerk-expo";
import { Redirect, Stack } from "expo-router";
import { StatusBar, View } from "react-native";

export default function Layout() {
  const { isSignedIn } = useAuth();

  // If the user is signed in, redirect to the home screen.
  if (isSignedIn) {
    return <Redirect href="/(tabs)/home" />;
  }

  return (
    <>
      <StatusBar hidden={true} />

      <View className="noDefultSafeAreaView">
        <Stack>
          <Stack.Screen
            name="welcome"
            options={{
              headerShown: false,
            }}
          />

          <Stack.Screen
            name="sign-up"
            options={{
              headerShown: false,
            }}
          />

          <Stack.Screen
            name="sign-in"
            options={{
              headerShown: false,
            }}
          />

          <Stack.Screen
            name="get-started"
            options={{
              headerShown: false,
            }}
          />

          <Stack.Screen
            name="forgot-password"
            options={{
              headerShown: false,
            }}
          />
        </Stack>
      </View>
    </>
  );
}
