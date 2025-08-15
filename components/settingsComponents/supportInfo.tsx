import { iconColor, iconSize } from "@/constants/icons";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
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
        <CustomButton
          title="Frequently Asked Questions"
          bgVariant="outline"
          textVariant="primary"
          className="my-3 mx-8"
          IconRight={() => (
            <Ionicons
              name="chevron-forward-outline"
              size={iconSize.md}
              color={iconColor.secondary}
              className="mx-2"
            />
          )}
          onPress={() => {
            router.push("/(settings)/faqs");
          }}
        />

        <View className="sectionBlockItem flexBetween">
          <View className="flexBetween">
            <Ionicons
              name="mail-outline"
              size={iconSize.md}
              color={iconColor.primary}
            />
            <Text className="sectionBlockItemHeading">Email:</Text>
          </View>
          <TouchableOpacity onPress={handleEmailPress}>
            <Text className="sectionBlockItemText underline">
              support@rhyde.com
            </Text>
          </TouchableOpacity>
        </View>

        <View className="sectionBlockItem flexBetween">
          <View className="flexBetween">
            <Ionicons
              name="call-outline"
              size={iconSize.md}
              color={iconColor.primary}
            />
            <Text className="sectionBlockItemHeading">Phone:</Text>
          </View>
          <TouchableOpacity onPress={handlePhonePress}>
            <Text className="sectionBlockItemText underline">
              (+234) 234 567 890
            </Text>
          </TouchableOpacity>
        </View>

        <View className="sectionBlockItem flexBetween">
          <View className="flexBetween">
            <Ionicons
              name="headset-outline"
              size={iconSize.md}
              color={iconColor.primary}
            />
            <Text className="sectionBlockItemHeading">Live Chat</Text>
          </View>
          <Text className="sectionBlockItemText">Available 24/7</Text>
        </View>

        <CustomButton
          title="Live chat"
          className="my-3 mx-8"
          IconLeft={() => (
            <Ionicons
              name="headset-outline"
              size={iconSize.md}
              color={iconColor.white}
              className="mx-2"
            />
          )}
          onPress={() => {
            router.push("/(settings)/live-chat");
          }}
        />
      </View>
    </View>
  );
}
