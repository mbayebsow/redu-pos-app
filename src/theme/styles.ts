import { Theme } from "@react-navigation/native";
import { StyleSheet } from "react-native";
import { Color } from "./color";

export const accentColor = Color.primary.fill;
export const lightColor = Color.grayscale[100];
export const backgroundColor = Color.grayscale[0];
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
    paddingHorizontal: 6,
    paddingTop: 6,
    paddingBottom: 6,
    //backgroundColor: "white",
  },
  title1: {
    fontSize: 20,
    fontWeight: "800",
    color: Color.grayscale[900],
  },
  title2: {
    fontSize: 17,
    fontWeight: "700",
    color: Color.grayscale[900],
  },
  headline: {
    fontSize: 16,
    fontWeight: "600",
    color: Color.grayscale[900],
  },
  subHead: {
    fontSize: 14,
    color: Color.grayscale[600],
  },
  text: {
    fontSize: 15,
    color: Color.grayscale[900],
  },
});
