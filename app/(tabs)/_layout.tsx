import TabBarIcon from "@/components/tabBarIcon";
import { icons } from "@/constants/icons";
import { Tabs } from "expo-router";

// Tabs layout
export default function _layout() {
  return (
    <Tabs
      // Unfortunately the tabs layout does not support global background setting for all the tabs unlike stack layout.
      // So we have to set the tabs background individually inside each tab screen page
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: "#333333",
          borderColor: "transparent",
          borderRadius: 50,
          position: "absolute",
          marginBottom: 30,
          marginHorizontal: 20,
          height: 62,
          overflow: "hidden",
        },
        tabBarItemStyle: {
          width: 60,
          height: 60,
        },
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          title: "Home",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabBarIcon focused={focused} icon={icons.home} />
          ),
        }}
      />

      <Tabs.Screen
        name="rides"
        options={{
          title: "Rides",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabBarIcon focused={focused} icon={icons.list} />
          ),
        }}
      />

      <Tabs.Screen
        name="chat"
        options={{
          title: "Chat",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabBarIcon focused={focused} icon={icons.chat} />
          ),
        }}
      />

      <Tabs.Screen
        name="wallet"
        options={{
          title: "Wallet",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabBarIcon focused={focused} icon={icons.wallet} />
          ),
        }}
      />

      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabBarIcon focused={focused} icon={icons.profile} />
          ),
        }}
      />
    </Tabs>
  );
}
