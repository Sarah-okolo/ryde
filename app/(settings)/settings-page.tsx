import AccountSettings from "@/components/settingsComponents/accountSettings";
import Faqs from "@/components/faqs";
import LogoutBtn from "@/components/logoutBtn";
import NotificationSettings from "@/components/settingsComponents/notificationSettings";
import SupportInfo from "@/components/settingsComponents/supportInfo";
import ThemeSettings from "@/components/settingsComponents/themeSettings";
import { icons } from "@/constants/icons";
import { router } from "expo-router";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  return (
    <SafeAreaView className="tabPage">
      <View className="header">
        <View className="flex-1 flex-row gap-4 items-center">
          <TouchableOpacity
            onPress={() => {
              router.back();
            }}
          >
            <Image source={icons.backArrow} className="w-7 h-7" />
          </TouchableOpacity>

          <Text className="headerTitle">Settings</Text>
        </View>

        <LogoutBtn />
      </View>

      <ScrollView>
        <ThemeSettings />

        <NotificationSettings />

        <Faqs />

        <SupportInfo />

        <AccountSettings />
      </ScrollView>
    </SafeAreaView>
  );
}
