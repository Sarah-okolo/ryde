import { Colors } from "@/components/nativeThemeSetter";
import { iconSize } from "@/constants/icons";
import { images } from "@/constants/images";
import { firstLetter } from "@/utils/stringHelpers";
import { Ionicons } from "@expo/vector-icons";
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
  const colors = Colors();

  return (
    <SafeAreaView className="tabPage screenPadBotttom">
      <View className="header">
        <Text className="headerTitle">Your Profile</Text>

        <TouchableOpacity
          className="headerIcon"
          onPress={() => {
            router.push("/(settings)/settings-page");
          }}
        >
          <Ionicons
            name="settings-outline"
            size={iconSize.lg}
            color={colors.iconPrimary}
          />
        </TouchableOpacity>
      </View>

      <View className="w-32 h-32 flex items-center justify-center rounded-full border-2 border-primary mt-5 mb-7 relative mx-auto">
        {true ? (
          <>
            <Image
              source={images.profilePhoto}
              className="w-full h-full rounded-full"
            />

            <TouchableOpacity className="absolute -bottom-1 right-2 border border-primary bg-foreground p-2 rounded-full">
              <Ionicons
                name="pencil-outline"
                size={iconSize.sm}
                color={colors.iconPrimary}
              />
            </TouchableOpacity>
          </>
        ) : (
          <Text className="text-primary text-3xl font-JakartaMedium font-medium">
            {firstLetter("Sarah") + firstLetter("Johnson")}
          </Text>
        )}
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
          <Text className="font-JakartaMedium text-lg mt-4 mb-3 text-textSecondary">
            {fieldTitle}
          </Text>

          <View
            className={`px-4 rounded-full flex flex-row justify-between items-center border ${fieldEditable ? "border-primary" : "border-inputBorder bg-inputBackground"}`}
          >
            <TextInput
              className={`rounded-full py-4 font-JakartaSemiBold flex-1 text-[15px] text-left mr-3 ${fieldEditable ? "text-inputText" : "text-inputPlaceholder"}`}
              editable={fieldEditable}
              defaultValue={fieldValue}
              onChangeText={() => {}}
              focusable={fieldEditable}
            />
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};
