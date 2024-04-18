import { StyleSheet } from "react-native";

export const accentColor = "#007bff";
export const lightColor = "rgba(51, 51, 51, 0.08)";

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
