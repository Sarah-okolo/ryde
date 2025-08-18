import AuthBottomText from "@/components/authBottomText";
import CustomButton from "@/components/customButton";
import Divider from "@/components/divider";
import InputField from "@/components/inputField";
import { Colors } from "@/components/nativeThemeSetter";
import OAuthBtn from "@/components/OAuthBtn";
import { iconSize } from "@/constants/icons";
import { images } from "@/constants/images";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { useState } from "react";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";

export default function SignIn() {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const colors = Colors();
  const [passwordVisible, setPasswordVisible] = useState(false);

  const onSignIn = async () => {
    // Handle sign-in logic here
    router.push("/(tabs)/home");
  };

  return (
    <ScrollView className="flex-1 pb-10" showsVerticalScrollIndicator={false}>
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
            value={form.email}
            onChangeText={(value) =>
              setForm({
                ...form,
                email: value,
              })
            }
            IconLeft={() => (
              <Ionicons
                name="mail-outline"
                size={iconSize.md}
                color={colors.iconSecondary}
                className="ml-4"
              />
            )}
          />

          <InputField
            label="Password"
            placeholder="Enter your password"
            value={form.password}
            secureTextEntry={!passwordVisible}
            onChangeText={(value) =>
              setForm({
                ...form,
                password: value,
              })
            }
            IconLeft={() => (
              <Ionicons
                name="lock-closed-outline"
                size={iconSize.md}
                color={colors.iconSecondary}
                className="ml-5"
              />
            )}
            IconRight={() => (
              <TouchableOpacity
                onPress={() => setPasswordVisible(!passwordVisible)}
              >
                <Ionicons
                  name={passwordVisible ? "eye-off-outline" : "eye-outline"}
                  size={iconSize.md}
                  color={colors.iconSecondary}
                  className="mr-4"
                />
              </TouchableOpacity>
            )}
          />

          <TouchableOpacity
            className="flex flex-row items-center justify-end mt-2"
            onPress={() => router.push("/(auth)/forgot-password")}
          >
            <Text className="text-primary font-JakartaSemiBold">
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

          <AuthBottomText
            titleText="Don't have an account?"
            linkText="Sign Up"
            onpress={() => router.replace("/(auth)/sign-up")}
          />
        </View>
      </View>
    </ScrollView>
  );
}
