import CustomButton from "@/components/customButton";
import Divider from "@/components/divider";
import InputField from "@/components/inputField";
import OAuthBtn from "@/components/OAuthBtn";
import { icons } from "@/constants/icons";
import { images } from "@/constants/images";
import { router } from "expo-router";
import { useState } from "react";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";

export default function SignUp() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const onSignUp = async () => {
    // Handle sign-up logic here
    console.log("Sign Up:", form);
  };

  return (
    <ScrollView className="flex-1 bg-white">
      <View className="flex-1">
        <View className="relative w-full h-[250px]">
          <Image source={images.signUpCar} className="z-0 w-full h-[250px]" />

          <Text className="text-2xl text-black font-JakartaSemiBold absolute bottom-5 left-5">
            Create Your Account
          </Text>
        </View>

        <View className="px-7 py-5">
          <InputField
            label="Name"
            placeholder="Enter your name"
            icon={icons.person}
            value={form.name}
            onChangeText={(value) =>
              setForm({
                ...form,
                name: value,
              })
            }
          />

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

          <CustomButton
            title="Sign Up"
            className="my-7 p-4"
            onPress={() => onSignUp()}
          />

          <Divider />

          <OAuthBtn />

          <Text className="text-neutral-600 text-lg mt-3 flex flex-1 items-center justify-center text-center w-full">
            <Text>Already have an account? </Text>
            <TouchableOpacity onPress={() => router.push("/(auth)/sign-in")}>
              <Text className="text-main font-JakartaSemiBold relative top-0.5">
                Log in
              </Text>
            </TouchableOpacity>
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}
