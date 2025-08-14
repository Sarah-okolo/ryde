import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import CustomButton from "../customButton";

export default function AccountSettings() {
  return (
    <View>
      <Text className="sectionBlockHeading">Account Settings</Text>

      <View className="sectionBlock">
        <TouchableOpacity className="flex-1 flex-row items-center gap-2 mb-4">
          <Text className="sectionBlockItem">Change Password</Text>
        </TouchableOpacity>

        <CustomButton
          title="Delete Account"
          bgVariant="danger"
          textVariant="danger"
        />
      </View>
    </View>
  );
}
