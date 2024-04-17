import { StyleSheet } from "react-native";

export const accentColor = "#007bff";

export const globalStyles = StyleSheet.create({
  container: {
    paddingHorizontal: 6,
    paddingTop: 4,
    paddingBottom: 4,
    backgroundColor: "white",
  },
  input: {
    height: 40,
    padding: 10,
    borderRadius: 10,
    backgroundColor: "rgba(51, 51, 51, 0.08)",
    width: "100%",
  },
  buttonPrimary: {
    backgroundColor: accentColor,
    color: "white",
    paddingVertical: 10,
    paddingHorizontal: 20,
    height: 40,
    borderRadius: 10,
  },
  buttonSecondary: {
    backgroundColor: "rgba(51, 51, 51, 0.08)",
    paddingVertical: 10,
    paddingHorizontal: 20,
    height: 40,
    borderRadius: 10,
  },
});
