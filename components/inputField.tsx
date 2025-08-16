import { InputFieldProps } from "@/types/type";
import React, { useState } from "react";
import {
  Image,
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
  icon,
  iconStyle,
  onChangeText,
  containerStyle,
  secureTextEntry = false,
  ...props
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
            className={`flex flex-row justify-start items-center relative rounded-full border ${containerStyle} ${isFocused ? "bg-inputFocusBackground border-inputFocusBorder shadow-md shadow-inputFocusShadow" : "bg-inputBackground border-inputBorder"}`}
          >
            {icon && (
              <Image source={icon} className={`w-6 h-6 ml-4 ${iconStyle}`} />
            )}

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
              {...props}
            />
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}
