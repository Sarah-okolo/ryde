import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

export default function AuthBottomText({
  titleText,
  linkText,
  onpress,
}: {
  titleText: string;
  linkText: string;
  onpress: () => void;
}) {
  return (
    <View className="mt-1 flex flex-row items-center justify-center">
      <Text className="text-faintText text-lg">{titleText} </Text>
      <TouchableOpacity onPress={onpress}>
        <Text className="text-primary font-JakartaSemiBold text-base">
          {linkText}
        </Text>
      </TouchableOpacity>
    </View>
  );
}
