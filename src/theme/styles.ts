import { Theme } from "@react-navigation/native";
import { StyleProp, StyleSheet, TextStyle } from "react-native";

export const accentColor = "#007bff";
export const lightColor = "rgba(225, 225, 230, 1)";
export const backgroundColor = "rgba(245, 245, 250, 1)";

export const headerTitleStyle: StyleProp<
  Pick<TextStyle, "fontFamily" | "fontSize" | "fontWeight">
> = {
  fontSize: 25,
  fontWeight: "bold",
};

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
});
