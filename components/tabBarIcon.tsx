import React from "react";
import { Image, View } from "react-native";

export default function TabBarIcon({
  focused,
  icon,
}: {
  focused: boolean;
  icon: any;
}) {
  return (
    <View
      className={`rounded-full p-2.5 relative top-3 ${focused ? "bg-main" : "bg-transparent"}`}
    >
      <Image source={icon} className="w-8 h-8" />
    </View>
  );
}
