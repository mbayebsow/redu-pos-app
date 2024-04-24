import { Pressable, StyleProp, StyleSheet, Text, TextStyle, View, ViewStyle } from "react-native";
import React from "react";
import { accentColor, globalStyles, lightColor } from "../../theme/styles";

interface ButtonProps {
  title?: string;
  icon?: React.ReactNode;
  children?: React.ReactNode;
  //size?: "small" | "medium" | "large";
  onPress?: () => void;
  variant?: "primary" | "secondary" | "icon" | "text";
}

const Button: React.FC<ButtonProps> = ({ title, icon, children, onPress, variant = "primary" }) => {
  const dynamicButtonStyles: StyleProp<ViewStyle> = {
    backgroundColor:
      variant === "primary" ? accentColor : variant === "text" ? "transparent" : lightColor,
    borderRadius: variant === "icon" ? 10 : 100,
    paddingHorizontal: variant === "primary" ? 20 : 10,
  };

  const dynamicTextStyles: StyleProp<TextStyle> = {
    color: variant === "primary" ? "white" : accentColor,
  };

  return (
    <View style={[globalStyles.container, { flex: 1 }]}>
      <Pressable onPress={onPress} style={[styles.button, dynamicButtonStyles]}>
        {icon}
        {title && variant !== "icon" ? (
          <Text style={[styles.title, dynamicTextStyles]}>{title}</Text>
        ) : (
          children
        )}
      </Pressable>
    </View>
  );
};

export default Button;

const styles = StyleSheet.create({
  button: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    //paddingVertical: 10,
    height: 40,
    gap: 10,
  },
  title: {
    //fontWeight: "bold",
  },
});
