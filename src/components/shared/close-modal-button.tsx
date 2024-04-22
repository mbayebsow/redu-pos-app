import { Button, StyleSheet } from "react-native";
import React from "react";
import { NavigationProp } from "@react-navigation/native";

interface CloseModalButton {
  title: string;
  navigation: NavigationProp<any>;
}

const CloseModalButton: React.FC<CloseModalButton> = ({ title, navigation }) => {
  return <Button title={title} onPress={() => navigation.goBack()} />;
};

export default CloseModalButton;

const styles = StyleSheet.create({});
