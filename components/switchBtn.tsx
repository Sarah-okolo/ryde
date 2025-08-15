import React, { useState } from "react";
import { Platform, Switch } from "react-native";

export default function SwitchBtn() {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

  return (
    <Switch
      trackColor={{ false: "c3c3c3", true: "#7923e1" }}
      thumbColor={isEnabled ? "#ffffff" : "#f0f0f0"}
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
