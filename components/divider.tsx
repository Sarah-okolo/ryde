import { Text, View } from "react-native";

export default function Divider() {
  return (
    <View className="flex flex-row items-center justify-center gap-4 mx-5 overflow-hidden">
      <View className="w-full h-[1px] bg-neutral-300" />
      <Text className="text-center text-neutral-500">Or</Text>
      <View className="w-full h-[1px] bg-neutral-300" />
    </View>
  );
}
