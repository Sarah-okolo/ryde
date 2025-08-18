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

export default function SignUp() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const colors = Colors();
  const [passwordVisible, setPasswordVisible] = useState(false);

  const onSignUp = async () => {
    // Handle sign-up logic here
    console.log("Sign Up:", form);
  };

  return (
    <ScrollView
      className="flex-1 screenMagBotttom"
      showsVerticalScrollIndicator={false}
    >
      <View className="flex-1">
        <View className="relative w-full h-[250px]">
          <Image source={images.signUpCar} className="z-0 w-full h-[250px]" />

          <Text className="text-2xl text-black font-JakartaSemiBold absolute bottom-5 left-5">
            Create Your Account
          </Text>
        </View>

        <View className="px-7 py-5">
          <InputField
            label="First Name"
            placeholder="Enter your first name"
            value={form.firstName}
            onChangeText={(value) =>
              setForm({
                ...form,
                firstName: value,
              })
            }
            IconLeft={() => (
              <Ionicons
                name="person-outline"
                size={iconSize.md}
                color={colors.iconSecondary}
                className="ml-4"
              />
            )}
            // error='First name is required' // to use zod validation later
          />

          <InputField
            label="Last Name"
            placeholder="Enter your last name"
            value={form.lastName}
            onChangeText={(value) =>
              setForm({
                ...form,
                lastName: value,
              })
            }
            IconLeft={() => (
              <Ionicons
                name="person-outline"
                size={iconSize.md}
                color={colors.iconSecondary}
                className="ml-4"
              />
            )}
          />

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

          <CustomButton
            title="Sign Up"
            className="my-7 p-4"
            onPress={() => onSignUp()}
          />

          <Divider />

          <OAuthBtn />

          <AuthBottomText
            titleText="Already have an account?"
            linkText="Log In"
            onpress={() => router.replace("/(auth)/sign-in")}
          />
        </View>
      </View>
    </ScrollView>
  );
}
