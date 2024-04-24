import React from "react";
import {
  TouchableOpacity,
  Text,
  StyleProp,
  ViewStyle,
  Pressable,
  View,
  TextStyle,
} from "react-native";
import { accentColor, globalStyles, lightColor } from "../../theme/styles";

interface ButtonProps {
  title?: string;
  icon?: React.ReactNode;
  expand?: "block" | "full";
  shape?: "round";
  fill?: "clear" | "outline" | "solid";
  size?: "small" | "default" | "large";
  color?: "primary" | "secondary" | "success" | "warning" | "danger" | "light" | "medium" | "dark";
  onPress?: () => void;
  variant?: "primary" | "secondary" | "icon" | "text";
}

const Button: React.FC<ButtonProps> = ({
  title,
  icon,
  expand = "block",
  shape,
  fill = "solid",
  size = "default",
  color = "primary",
  onPress,
}) => {
  const getButtonStyle = () => {
    let buttonStyle: StyleProp<ViewStyle> = {};

    // Fill
    if (fill === "clear") {
      buttonStyle = { ...buttonStyle, backgroundColor: "transparent" };
    } else {
      // Expand
      if (expand === "full") {
        buttonStyle = { ...buttonStyle, flex: 1 };
      } else if (expand === "block") {
        buttonStyle = { ...buttonStyle, paddingHorizontal: 24 };
      }

      // Shape
      if (shape === "round") {
        buttonStyle = { ...buttonStyle, borderRadius: 100 };
      } else {
        buttonStyle = { ...buttonStyle, borderRadius: 10 };
      }

      if (fill === "outline") {
        buttonStyle = {
          ...buttonStyle,
          backgroundColor: "transparent",
          borderColor: color || "black",
          borderWidth: 1,
        };
      } else if (fill === "solid") {
        // Color
        if (color === "primary") {
          buttonStyle = { ...buttonStyle, backgroundColor: accentColor };
        } else if (color === "light") {
          buttonStyle = { ...buttonStyle, backgroundColor: lightColor };
        }
      }

      // Size
      if (size === "small") {
        buttonStyle = { ...buttonStyle, height: 32, minWidth: 32 };
      } else if (size === "default") {
        buttonStyle = { ...buttonStyle, height: 40, minWidth: 40 };
      } else if (size === "large") {
        buttonStyle = { ...buttonStyle, height: 48, minWidth: 48 };
      }
    }

    return buttonStyle;
  };

  const getTitleStyle = () => {
    let titleStyle: StyleProp<TextStyle> = {};

    if (fill === "solid") {
      titleStyle = { ...titleStyle, color: "white" };
    } else {
      titleStyle = { ...titleStyle, color: accentColor };
    }

    return titleStyle;
  };

  return (
    <TouchableOpacity
      style={{
        gap: 10,
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
        ...getButtonStyle(),
      }}
      onPress={onPress}
    >
      {icon}
      {title && <Text style={{ fontSize: 17, ...getTitleStyle() }}>{title}</Text>}
    </TouchableOpacity>
  );
};

export default Button;
