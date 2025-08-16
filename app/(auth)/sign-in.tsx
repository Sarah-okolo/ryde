import CustomButton from "@/components/customButton";
import Divider from "@/components/divider";
import InputField from "@/components/inputField";
import OAuthBtn from "@/components/OAuthBtn";
import { icons } from "@/constants/icons";
import { images } from "@/constants/images";
import { router } from "expo-router";
import { useState } from "react";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";

export default function SignIn() {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const onSignIn = async () => {
    // Handle sign-in logic here
    router.push("/(tabs)/home");
  };

  return (
    <ScrollView
      className="flex-1 pb-10"
      showsVerticalScrollIndicator={false}
    >
      <View className="flex-1">
        <View className="relative w-full h-[250px]">
          <Image source={images.signUpCar} className="z-0 w-full h-[250px]" />

          <Text className="text-2xl text-black font-JakartaSemiBold absolute bottom-5 left-5">
            Welcome Back 👋
          </Text>
        </View>

        <View className="px-7 py-5">
          <InputField
            label="Email"
            placeholder="Enter your email"
            icon={icons.email}
            value={form.email}
            onChangeText={(value) =>
              setForm({
                ...form,
                email: value,
              })
            }
          />

          <InputField
            label="Password"
            placeholder="Enter your password"
            icon={icons.lock}
            value={form.password}
            secureTextEntry={true}
            onChangeText={(value) =>
              setForm({
                ...form,
                password: value,
              })
            }
          />

          <TouchableOpacity
            className="flex flex-row items-center justify-end mt-2"
            onPress={() => router.push("/(auth)/forgot-password")}
          >
            <Text className="text-main font-JakartaSemiBold">
              Forgot Password?
            </Text>
          </TouchableOpacity>

          <CustomButton
            title="Log in"
            className="my-7 p-4"
            onPress={() => onSignIn()}
          />

          <Divider />

          <OAuthBtn />

          <Text className="text-neutral-600 text-lg mt-3 flex flex-1 items-center justify-center text-center w-full">
            <Text>Don&apos;t have an account? </Text>
            <TouchableOpacity onPress={() => router.push("/(auth)/sign-up")}>
              <Text className="text-main font-JakartaSemiBold relative top-0.5">
                Sign up
              </Text>
            </TouchableOpacity>
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}
