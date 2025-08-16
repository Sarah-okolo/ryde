// This file is used to set the native theme based on the current theme context.
import { DarkTheme, LightTheme } from "@/constants/nativeThemes";
import { useColorScheme } from "nativewind";

export const Colors = () => {
  const { colorScheme } = useColorScheme();
  return colorScheme === "light" ? LightTheme : DarkTheme;
};
