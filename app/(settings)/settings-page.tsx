import LogoutBtn from "@/components/logoutBtn";
import { Colors } from "@/components/nativeThemeSetter";
import AccountSettings from "@/components/settingsComponents/accountSettings";
import AppInfo from "@/components/settingsComponents/appInfo";
import NotificationSettings from "@/components/settingsComponents/notificationSettings";
import SupportInfo from "@/components/settingsComponents/supportInfo";
import ThemeSettings from "@/components/settingsComponents/themeSettings";
import { iconSize } from "@/constants/icons";
import Ionicons from "@expo/vector-icons/Ionicons";
import { router } from "expo-router";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  const colors = Colors();

  return (
    <SafeAreaView className="tabPage">
      <View className="header">
        <View className="flex-1 flex-row gap-4 items-center">
          <TouchableOpacity
            onPress={() => {
              router.back();
            }}
          >
            <Ionicons
              name="arrow-back-outline"
              size={iconSize.lg}
              color={colors.iconPrimary}
            />
          </TouchableOpacity>

          <Text className="headerTitle">Settings</Text>
        </View>

        <LogoutBtn />
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        <ThemeSettings />

        <NotificationSettings />

        <AccountSettings />

        <SupportInfo />

        <AppInfo />
      </ScrollView>
    </SafeAreaView>
  );
}
