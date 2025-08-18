import { Colors } from "@/components/nativeThemeSetter";
import { iconSize } from "@/constants/icons";
import { images } from "@/constants/images";
import { Ionicons } from "@expo/vector-icons";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Chat() {
  const colors = Colors();

  return (
    <SafeAreaView className="tabPage">
      <View className="header">
        <Text className="headerTitle">Chat List</Text>

        <TouchableOpacity className="headerIcon" onPress={() => {}}>
          <Ionicons
            name="menu-outline"
            size={iconSize.lg}
            color={colors.iconPrimary}
          />
        </TouchableOpacity>
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

      <Text className="text-3xl font-JakartaSemiBold font-semibold text-textPrimary my-5">
        No Messages, yet.
      </Text>
      <Text className="descText text-center text-lg mt-2 mx-8">
        Your messages will appear here once you start chatting with someone.
      </Text>
    </View>
  );
}
