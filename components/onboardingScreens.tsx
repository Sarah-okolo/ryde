import { Image, Text, View } from "react-native";

interface OnboardingScreenProps {
  screen: {
    title: string;
    description: string;
    image: any;
  };
}

export default function OnboardingScreens({ screen }: OnboardingScreenProps) {
  return (
    <View className="flex-1 items-center justify-center">
      <Image
        source={screen.image}
        className="w-full h-[300px] relative bottom-20"
        resizeMode="contain"
      />

      <View className="flex flex-row items-center justify-center w-full">
        <Text className="text-black text-3xl font-bold mx-10 text-center">
          {screen.title}
        </Text>
      </View>

      <Text className="descText text-lg text-center mt-3 mx-10">
        {screen.description}
      </Text>
    </View>
  );
}
