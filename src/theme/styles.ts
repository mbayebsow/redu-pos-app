import { Theme } from "@react-navigation/native";
import { StyleProp, StyleSheet, TextStyle } from "react-native";

export const accentColor = "#007bff";
export const lightColor = "rgba(51, 51, 51, 0.08)";

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
    background: "white",
    card: "rgb(255, 255, 255)",
    text: "rgb(28, 28, 30)",
    border: "rgb(199, 199, 204)",
    notification: "rgb(255, 69, 58)",
  },
};

export const globalStyles = StyleSheet.create({
  container: {
    paddingHorizontal: 6,
    paddingTop: 4,
    paddingBottom: 4,
    //backgroundColor: "white",
  },
  input: {
    height: 40,
    padding: 10,
    borderRadius: 10,
    backgroundColor: lightColor,
    width: "100%",
  },
  buttonPrimary: {
    backgroundColor: accentColor,
    color: "white",
    paddingVertical: 10,
    paddingHorizontal: 20,
    height: 40,
    borderRadius: 100,
  },
  buttonSecondary: {
    backgroundColor: lightColor,
    paddingVertical: 10,
    paddingHorizontal: 20,
    height: 40,
    borderRadius: 100,
  },
  buttonIcon: {
    backgroundColor: lightColor,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: 40,
    width: 40,
    borderRadius: 10,
  },
});
