/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {},
    fontFamily: {
      Jakarta: ["PlusJakartaSans-Regular", "sans-serif"],
      JakartaBold: ["PlusJakartaSans-Bold", "sans-serif"],
      JakartaBoldItalic: ["PlusJakartaSans-BoldItalic", "sans-serif"],
      JakartaExtraBold: ["PlusJakartaSans-ExtraBold", "sans-serif"],
      JakartaExtraBoldItalic: ["PlusJakartaSans-ExtraBoldItalic", "sans-serif"],
      JakartaExtraLight: ["PlusJakartaSans-ExtraLight", "sans-serif"],
      JakartaExtraLightItalic: ["PlusJakartaSans-ExtraLightItalic", "sans-serif"],
      JakartaItalic: ["PlusJakartaSans-Italic", "sans-serif"],
      JakartaLight: ["PlusJakartaSans-Light", "sans-serif"],
      JakartaLightItalic: ["PlusJakartaSans-LightItalic", "sans-serif"],
      JakartaMedium: ["PlusJakartaSans-Medium", "sans-serif"],
      JakartaMediumItalic: ["PlusJakartaSans-MediumItalic", "sans-serif"],
      JakartaSemiBold: ["PlusJakartaSans-SemiBold", "sans-serif"],
      JakartaSemiBoldItalic: ["PlusJakartaSans-SemiBoldItalic", "sans-serif"],
    },
    colors: {
      white: 'rgb(var(--color-white) / <alpha-value>)',
      black: 'rgb(var(--color-black) / <alpha-value>)',

      background: 'rgb(var(--color-background) / <alpha-value>)',
      foreground: 'rgb(var(--color-foreground) / <alpha-value>)',
      primary: 'rgb(var(--color-primary) / <alpha-value>)',
      secondary: 'rgb(var(--color-secondary) / <alpha-value>)',
      accent: 'rgb(var(--color-accent) / <alpha-value>)',

      textPrimary: 'rgb(var(--color-text-primary) / <alpha-value>)',
      textSecondary: 'rgb(var(--color-text-secondary) / <alpha-value>)',
      faintText: 'rgb(var(--color-faint-text) / <alpha-value>)',

      buttonPrimary: 'rgb(var(--color-button-primary) / <alpha-value>)',
      buttonSecondary: 'rgb(var(--color-button-secondary) / <alpha-value>)',
      buttonTextPrimary: 'rgb(var(--color-button-text-primary) / <alpha-value>)',
      buttonTextSecondary: 'rgb(var(--color-button-text-secondary) / <alpha-value>)',

      iconPrimary: 'rgb(var(--color-icon-primary) / <alpha-value>)',
      iconSecondary: 'rgb(var(--color-icon-secondary) / <alpha-value>)',
      iconFaint: 'rgb(var(--color-icon-faint) / <alpha-value>)',

      border: 'rgb(var(--color-border) / <alpha-value>)',
      borderFaint: 'rgb(var(--color-border-faint) / <alpha-value>)',
      shadowSm: 'var(--color-shadow-sm)', // keep as is (already rgba)
      shadowMd: 'var(--color-shadow-md)',
      shadowLg: 'var(--color-shadow-lg)',

      inputBackground: 'rgb(var(--color-input-background) / <alpha-value>)',
      inputText: 'rgb(var(--color-input-text) / <alpha-value>)',
      inputPlaceholder: 'rgb(var(--color-input-placeholder) / <alpha-value>)',
      inputBorder: 'rgb(var(--color-input-border) / <alpha-value>)',
      inputFocusBorder: 'rgb(var(--color-input-focus-border) / <alpha-value>)',
      inputFocusBackground: 'rgb(var(--color-input-focus-background) / <alpha-value>)',
      inputFocusText: 'rgb(var(--color-input-focus-text) / <alpha-value>)',
      inputFocusPlaceholder: 'rgb(var(--color-input-focus-placeholder) / <alpha-value>)',
      inputFocusShadow: 'var(--color-input-focus-shadow)', // already rgba

      success: 'rgb(var(--color-success) / <alpha-value>)',
      error: 'rgb(var(--color-error) / <alpha-value>)',
      danger: 'rgb(var(--color-danger) / <alpha-value>)',
      warning: 'rgb(var(--color-warning) / <alpha-value>)',
      info: 'rgb(var(--color-info) / <alpha-value>)',
    },

  },
  plugins: [],
};