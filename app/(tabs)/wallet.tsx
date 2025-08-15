import CustomButton from "@/components/customButton";
import InputField from "@/components/inputField";
import PhoneInputField from "@/components/phoneInputField";
import { icons } from "@/constants/icons";
import { images } from "@/constants/images";
import { useState } from "react";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Wallet() {
  const [isWalletSetup, setIsWalletSetup] = useState(false);

  return (
    <SafeAreaView className="tabPage">
      <ScrollView showsVerticalScrollIndicator={false}>
        <View className="header">
          <Text className="headerTitle">Wallet</Text>

          <TouchableOpacity className="icon">
            <Image source={icons.info} className="iconImg" />
          </TouchableOpacity>
        </View>

        {isWalletSetup ? (
          <View className="flex flex-1">
            <Text>This is the wallet page</Text>
            <WalletSetup />
          </View>
        ) : (
          <NoWallet />
        )}
      </ScrollView>
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

export function WalletSetup() {
  const [phoneFieldFocused, setPhoneFieldFocused] = useState(false);
  const [form, setForm] = useState({
    bvn: "",
    phone: "",
  });

  return (
    <View className="flex flex-1 items-center">
      <Text className="text-3xl mt-5 font-JakartaSemiBold font-semibold text-black">
        Wallet Setup
      </Text>
      <Text className="descText text-center text-lg mt-2 mx-8">
        Set up your ryde wallet to enable seamless payment for your trips.
      </Text>

      <View className="flex-1 w-full">
        <InputField
          label="BVN"
          placeholder="Enter your BVN"
          icon={icons.person}
          value={form.bvn}
          onChangeText={(value) =>
            setForm({
              ...form,
              bvn: value,
            })
          }
        />
        <PhoneInputField
          value={form.phone}
          fieldFocused={phoneFieldFocused}
          onChangeText={(value) =>
            setForm({
              ...form,
              phone: value,
            })
          }
          onFocus={() => setPhoneFieldFocused(true)}
          onBlur={() => setPhoneFieldFocused(false)}
        />
      </View>

      <CustomButton
        onPress={() => console.log("Setup Wallet")}
        title="Submit"
        bgVariant="primary"
        className="mt-10 w-80"
      />
    </View>
  );
}
