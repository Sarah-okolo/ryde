import { iconSize } from "@/constants/icons";
import { Ionicons } from "@expo/vector-icons";
import React, { useState } from "react";
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  TextInput,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { Colors } from "./nativeThemeSetter";

export default function SearchBar() {
  const [isFocused, setIsFocused] = useState(false);
  const colors = Colors();

  return (
    // The keyboard avoiding view is used to adjust the view when the keyboard is open
    // This is useful for input fields to ensure they are not hidden by the keyboard
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"} // This adjusts the view when the keyboard is open
    >
      {/* The TouchableWithoutFeedback component is just like the TouchableOpacity but it doesn't show feedback on press */}
      <TouchableWithoutFeedback
        onPress={() => Keyboard.dismiss()} // This dismisses the keyboard when the user taps outside the input field
      >
        <View className="my-2 w-full">
          <View
            className={`flex flex-row justify-start items-center relative rounded-full border ${isFocused ? "bg-inputFocusBackground border-inputFocusBorder/50" : "bg-inputBackground border-inputBorder"}`}
          >
            <Ionicons
              name="search-outline"
              size={iconSize.md}
              color={colors.iconSecondary}
              className="ml-5"
            />

            <TextInput
              className={`rounded-full p-4 font-JakartaSemiBold flex-1 text-[15px] text-left text-inputText`}
              placeholder="Where do you want to go?"
              placeholderTextColor={
                isFocused
                  ? colors.inputFocusPlaceholder
                  : colors.inputPlaceholder
              }
              // value={value}
              // onChangeText={onChangeText}
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
            />
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}
