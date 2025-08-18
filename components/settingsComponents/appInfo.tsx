import { iconSize } from "@/constants/icons";
import { version } from "@/package.json";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { Colors } from "../nativeThemeSetter";

export default function AppInfo() {
  const colors = Colors();

  return (
    <View>
      <Text className="sectionBlockHeading">App Info</Text>

      <View className="sectionBlock">
        <View className="sectionBlockItem flexBetween">
          <Text className="sectionBlockItemHeading">Version</Text>
          <Text className="sectionBlockItemText">{version}</Text>
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
            color={colors.iconSecondary}
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
            color={colors.iconSecondary}
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
            color={colors.iconSecondary}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}
