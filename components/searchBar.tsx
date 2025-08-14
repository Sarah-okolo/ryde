import { icons } from "@/constants/icons";
import React, { useState } from "react";
import {
  Image,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  TextInput,
  TouchableWithoutFeedback,
  View,
} from "react-native";

export default function SearchBar({ ...props }: any) {
  const [isFocused, setIsFocused] = useState(false);

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
            className={`flex flex-row justify-start items-center relative rounded-full shadow-sm shadow-neutral-200 border ${isFocused ? "bg-primary-100/70 border-main" : "bg-neutral-100 border-neutral-200"}`}
          >
            <Image source={icons.search} className="w-6 h-6 ml-4" />

            <TextInput
              className={`rounded-full p-4 font-JakartaSemiBold flex-1 text-black text-[15px] text-left`}
              placeholder="Where do you want to go?"
              placeholderTextColor="#A0A0A0"
              // value={value}
              // onChangeText={onChangeText}
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
              {...props}
            />
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}
