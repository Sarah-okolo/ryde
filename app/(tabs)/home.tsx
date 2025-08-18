import Map from "@/components/map";
import { Colors } from "@/components/nativeThemeSetter";
import SearchBar from "@/components/searchBar";
import { iconSize } from "@/constants/icons";
import { images } from "@/constants/images";
import { firstLetter } from "@/utils/stringHelpers";
import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Home() {
  const [hasNotifications, setHasNotifications] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const colors = Colors();

  return (
    <SafeAreaView className="tabPage">
      <View className="header">
        <View className="flex-1 flex-row gap-3 items-center">
          <View className="w-12 h-12 flex items-center justify-center rounded-full border border-primary">
            {true ? (
              <Image
                source={images.profilePhoto}
                className="w-full h-full rounded-full"
              />
            ) : (
              <Text className="text-primary text-lg font-JakartaMedium font-medium">
                {firstLetter("Sarah") + firstLetter("Johnson")}
              </Text>
            )}
          </View>

          <Text className="headerTitle">
            Hi,{" "}
            <Text
              className={`text-primary ${isLoading ? "animate-pulse" : ""}`}
            >
              {isLoading ? "..." : "Sarah"}
            </Text>
          </Text>
        </View>

        <TouchableOpacity className="headerIcon">
          {hasNotifications ? (
            <Ionicons
              name="notifications"
              size={iconSize.lg}
              color={colors.primary}
            />
          ) : (
            <Ionicons
              name="notifications-outline"
              size={iconSize.lg}
              color={colors.iconPrimary}
            />
          )}
        </TouchableOpacity>
      </View>

      {/* We are wrapping the content in scrollview to enusre that the keyboard is dismissed when anywhere outside the searchBar is clicked */}
      <ScrollView showsVerticalScrollIndicator={false}>
        <SearchBar />

        <View className="">
          <Text className="subHeading">Your current location</Text>
          <View className="flex flex-row items-center h-[300px]">
            <Map />
          </View>
        </View>

        <View className="">
          <Text className="subHeading my-4">Recent Rides</Text>
          <Text className="descText text-center">Coming soon</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
