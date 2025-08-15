import { iconColor, iconSize } from "@/constants/icons";
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

export default function AccountSettings() {
  return (
    <View>
      <Text className="sectionBlockHeading">Account Settings</Text>

      <View className="sectionBlock">
        <TouchableOpacity className="sectionBlockItem flexBetween">
          <View className="flexBetween">
            <Ionicons
              name="lock-closed-outline"
              size={iconSize.md}
              color={iconColor.primary}
            />
            <Text className="sectionBlockItemHeading">Change Password</Text>
          </View>
          <Ionicons
            name="chevron-forward"
            size={iconSize.lg}
            color={iconColor.secondary}
          />
        </TouchableOpacity>

        <TouchableOpacity className="sectionBlockItem flexBetween">
          <View className="flexBetween">
            <Ionicons
              name="trash-outline"
              size={iconSize.md}
              color={iconColor.danger}
            />
            <Text className="sectionBlockItemHeading !text-danger-600">
              Delete Account
            </Text>
          </View>
          <Ionicons
            name="chevron-forward"
            size={iconSize.lg}
            color={iconColor.danger}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}
