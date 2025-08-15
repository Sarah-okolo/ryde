import { icons } from "@/constants/icons";
import ProfilePhotoStatus from "@/utils/profilePhotoStatus";
import { router } from "expo-router";
import { useState } from "react";
import {
  Image,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Profile() {
  const profilePhoto = ProfilePhotoStatus();

  return (
    <SafeAreaView className="tabPage">
      <View className="header">
        <Text className="headerTitle">Your Profile</Text>

        <TouchableOpacity
          className="icon"
          onPress={() => router.push("/(settings)/settings-page")}
        >
          <Image source={icons.settings} className="iconImg" />
        </TouchableOpacity>
      </View>

      <View className="w-40 h-40 rounded-full border-2 border-white shadow-lg shadow-neutral-400 my-5 relative mx-auto">
        <Image source={profilePhoto} className="w-full h-full rounded-full" />

        <TouchableOpacity className="absolute bottom-0 right-4 bg-white p-2 rounded-full shadow-sm shadow-neutral-100">
          <Image source={icons.editImage} className="w-5 h-5 opacity-70" />
        </TouchableOpacity>
      </View>

      <ScrollView className="sectionBlock" showsVerticalScrollIndicator={false}>
        <DetailsFields fieldTitle="First name" fieldValue="Sarah" />
        <DetailsFields fieldTitle="Last name" fieldValue="Johnson" />
        <DetailsFields
          fieldTitle="Email"
          fieldValue="sarah.johnson@example.com"
        />
        <DetailsFields fieldTitle="Email status" fieldValue="Verified" />
        <DetailsFields fieldTitle="Phone" fieldValue="+1234567890" />
      </ScrollView>
    </SafeAreaView>
  );
}

export const DetailsFields = ({
  fieldTitle,
  fieldValue,
}: {
  fieldTitle: string;
  fieldValue: string;
}) => {
  const [fieldEditable, setFieldEditable] = useState(false);
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"} // This adjusts the view when the keyboard is open
    >
      <TouchableWithoutFeedback
        onPress={() => Keyboard.dismiss()} // This dismisses the keyboard when the user taps outside the input field
      >
        <View>
          <Text className="font-JakartaMedium text-xl my-4 text-neutral-500">
            {fieldTitle}
          </Text>

          <View
            className={`bg-primary-100 p-4 rounded-full flex flex-row justify-between items-center border  ${fieldEditable ? "border-main" : "border-transparent"}`}
          >
            <TextInput
              className={`font-JakartaMedium font-medium text-xl text-neutral-600 flex-1 mr-3`}
              editable={fieldEditable}
              defaultValue={fieldValue}
              onChangeText={() => {}}
              focusable={fieldEditable}
            />

            <TouchableOpacity onPress={() => setFieldEditable(!fieldEditable)}>
              <Image source={icons.editField} className="w-8 h-8" />
            </TouchableOpacity>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};
