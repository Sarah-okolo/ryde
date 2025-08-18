import CustomButton from "@/components/customButton";
import { Colors } from "@/components/nativeThemeSetter";
import { deleteReasons } from "@/constants/accountDeleteReasons";
import { iconSize } from "@/constants/icons";
import Ionicons from "@expo/vector-icons/Ionicons";
import { router } from "expo-router";
import React from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function DeleteAccount() {
  const colors = Colors();

  const handleDeleteAccount = () => {
    // Logic to handle account deletion
    router.push("/(auth)/sign-in");
  };

  return (
    <SafeAreaView className="tabPage">
      <View className="header">
        <View className="flex-1 flex-row gap-4 items-center">
          <TouchableOpacity
            onPress={() => {
              router.back();
            }}
          >
            <Ionicons
              name="arrow-back-outline"
              size={iconSize.lg}
              color={colors.danger}
            />
          </TouchableOpacity>

          <Text className="headerTitle !text-danger">Delete Account</Text>
        </View>
      </View>

      <ScrollView showsVerticalScrollIndicator={false} className="pt-5">
        <Text className="text-7xl text-center mb-4 mt-2 pt-2">🥺</Text>
        <Text className="text-textSecondary text-center font-JakartaMedium text-lg mb-4">
          We&apos;re sorry to see you go. Please let us know why you&apos;re
          deleting your account.
        </Text>

        <View className="my-5">
          {deleteReasons.map((item) => (
            <DeleteReason key={item.id} reason={item.reason} />
          ))}
        </View>
      </ScrollView>

      <View className="absolute bottom-10 left-0 right-0 p-4">
        <Text className="text-textPrimary text-center px-5 text-sm mb-5">
          By clicking the button below, all your data on the app will be deleted
          and cannot be recovered.
        </Text>
        <CustomButton
          title="Confirm Delete"
          className="p-4"
          bgVariant="danger"
          textVariant="danger"
          onPress={handleDeleteAccount}
        />
      </View>
    </SafeAreaView>
  );
}

function DeleteReason({ reason }: { reason: string }) {
  const colors = Colors();
  const [checked, setChecked] = React.useState(false);

  return (
    <TouchableOpacity
      className="flex-row items-center justify-between bg-foreground rounded-md mb-5 p-4"
      onPress={() => {
        setChecked(!checked);
      }}
    >
      <Text className="text-textPrimary text-lg font-JakartaMedium">
        {reason}
      </Text>
      {checked ? (
        <Ionicons name="checkbox" size={iconSize.lg} color={colors.primary} />
      ) : (
        <View className="border border-textSecondary rounded-sm p-[8px]"></View>
      )}
    </TouchableOpacity>
  );
}
