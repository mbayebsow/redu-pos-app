import React from "react";
import { StyleSheet, Text } from "react-native";
import {
  Header,
  LargeHeader,
  ScalingView,
  ScrollHeaderProps,
} from "@codeherence/react-native-header";
import { Settings } from "lucide-react-native";

interface HeaderProps {
  title: string;
  actionButtons?: React.ReactNode;
}

export const HeaderComponent: React.FC<ScrollHeaderProps & HeaderProps> = ({
  actionButtons,
  showNavBar,
  scrollY,
  title,
}) => (
  <Header
    noBottomBorder
    showNavBar={showNavBar}
    headerLeft={<Settings />}
    headerRight={actionButtons}
    headerCenter={<Text style={{ fontSize: 16, fontWeight: "bold" }}>{title}</Text>}
  />
);

export const LargeHeaderComponent: React.FC<ScrollHeaderProps & HeaderProps> = ({
  actionButtons,
  scrollY,
  title,
}) => (
  <LargeHeader>
    <ScalingView scrollY={scrollY} style={{ width: "100%" }}>
      <Text style={{ fontSize: 32, fontWeight: "bold" }}>{title}</Text>
      <Text style={{ fontSize: 12, fontWeight: "normal", color: "#8E8E93" }}>
        Alimentation General Touba Darou - Nom de l'Agent
      </Text>
    </ScalingView>
  </LargeHeader>
);

const styles = StyleSheet.create({
  container: {
    //flex: 1,
    padding: 6,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "white",
  },
  title: {
    fontSize: 25,
    fontWeight: "bold",
  },
  actionsContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
  },
});
