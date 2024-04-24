import { Pressable, StyleSheet, Text } from "react-native";
import React from "react";
import { NavigationProp } from "@react-navigation/native";
import { accentColor, globalStyles } from "../../theme/styles";

interface CloseModalButton {
  title: string;
  navigation: NavigationProp<any>;
}

const CloseModalButton: React.FC<CloseModalButton> = ({ title, navigation }) => {
  return (
    <Pressable onPress={() => navigation.goBack()} style={globalStyles.container}>
      <Text style={[globalStyles.title, { color: accentColor }]}>{title}</Text>
    </Pressable>
  );
};

export default CloseModalButton;

const styles = StyleSheet.create({});
