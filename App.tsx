import React from "react";
import { StatusBar } from "expo-status-bar";
import { Text, View, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import ProductsScreen from "./src/screens/products-screen";

const SettingsScreen: React.FC = () => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Settings!</Text>
    </View>
  );
};

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    //<StatusBar style="auto" />
    <Tab.Navigator>
      <Tab.Screen name="Produits" component={ProductsScreen} />
      <Tab.Screen name="Ventes" component={SettingsScreen} />
      <Tab.Screen name="Catégories" component={SettingsScreen} />
      <Tab.Screen name="Boutiques" component={SettingsScreen} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}
