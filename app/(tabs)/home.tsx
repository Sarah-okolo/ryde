import SearchBar from "@/components/searchBar";
import { icons } from "@/constants/icons";
import ProfilePhotoStatus from "@/utils/profilePhotoStatus";
import { useState } from "react";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Home() {
  const [hasNotifications, setHasNotifications] = useState(true);
  const profilePhoto = ProfilePhotoStatus();

  return (
    <SafeAreaView className="tabPage">
      <View className="header">
        <View className="flex-1 flex-row gap-3 items-center">
          <Image
            source={profilePhoto}
            className="w-12 h-12 rounded-full border border-white shadow-sm shadow-neutral-300"
          />

          <Text className="headerTitle">
            Hi, <Text className="text-main">{"Sarah"}</Text>
          </Text>
        </View>

        <TouchableOpacity className="icon">
          {hasNotifications ? (
            <Image source={icons.notificationFilled} className="iconImg" />
          ) : (
            <Image source={icons.notificationEmpty} className="iconImg" />
          )}
        </TouchableOpacity>
      </View>

      {/* We are wrapping the content in scrollview to enusre that the keyboard is dismissed when anywhere outside the searchBar is clicked */}
      <ScrollView>
        <SearchBar />

        <View className="">
          <Text className="font-JakartaSemiBold font-semibold text-2xl my-4">
            Your current location
          </Text>
          <Text className="descText text-center">Coming soon</Text>
        </View>

        <View className="">
          <Text className="font-JakartaSemiBold font-semibold text-2xl my-4">
            Recent Rides
          </Text>
          <Text className="descText text-center">Coming soon</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
