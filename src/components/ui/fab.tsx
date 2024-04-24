import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { accentColor, globalStyles } from "../../theme/styles";

interface FabProps {
  title?: string;
  icon?: React.ReactNode;
  onPress?: () => void;
}

const Fab: React.FC<FabProps> = ({ title, icon, onPress }) => {
  return (
    <Pressable style={[styles.container, { paddingHorizontal: title ? 20 : 10 }]} onPress={onPress}>
      {icon}
      {title && <Text style={[styles.title, globalStyles.title2]}>{title}</Text>}
    </Pressable>
  );
};

export default Fab;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    gap: 10,
    borderRadius: 100,
    position: "absolute",
    bottom: 20,
    right: 12,
    backgroundColor: accentColor,
    paddingVertical: 10,
    height: 40,
    //width: 40,
  },
  title: {
    color: "#fff",
  },
});
