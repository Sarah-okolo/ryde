import CustomButton from "@/components/customButton";
import { icons } from "@/constants/icons";
import { images } from "@/constants/images";
import { useState } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Chat() {
  const [isWalletSetup, setIsWalletSetup] = useState(false);

  return (
    <SafeAreaView className="tabPage">
      <View className="header">
        <Text className="headerTitle">Wallet</Text>

        <TouchableOpacity className="icon">
          <Image source={icons.info} className="iconImg" />
        </TouchableOpacity>
      </View>

      {isWalletSetup ? (
        <View className="flex items-center justify-center mt-10">
          <Text className="text-lg text-gray-500">Your wallet is set up!</Text>
        </View>
      ) : (
        <NoWallet />
      )}
    </SafeAreaView>
  );
}

export function NoWallet() {
  return (
    <View className="flex items-center justify-center relative top-44">
      <View className="mx-5 relative bottom-5 w-96 h-48">
        <Image source={images.walletSetup} className="w-full h-full" />
      </View>

      <Text className="text-3xl mt-5 font-JakartaSemiBold font-semibold text-black">
        Wallet Setup
      </Text>
      <Text className="descText text-center text-lg mt-2 mx-8">
        Set up your ryde wallet to enable seamless payment for your trips.
      </Text>

      <CustomButton
        onPress={() => console.log("Setup Wallet")}
        title="Set Up Wallet"
        bgVariant="primary"
        className="mt-10 w-80"
      />
    </View>
  );
}
