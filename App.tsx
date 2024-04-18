import React from "react";
import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Boxes, HandCoins, LayoutGrid, Store } from "lucide-react-native";
import ProductsScreen from "./src/screens/products-screen";
import ScannerScreen from "./src/screens/scanner-screen";

const SettingsScreen: React.FC = () => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Settings!</Text>
    </View>
  );
};

const Tab = createBottomTabNavigator();
const RootStack = createNativeStackNavigator();

const TabNavigation = () => {
  return (
    //<StatusBar style="auto" />
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen
        name="Produits"
        component={ProductsScreen}
        options={{
          tabBarIcon: ({ color, size }) => <Boxes color={color} size={size} />,
        }}
      />
      <Tab.Screen
        name="Ventes"
        component={SettingsScreen}
        options={{
          tabBarIcon: ({ color, size }) => <HandCoins color={color} size={size} />,
        }}
      />
      <Tab.Screen
        name="Catégories"
        component={SettingsScreen}
        options={{
          tabBarIcon: ({ color, size }) => <LayoutGrid color={color} size={size} />,
        }}
      />
      <Tab.Screen
        name="Boutiques"
        component={SettingsScreen}
        options={{
          tabBarIcon: ({ color, size }) => <Store color={color} size={size} />,
        }}
      />
    </Tab.Navigator>
  );
};

const Routes = () => {
  return (
    <RootStack.Navigator screenOptions={{ headerShown: true }}>
      <RootStack.Screen name="Home" component={TabNavigation} />
      <RootStack.Screen name="ScannerScreen" component={ScannerScreen} />
    </RootStack.Navigator>
  );
};

export default function App() {
  return (
    <NavigationContainer>
      <Routes />
    </NavigationContainer>
  );
}
