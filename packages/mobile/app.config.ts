import { ExpoConfig } from "expo/config";

const config: ExpoConfig = {
  name: "temp",
  slug: "temp",
  owner: "tempcom",
  plugins: ["expo-localization", "expo-router"],
  ios: {
    bundleIdentifier: "com.temp.mobile",
  },
  android: {
    package: "com.temp.mobile",
  },
  runtimeVersion: {
    policy: "sdkVersion",
  },
  developmentClient: {
    silentLaunch: true,
  },
};

export default config;
