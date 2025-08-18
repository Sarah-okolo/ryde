import React, { useState } from "react";
import { Platform, Switch } from "react-native";
import { Colors } from "./nativeThemeSetter"; // Adjust the import path as necessary

export default function SwitchBtn() {
  const [isEnabled, setIsEnabled] = useState(false);
  const colors = Colors();
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

  return (
    <Switch
      trackColor={{ false: "c3c3c3", true: colors.primary }}
      thumbColor={isEnabled ? colors.white : "#f0f0f0"}
      onValueChange={toggleSwitch}
      value={isEnabled}
      style={
        Platform.OS === "ios"
          ? { transform: [{ scaleX: 0.7 }, { scaleY: 0.7 }] }
          : {}
      } // adjust size for iOS only
    />
  );
}
