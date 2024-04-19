import React from "react";
import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import { NavigationContainer, Theme } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Boxes, HandCoins, LayoutGrid, Plus, Store } from "lucide-react-native";
import ProductsScreen from "./src/screens/products-screen";
import ScannerScreen from "./src/screens/scanner-screen";
import Button from "./src/components/ui/button";
import { headerTitleStyle, AppTheme } from "./src/theme/styles";
import SalesScreen from "./src/screens/sales-screen";

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
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: { paddingBottom: 8, height: 60 },
        headerTitleStyle,
      }}
    >
      <Tab.Screen
        name="Produits"
        component={ProductsScreen}
        options={{
          tabBarIcon: ({ color, size }) => <Boxes color={color} size={size} />,
          headerRight: (props) => {
            return <Button title="Ajouter" icon={<Plus size={20} color="white" />} />;
          },
        }}
      />
      <Tab.Screen
        name="Ventes"
        component={SalesScreen}
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
    <RootStack.Navigator screenOptions={{ headerTitleStyle }}>
      <RootStack.Screen name="Home" component={TabNavigation} options={{ headerShown: false }} />
      <RootStack.Screen name="ScannerScreen" component={ScannerScreen} />
    </RootStack.Navigator>
  );
};

export default function App() {
  return (
    <NavigationContainer theme={AppTheme}>
      <Routes />
    </NavigationContainer>
  );
}
