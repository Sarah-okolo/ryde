import { iconColor, iconSize } from "@/constants/icons";
import Ionicons from "@expo/vector-icons/Ionicons";
import { router } from "expo-router";
import React from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function AboutUs() {
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
              color={iconColor.primary}
            />
          </TouchableOpacity>

          <Text className="headerTitle">About Us</Text>
        </View>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}></ScrollView>
    </SafeAreaView>
  );
}
