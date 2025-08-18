import { Colors } from "@/components/nativeThemeSetter";
import { iconSize } from "@/constants/icons";
import Ionicons from "@expo/vector-icons/Ionicons";
import { router } from "expo-router";
import React from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function TermsOfUse() {
  const colors = Colors();

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
              color={colors.iconPrimary}
            />
          </TouchableOpacity>

          <Text className="headerTitle">Terms of Use</Text>
        </View>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}></ScrollView>
    </SafeAreaView>
  );
}
