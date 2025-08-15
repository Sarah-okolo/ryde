import { iconColor, iconSize } from "@/constants/icons";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

export default function AppInfo() {
  return (
    <View>
      <Text className="sectionBlockHeading">App Info</Text>

      <View className="sectionBlock">
        <View className="sectionBlockItem flexBetween">
          <Text className="sectionBlockItemHeading">Version</Text>
          <Text className="sectionBlockItemText">1.0.0</Text>
        </View>

        <TouchableOpacity
          className="sectionBlockItem flexBetween"
          onPress={() => router.push("/(settings)/about-us")}
        >
          <View className="flexBetween">
            <Text className="sectionBlockItemHeading">About Us</Text>
          </View>
          <Ionicons
            name="chevron-forward"
            size={iconSize.lg}
            color={iconColor.secondary}
          />
        </TouchableOpacity>

        <TouchableOpacity
          className="sectionBlockItem flexBetween"
          onPress={() => router.push("/(settings)/terms-of-use")}
        >
          <View className="flexBetween">
            <Text className="sectionBlockItemHeading">Terms of Use</Text>
          </View>
          <Ionicons
            name="chevron-forward"
            size={iconSize.lg}
            color={iconColor.secondary}
          />
        </TouchableOpacity>

        <TouchableOpacity
          className="sectionBlockItem flexBetween"
          onPress={() => router.push("/(settings)/privacy-policy")}
        >
          <View className="flexBetween">
            <Text className="sectionBlockItemHeading">Privacy Policy</Text>
          </View>
          <Ionicons
            name="chevron-forward"
            size={iconSize.lg}
            color={iconColor.secondary}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}
