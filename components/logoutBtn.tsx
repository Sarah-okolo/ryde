import { iconSize } from "@/constants/icons";
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { TouchableOpacity } from "react-native";
import { Colors } from "./nativeThemeSetter";

export default function LogoutBtn() {
  const colors = Colors();

  return (
    <TouchableOpacity className="headerIcon">
      <Ionicons
        name="log-out-outline"
        size={iconSize.lg}
        color={colors.danger}
      />
    </TouchableOpacity>
  );
}
