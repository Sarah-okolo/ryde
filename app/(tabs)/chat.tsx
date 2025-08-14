import LogoutBtn from "@/components/logoutBtn";
import { images } from "@/constants/images";
import { Image, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Chat() {
  return (
    <SafeAreaView className="tabPage">
      <View className="header">
        <Text className="headerTitle">Chat List</Text>

        <LogoutBtn />
      </View>

      <NoMessage />
    </SafeAreaView>
  );
}

export function NoMessage() {
  return (
    <View className="flex items-center justify-center relative top-44">
      <View className="mx-5 relative bottom-5 w-96 h-48">
        <Image source={images.message} className="w-full h-full" />
      </View>

      <Text className="text-3xl font-JakartaSemiBold font-semibold text-black">
        No Messages, yet.
      </Text>
      <Text className="descText text-center text-lg mt-2 mx-8">
        Your messages will appear here once you start chatting with someone.
      </Text>
    </View>
  );
}
