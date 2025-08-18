import CustomButton from "@/components/customButton";
import OnboardingScreens from "@/components/onboardingScreens";
import { onboarding } from "@/constants/onboarding";
import { router } from "expo-router";
import { useRef, useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import Swiper from "react-native-swiper";

// This component handles the onboarding process for the app
// It displays a series of screens that introduce the app's features
// and allows users to skip to the sign-in screen if they choose.
export default function Onboarding() {
  const swiperRef = useRef<Swiper>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const isLastSlide = activeIndex === onboarding.length - 1; // Check if the current slide is the last one

  return (
    <View className="flex-1 items-center justify-between screenPadBotttom">
      <TouchableOpacity
        className="w-full items-end justify-end pt-10 px-7"
        onPress={() => {
          // Skip the onboarding process and navigate to the sign-in screen
          router.replace("/(auth)/get-started"); // This will replace the current screen in the stack with the sign-in screen
        }}
      >
        <Text className="text-md font-JakartaBold font-bold text-textPrimary">
          Skip
        </Text>
      </TouchableOpacity>

      {/* This components is used to create swipe screens for onboarding */}
      <Swiper
        ref={swiperRef} // Reference to the swiper instance
        loop={false} // Disable looping to prevent infinite swiping
        dot={<View className="w-8 h-1 mx-1 bg-iconFaint" />} // This allows us to customize how the swiper dots would look like
        activeDot={<View className="w-8 h-1 mx-1 bg-primary" />} // Active dot styling
        onIndexChanged={(index) => setActiveIndex(index)} // Update the active index when the swiper changes
      >
        {/* Onboarding screens */}
        {onboarding.map((item) => (
          <OnboardingScreens key={item.id} screen={item} /> // Render each onboarding screen
        ))}
      </Swiper>

      <CustomButton
        title={isLastSlide ? "Get Started" : "Next"}
        className="w-[80%] mt-10 mx-5"
        onPress={() =>
          isLastSlide
            ? router.replace("/(auth)/get-started")
            : swiperRef.current?.scrollBy(1)
        }
      />
    </View>
  );
}
