import { Text, View } from "react-native";

export default function Divider() {
  return (
    <View className="flex flex-row items-center justify-center gap-4 mx-5 overflow-hidden">
      <View className="w-full h-[1px] bg-border rounded-full" />
      <Text className="text-center text-faintText">Or</Text>
      <View className="w-full h-[1px] bg-border rounded-full" />
    </View>
  );
}
