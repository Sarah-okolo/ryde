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

  return (
    // The keyboard avoiding view is used to adjust the view when the keyboard is open
    // This is useful for input fields to ensure they are not hidden by the keyboard
    <KeyboardAvoidingView>
      {/* The TouchableWithoutFeedback component is just like the TouchableOpacity but it doesn't show feedback on press */}
      <TouchableWithoutFeedback>
        <View className="my-2 w-full">
          <Text
            className={`text-lg text-black font-JakartaSemiBold mb-2 ${labelStyle}`}
          >
            {label}
          </Text>

          <View
            className={`flex flex-row justify-start items-center  relative rounded-full border ${containerStyle} ${isFocused ? "bg-primary-100 border-main" : "bg-neutral-100 border-neutral-200"}`}
          >
            {icon && (
              <Image source={icon} className={`w-6 h-6 ml-4 ${iconStyle}`} />
            )}

            <TextInput
              className={`rounded-full p-4 font-JakartaSemiBold flex-1 text-[15px] text-left ${inputStyle}`}
              secureTextEntry={secureTextEntry}
              placeholder={placeholder}
              placeholderTextColor="#A0A0A0"
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
