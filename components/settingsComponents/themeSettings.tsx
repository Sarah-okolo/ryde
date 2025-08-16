import { iconColor, iconSize } from "@/constants/icons";
import { useTheme } from "@/contexts/ThemeContext";
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

export default function ThemeSettings() {
  const { theme, setTheme } = useTheme(); // Access the current theme and the function to set a new theme

  return (
    <View>
      <Text className="sectionBlockHeading">Theme Settings</Text>

      <View className="sectionBlock">
        <Themeblock
          iconName="sunny-outline"
          themeName="Light Theme"
          onPress={() => setTheme("light")}
          isActive={theme === "light"}
        />

        <Themeblock
          iconName="moon-outline"
          themeName="Dark Theme"
          onPress={() => setTheme("dark")}
          isActive={theme === "dark"}
        />

        <Themeblock
          iconName="contrast-outline"
          themeName="System Default"
          onPress={() => setTheme("system")}
          isActive={theme === "system"}
        />
      </View>
    </View>
  );
}

function Themeblock({
  iconName,
  themeName,
  isActive,
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

      <TouchableOpacity onPress={onPress}>
        <Ionicons
          name={isActive ? "checkmark-circle" : "radio-button-off"}
          size={iconSize.lg}
          color={isActive ? iconColor.main : iconColor.secondary}
        />
      </TouchableOpacity>
    </View>
  );
}
