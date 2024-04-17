import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { globalStyles } from "../../theme/styles";

interface ButtonProps {
  title?: string;
  icon?: React.ReactNode;
  children?: React.ReactNode;
  onPress?: () => void;
  variant?: "primary" | "secondary" | "icon";
}

const Button: React.FC<ButtonProps> = ({ title, icon, children, onPress, variant = "primary" }) => {
  return (
    <View style={[globalStyles.container]}>
      <Pressable
        style={[
          styles.container,
          variant === "secondary"
            ? globalStyles.buttonSecondary
            : variant === "icon"
            ? globalStyles.buttonIcon
            : globalStyles.buttonPrimary,
        ]}
      >
        {icon}
        {title ? (
          <Text style={[variant === "primary" && { color: "white" }]}>{title}</Text>
        ) : (
          children
        )}
      </Pressable>
    </View>
  );
};

export default Button;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    gap: 10,
  },
});
