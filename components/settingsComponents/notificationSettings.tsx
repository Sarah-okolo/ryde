import React from "react";
import { Text, View } from "react-native";
import SwitchBtn from "../switchBtn";

export default function NotificationSettings() {
  return (
    <View>
      <Text className="sectionBlockHeading">Notification Settings</Text>

      <View className="sectionBlock">
        <View className="sectionBlockItem flexBetween">
          <View className="flex-1">
            <Text className="sectionBlockItemHeading">Push Notifications</Text>
            <Text className="sectionBlockItemText text-sm">
              If disabled, you will not receive any push notifications.
            </Text>
          </View>
          <SwitchBtn />
        </View>

        <View className="sectionBlockItem flexBetween">
          <View className="flex-1">
            <Text className="sectionBlockItemHeading">Email Notifications</Text>
            <Text className="sectionBlockItemText text-sm">
              If disabled, you will not receive any email notifications.
            </Text>
          </View>
          <SwitchBtn />
        </View>
      </View>
    </View>
  );
}
