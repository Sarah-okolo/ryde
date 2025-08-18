import { iconSize } from "@/constants/icons";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import Modal from "react-native-modal";
import { Colors } from "../nativeThemeSetter";

export default function AccountSettings() {
  const colors = Colors();
  const [isModalVisible, setModalVisible] = React.useState(false);

  return (
    <View>
      <Text className="sectionBlockHeading">Account Settings</Text>

      <View className="sectionBlock">
        <TouchableOpacity
          className="sectionBlockItem flexBetween"
          onPress={() => setModalVisible(true)}
        >
          <View className="flexBetween">
            <Ionicons
              name="lock-closed-outline"
              size={iconSize.md}
              color={colors.iconSecondary}
            />
            <Text className="sectionBlockItemHeading">Change Password</Text>
          </View>
          <Ionicons
            name="chevron-forward-outline"
            size={iconSize.lg}
            color={colors.iconSecondary}
          />
        </TouchableOpacity>

        <Modal
          isVisible={isModalVisible}
          onBackdropPress={() => setModalVisible(false)}
          hideModalContentWhileAnimating={true}
        >
          <View className="sectionBlock">
            <Text className="text-textPrimary">Change your password</Text>
          </View>
        </Modal>

        <TouchableOpacity
          className="sectionBlockItem flexBetween"
          onPress={() => {
            router.push("/(settings)/delete-account");
          }}
        >
          <View className="flexBetween">
            <Ionicons
              name="trash-outline"
              size={iconSize.md}
              color={colors.danger}
            />
            <Text className="sectionBlockItemHeading !text-danger">
              Delete Account
            </Text>
          </View>
          <Ionicons
            name="chevron-forward"
            size={iconSize.lg}
            color={colors.danger}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}
