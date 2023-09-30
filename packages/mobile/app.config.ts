import { ExpoConfig } from "expo/config";

const APP_VERSION = "1.0.3";

const config: ExpoConfig = {
  name: "temp",
  slug: "temp",
  owner: "tempcom",
  version: APP_VERSION,
  scheme: "temp",
  orientation: "portrait",
  icon: "./assets/icon.png",
  userInterfaceStyle: "light",
  assetBundlePatterns: ["**/*"],
  splash: {
    image: "./assets/splash.png",
    resizeMode: "cover",
    backgroundColor: "#ea6645",
  },
  plugins: [
    "expo-localization",
    "expo-router",
    "expo-location",
    "expo-camera",
    "expo-image-picker",
    "expo-contacts",
  ],
  ios: {
    bundleIdentifier: "com.temp.mobile",
    supportsTablet: true,
    associatedDomains: [
      // See also web/public/.well-known/apple-app-site-association
      "applinks:temp.com",
      "applinks:www.temp.com",
      "applinks:next.temp.com",
      "applinks:staging.temp.com",
    ],
    entitlements: {
      "com.apple.developer.applesignin": ["Default"],
    },
    config: {
      usesNonExemptEncryption: false, // Because of SecureStore
    },
    infoPlist: {
      UIBackgroundModes: ["remote-notification"],
    },
  },
  android: {
    package: "com.temp.mobile",
    adaptiveIcon: {
      foregroundImage: "./assets/adaptive-icon.png",
      backgroundColor: "#ea6645",
    },
    permissions: [
      "ACCESS_COARSE_LOCATION",
      "ACCESS_FINE_LOCATION",
      "CAMERA",
      "READ_CONTACTS",
      "com.google.android.gms.permission.AD_ID",
    ],
    googleServicesFile: "./google-services.json",
    intentFilters: [],
  },
  runtimeVersion: {
    policy: "sdkVersion",
  },
  developmentClient: {
    silentLaunch: true,
  },
};

export default config;
