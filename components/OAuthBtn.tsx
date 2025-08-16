import { icons } from "@/constants/icons";
import React from "react";
import { Image, View } from "react-native";
import CustomButton from "./customButton";

export default function OAuthBtn({ text }: { text?: string }) {
  const handleGoogleSignIn = () => {
    // Implement Google Sign-In logic here
    console.log("Google Sign-In button pressed");
  };

  return (
    <View className="py-7 px-6">
      <CustomButton
        title="Continue with Google"
        className="p-4"
        bgVariant="outline"
        textVariant="secondary"
        IconLeft={() => (
          <Image
            source={icons.google}
            resizeMode="contain"
            className="w-6 h-6 mx-2"
          />
        )}
        onPress={handleGoogleSignIn}
      />
    </View>
  );
}
