import { Theme } from "@react-navigation/native";
import { StyleSheet } from "react-native";
import { Color } from "./color";

export const accentColor = Color.primary.fill;
export const accentColorContrast = Color.primary.tint;
export const warningColor = Color.warning.fill;
export const warningColorContrast = Color.warning.tint;
export const dangerColor = Color.danger.fill;
export const dangerColorContrast = Color.danger.tint;
export const successColor = Color.success.fill;
export const successColorContrast = Color.success.tint;
export const lightColor = Color.grayscale[50];
export const textColor = Color.grayscale[900];
export const lightTextColor = Color.grayscale[700];
export const backgroundColor = Color.grayscale[0];
export const backgroundLightColor = Color.grayscale[100];
export const backgroundMediumColor = Color.grayscale[200];
export const borderColor = Color.grayscale[200];

export const AppTheme: Theme = {
  dark: false,
  colors: {
    primary: accentColor,
    background: backgroundColor,
    card: "rgb(255, 255, 255)",
    text: "rgb(28, 28, 30)",
    border: "rgb(199, 199, 204)",
    notification: "rgb(255, 69, 58)",
  },
};

export const globalStyles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    paddingTop: 6,
    paddingBottom: 6,
  },
  title1: {
    fontSize: 20,
    fontWeight: "800",
    color: textColor,
  },
  title2: {
    fontSize: 17,
    fontWeight: "700",
    color: textColor,
  },
  headline: {
    fontSize: 16,
    fontWeight: "600",
    color: textColor,
  },
  subHead: {
    fontSize: 14,
    color: lightTextColor,
  },
  text: {
    fontSize: 15,
    color: textColor,
  },
});
