import { icons } from "@/constants/icons";
import React from "react";
import { Image, TouchableOpacity } from "react-native";

export default function LogoutBtn() {
  return (
    <TouchableOpacity className="icon !bg-danger-200">
      <Image source={icons.out} className="iconImg" />
    </TouchableOpacity>
  );
}
