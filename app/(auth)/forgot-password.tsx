import AuthBottomText from "@/components/authBottomText";
import { router } from "expo-router";
import React from "react";
import { Text, View } from "react-native";

export default function forgotPassword() {
  return (
    <View className="flex-1 px-7 py-5">
      <Text>forgot-password</Text>

      <AuthBottomText
        titleText="Remembered your password?"
        linkText="Log In"
        onpress={() => router.replace("/(auth)/sign-in")}
      />
    </View>
  );
}
