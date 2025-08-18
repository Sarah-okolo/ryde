import { InputFieldProps } from "@/types/type";
import React, { useState } from "react";
import {
  KeyboardAvoidingView,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { Colors } from "./nativeThemeSetter";

export default function InputField({
  label,
  labelStyle,
  placeholder,
  value,
  inputStyle,
  IconLeft,
  IconRight,
  onChangeText,
  containerStyle,
  secureTextEntry = false,
  error,
}: InputFieldProps) {
  const [isFocused, setIsFocused] = useState(false);
  const colors = Colors();

  return (
    // The keyboard avoiding view is used to adjust the view when the keyboard is open
    // This is useful for input fields to ensure they are not hidden by the keyboard
    <KeyboardAvoidingView>
      {/* The TouchableWithoutFeedback component is just like the TouchableOpacity but it doesn't show feedback on press */}
      <TouchableWithoutFeedback>
        <View className="my-2 w-full">
          <Text
            className={`text-lg text-textPrimary font-JakartaSemiBold mb-2 ${labelStyle}`}
          >
            {label}
          </Text>

          <View
            className={`flex flex-row justify-start items-center relative rounded-full border ${containerStyle} ${isFocused ? "bg-inputFocusBackground border-inputFocusBorder/50" : "bg-inputBackground border-inputBorder"}`}
          >
            {IconLeft && <IconLeft />}

            <TextInput
              className={`rounded-full p-4 font-JakartaSemiBold flex-1 text-[15px] text-left text-inputText ${inputStyle}`}
              secureTextEntry={secureTextEntry}
              placeholder={placeholder}
              placeholderTextColor={
                isFocused
                  ? colors.inputFocusPlaceholder
                  : colors.inputPlaceholder
              }
              value={value}
              onChangeText={onChangeText}
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
            />

            {IconRight && <IconRight />}
          </View>

          {error && (
            <Text
              className={`text-sm text-error font-JakartaMedium font-medium mt-1 ml-2`}
            >
              {error}
            </Text>
          )}
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}
