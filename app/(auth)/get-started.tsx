import AuthBottomText from "@/components/authBottomText";
import CustomButton from "@/components/customButton";
import Divider from "@/components/divider";
import OAuthBtn from "@/components/OAuthBtn";
import { images } from "@/constants/images";
import { router } from "expo-router";
import { Image, Text, View } from "react-native";

export default function SignUp() {
  return (
    <View className="flex">
      <Image source={images.getStarted} className="z-0 w-full h-[400px]" />

      <View className="px-6">
        <Text className="text-3xl my-6 text-center text-main font-JakartaSemiBold text-textPrimary">
          Let&apos;s get started
        </Text>

        <Text className="descText text-lg text-center mx-10">
          Sign up or log in to discover the best ride for you
        </Text>

        <View className="py-7 px-6">
          <CustomButton
            title="Sign Up"
            className="p-4"
            onPress={() => router.replace("/(auth)/sign-up")}
          />
        </View>

        <Divider />

        <OAuthBtn />

        <AuthBottomText
          titleText="Already have an account?"
          linkText="Log In"
          onpress={() => router.replace("/(auth)/sign-in")}
        />
      </View>
    </View>
  );
}
