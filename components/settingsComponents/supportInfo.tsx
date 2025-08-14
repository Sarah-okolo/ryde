import React from "react";
import { Linking, Text, TouchableOpacity, View } from "react-native";
import CustomButton from "../customButton";

export default function SupportInfo() {
  const handleEmailPress = () => {
    Linking.openURL("mailto:support@rhyde.com");
  };

  const handlePhonePress = () => {
    Linking.openURL("tel:+1234567890");
  };

  return (
    <View>
      <Text className="sectionBlockHeading">Support</Text>

      <View className="sectionBlock">
        <Text className="descText">
          You can contact our support team through any of the following means:
        </Text>

        <View className="sectionBlockItem flex flex-row justify-between items-center mt-4">
          <Text>Email:</Text>
          <TouchableOpacity onPress={handleEmailPress}>
            <Text className="text-neutral-400 font-normal font-Jakarta underline">
              support@rhyde.com
            </Text>
          </TouchableOpacity>
        </View>

        <View className="sectionBlockItem flex flex-row justify-between items-center mt-2">
          <Text>Phone:</Text>
          <TouchableOpacity onPress={handlePhonePress}>
            <Text className="text-neutral-400 font-normal font-Jakarta underline">
              (+1) 234 567 890
            </Text>
          </TouchableOpacity>
        </View>

        <View className="sectionBlockItem flex flex-row justify-between items-center mt-2">
          <Text>Live Chat:</Text>
          <Text className="text-neutral-400 font-normal font-Jakarta">
            Available 24/7
          </Text>
        </View>

        <CustomButton title="Live chat" />
      </View>
    </View>
  );
}
