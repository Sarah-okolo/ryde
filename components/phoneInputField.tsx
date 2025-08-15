import React from "react";
import {
  KeyboardAvoidingView,
  Text,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import type { PhoneInputProps } from "react-native-phone-number-input";
import RNPhoneInput from "react-native-phone-number-input";

const PhoneInput =
  RNPhoneInput as unknown as React.ComponentType<PhoneInputProps>;

export default function phoneInputField({
  value,
  onChangeText,
  fieldFocused,
  onFocus,
  onBlur,
}: {
  value: string;
  onChangeText: (text: string) => void;
  fieldFocused: boolean;
  onFocus: () => void;
  onBlur: () => void;
}) {
  return (
    <KeyboardAvoidingView>
      <TouchableWithoutFeedback>
        <View className="my-2 w-full">
          <Text className={`text-lg text-black font-JakartaSemiBold mb-2`}>
            Phone Number
          </Text>
          <PhoneInput
            value={value}
            placeholder="Enter your phone number"
            defaultCode="NG"
            layout="first"
            flagButtonStyle={{
              width: 50,
            }}
            containerStyle={{
              borderWidth: 1,
              borderColor: fieldFocused ? "#7923e1" : "#e5e5e5",
              borderRadius: 9999,
              backgroundColor: fieldFocused ? "#F5F8FF" : "#f5f5f5",
              overflow: "scroll",
              width: "100%",
              marginBottom: 2,
              marginTop: 2,
              height: 50,
            }}
            textContainerStyle={{
              paddingHorizontal: 0,
              backgroundColor: "transparent", // matches outer
            }}
            textInputStyle={{
              backgroundColor: fieldFocused ? "#F5F8FF" : "#f5f5f5",
              fontSize: 15,
              height: 50,
            }}
            codeTextStyle={{
              backgroundColor: fieldFocused ? "#F5F8FF" : "#f5f5f5",
              fontSize: 15,
              height: 50,
              lineHeight: 50,
              textAlignVertical: "center", // for android
            }}
            onChangeFormattedText={onChangeText}
            textInputProps={{
              onFocus,
              onBlur,
            }}
          />
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}
