import { Colors } from "@/components/nativeThemeSetter";
import { iconSize } from "@/constants/icons";
import { Ionicons } from "@expo/vector-icons";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Rides() {
  const colors = Colors();

  return (
    <SafeAreaView className="tabPage">
      <View className="header">
        <Text className="headerTitle">Popular Car</Text>

        <View className="flex flex-row items-center">
          <Text className="font-JakartaMedium font-medium text-primary mr-2">
            Ascending
          </Text>

          <Ionicons
            name="chevron-down-outline"
            size={iconSize.sm}
            color={colors.primary}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}
