import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Rides() {
  return (
    <SafeAreaView className="tabPage">
      <View className="header">
        <Text className="headerTitle">Popular Car</Text>

        <Text className="font-JakartaMedium font-medium text-main mr-3">
          Ascending
        </Text>
      </View>
    </SafeAreaView>
  );
}
