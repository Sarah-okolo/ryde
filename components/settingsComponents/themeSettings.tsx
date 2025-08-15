import { iconColor, iconSize } from "@/constants/icons";
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { Text, View } from "react-native";

export default function ThemeSettings() {
  return (
    <View>
      <Text className="sectionBlockHeading">Theme Settings</Text>

      <View className="sectionBlock">
        <Themeblock iconName="sunny-outline" themeName="Light Theme" />

        <Themeblock iconName="moon-outline" themeName="Dark Theme" />

        <Themeblock iconName="contrast-outline" themeName="System Default" />
      </View>
    </View>
  );
}

function Themeblock({
  iconName,
  themeName,
  isActive = true,
  onPress,
}: {
  iconName: React.ComponentProps<typeof Ionicons>["name"];
  themeName: string;
  isActive?: boolean;
  onPress?: () => void;
}) {
  return (
    <View className="sectionBlockItem flexBetween">
      <View className="flexBetween">
        <Ionicons
          name={iconName}
          size={iconSize.md}
          color={iconColor.primary}
        />
        <Text className="sectionBlockItemHeading">{themeName}</Text>
      </View>

      <Ionicons
        name={isActive ? "checkmark-circle" : "radio-button-off"}
        size={iconSize.lg}
        color={isActive ? iconColor.main : iconColor.secondary}
      />
    </View>
  );
}
