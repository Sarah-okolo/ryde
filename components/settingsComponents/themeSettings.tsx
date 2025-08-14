import { MaterialCommunityIcons } from "@expo/vector-icons";
import React from "react";
import { Text, View } from "react-native";

export default function ThemeSettings() {
  return (
    <View>
      <Text className="sectionBlockHeading">Theme Settings</Text>

      <View className="sectionBlock">
        <View className="flex-row items-center justify-between mb-4">
          <Text className="text-lg font-medium text-neutral-900">
            Dark Mode
          </Text>
          <MaterialCommunityIcons
            name="toggle-switch"
            size={24}
            className="fill-main"
          />
        </View>

        <View className="flex-row items-center justify-between mb-4">
          <Text className="settingsText">
            Light Mode
          </Text>
          <MaterialCommunityIcons
            name="toggle-switch-off"
            size={24}
            color="blue"
          />
        </View>

        <View className="flex-row items-center justify-between mb-4 gap-3">
          <View className="flex-1">
            <Text className="text-lg font-medium text-neutral-900">
              System Default
            </Text>
            <Text className="text-sm descText">
              When enabled, the app will follow your device&apos;s theme
              settings.
            </Text>
          </View>

          <MaterialCommunityIcons
            name="toggle-switch"
            size={24}
            color="black"
          />
        </View>
      </View>
    </View>
  );
}
