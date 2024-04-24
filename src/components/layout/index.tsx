import { Pressable, StyleProp, Text, ViewStyle } from "react-native";
import React from "react";
import {
  Header,
  LargeHeader,
  ScalingView,
  ScrollHeaderProps,
  ScrollViewWithHeaders,
} from "@codeherence/react-native-header";
import { Settings } from "lucide-react-native";
import { backgroundColor } from "../../theme/styles";

interface AppLayoutProps {
  title: string;
  children: React.ReactNode;
  headerRight?: React.ReactNode;
  stickyHeaderIndices?: number[];
  contentContainerStyle?: StyleProp<ViewStyle>;
}

interface HeaderProps {
  title: string;
  headerRight?: React.ReactNode;
}

export const HeaderComponent: React.FC<ScrollHeaderProps & HeaderProps> = ({
  headerRight,
  showNavBar,
  title,
}) => (
  <Header
    noBottomBorder
    showNavBar={showNavBar}
    headerLeft={
      <Pressable style={{ padding: 6 }}>
        <Settings />
      </Pressable>
    }
    headerRight={headerRight}
    headerCenter={<Text style={{ fontSize: 16, fontWeight: "bold" }}>{title}</Text>}
  />
);

export const LargeHeaderComponent: React.FC<ScrollHeaderProps & HeaderProps> = ({
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

const AppLayout: React.FC<AppLayoutProps> = ({
  title,
  children,
  headerRight,
  stickyHeaderIndices,
  contentContainerStyle,
}) => {
  return (
    <ScrollViewWithHeaders
      HeaderComponent={(props) => (
        <HeaderComponent {...props} title={title} headerRight={headerRight} />
      )}
      LargeHeaderComponent={(props) => <LargeHeaderComponent {...props} title={title} />}
      stickyHeaderIndices={stickyHeaderIndices}
      contentContainerStyle={contentContainerStyle}
    >
      {children}
    </ScrollViewWithHeaders>
  );
};

export default AppLayout;
