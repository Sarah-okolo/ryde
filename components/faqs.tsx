import React from "react";
import { Text, View } from "react-native";

export default function Faqs() {
  return (
    <View>
      <View className="flex-1 flex-row items-center justify-between mb-4">
        <Text className="sectionBlockHeading">Frequently Asked Questions</Text>
        <Text className="text-main">See all </Text>
      </View>

      <View className="sectionBlock">
        <View className="sectionBlockItem mt-4">
          <Text className="text-neutral-900 font-JakartaMedium">
            How do I reset my password?
          </Text>
          <Text className="text-neutral-500">
            You can reset your password by going to the account settings and
            selecting Change Password.
          </Text>
        </View>
      </View>
    </View>
  );
}
