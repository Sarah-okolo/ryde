import { images } from "@/constants/images";
import React from "react";
import { Image, Text, View } from "react-native";

//  This file is used to display a "Page Not Found" screen
//  when a user navigates to a route that does not exist in the app.
export default function Notfound() {
  return (
    <View className="h-screen flex-1 items-center justify-center">
      <Image
        source={images.pageNotFound}
        className="pb-5 object-contain w-60 h-40"
      />

      <Text className="text-2xl font-JakartaExtraBold mt-8 mb-4">
        Page Not Found
      </Text>

      <Text className="text-lg text-gray-700">
        The page you are looking for does not exist.
      </Text>
    </View>
  );
}
