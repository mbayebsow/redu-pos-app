import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { globalStyles } from "../../theme/styles";

interface ButtonProps {
  children: string;
  onPress?: () => void;
  variant?: "primary" | "secondary";
}

const Button: React.FC<ButtonProps> = ({ children, onPress, variant = "primary" }) => {
  return (
    <View style={globalStyles.container}>
      <Pressable
        style={variant === "secondary" ? globalStyles.buttonSecondary : globalStyles.buttonPrimary}
      >
        <Text>{children}</Text>
      </Pressable>
    </View>
  );
};

export default Button;

const styles = StyleSheet.create({});
