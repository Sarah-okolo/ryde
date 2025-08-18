import React from "react";
import { View } from "react-native";
import { WebView } from "react-native-webview";

export default function LiveChat() {
  return (
    <View className="flex-1 h-full">
      <WebView
        source={{
          uri: "https://tawk.to/chat/689ed581a4fc79192a7c832b/1j2m740mm",
        }}
      />
    </View>
  );
}
 