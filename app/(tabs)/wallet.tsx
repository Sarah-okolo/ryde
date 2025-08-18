import CustomButton from "@/components/customButton";
import InputField from "@/components/inputField";
import { Colors } from "@/components/nativeThemeSetter";
import PhoneInputField from "@/components/phoneInputField";
import { iconSize } from "@/constants/icons";
import { images } from "@/constants/images";
import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Wallet() {
  const [isWalletSetup, setIsWalletSetup] = useState(false);
  const colors = Colors();

  return (
    <SafeAreaView className="tabPage">
      <ScrollView showsVerticalScrollIndicator={false}>
        <View className="header">
          <Text className="headerTitle">Wallet</Text>

          <TouchableOpacity className="headerIcon" onPress={() => {}}>
            <Ionicons
              name="information-circle-outline"
              size={iconSize.lg}
              color={colors.iconPrimary}
            />
          </TouchableOpacity>
        </View>

        {isWalletSetup ? (
          <View className="flex flex-1">
            <Text>This is the wallet page</Text>
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

      <Text className="text-3xl my-5 font-JakartaSemiBold font-semibold text-textPrimary">
        Wallet Setup
      </Text>
      <Text className="descText text-center text-lg mx-8">
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
  const colors = Colors();

  return (
    <View className="flex flex-1 items-center">
      <Text className="text-3xl mt-5 font-JakartaSemiBold font-semibold text-textPrimary">
        Wallet Setup
      </Text>
      <Text className="descText text-center text-lg mt-5 mx-8">
        Set up your ryde wallet to enable seamless payment for your trips.
      </Text>

      <View className="flex-1 w-full">
        <InputField
          label="BVN"
          placeholder="Enter your email"
          value={form.bvn}
          onChangeText={(value) =>
            setForm({
              ...form,
              bvn: value,
            })
          }
          IconLeft={() => (
            <Ionicons
              name="information-circle-outline"
              size={iconSize.md}
              color={colors.iconSecondary}
              className="ml-4"
            />
          )}
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
