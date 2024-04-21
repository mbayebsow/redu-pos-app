import React from "react";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Boxes, HandCoins, LayoutGrid, Plus, Store } from "lucide-react-native";
import { headerTitleStyle, AppTheme } from "./src/theme/styles";
import ProductsScreen from "./src/screens/products-screen";
import ScannerScreen from "./src/screens/scanner-screen";
import Button from "./src/components/ui/button";
import SalesScreen from "./src/screens/sales-screen";
import CategoryScreen from "./src/screens/category-screen";
import StoreScreen from "./src/screens/store-screen";
import AddProductScreen from "./src/screens/add-product-screen";

const Tab = createBottomTabNavigator();
const RootStack = createNativeStackNavigator();

const TabNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: { marginBottom: 5 },
        headerShown: false,
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
        component={CategoryScreen}
        options={{
          tabBarIcon: ({ color, size }) => <LayoutGrid color={color} size={size} />,
          headerRight: (props) => {
            return <Button title="Ajouter" icon={<Plus size={20} color="white" />} />;
          },
        }}
      />
      <Tab.Screen
        name="Boutiques"
        component={StoreScreen}
        options={{
          tabBarIcon: ({ color, size }) => <Store color={color} size={size} />,
          headerRight: (props) => {
            return <Button title="Ajouter" icon={<Plus size={20} color="white" />} />;
          },
        }}
      />
    </Tab.Navigator>
  );
};

const Routes = () => {
  return (
    <RootStack.Navigator screenOptions={{ headerTitleAlign: "left", headerBackTitle: "Retour" }}>
      <RootStack.Group>
        <RootStack.Screen name="Home" component={TabNavigation} options={{ headerShown: false }} />
        <RootStack.Screen
          name="ScannerScreen"
          component={ScannerScreen}
          options={{ headerTransparent: true, headerTitle: "" }}
        />
      </RootStack.Group>

      <RootStack.Group
        screenOptions={{
          presentation: "modal",
          headerTitle: "Ajouter un produit",
          headerBackVisible: true,
          //headerBackTitle: "Fermer",
          headerShadowVisible: false,
          headerBackTitleVisible: true,
          headerLargeTitle: true,
          //headerTransparent: true,
          headerBlurEffect: "regular",
        }}
      >
        <RootStack.Screen name="AddProduct" component={AddProductScreen} />
      </RootStack.Group>
    </RootStack.Navigator>
  );
};

export default function App() {
  return (
    <NavigationContainer theme={AppTheme}>
      <StatusBar style="auto" />
      <Routes />
    </NavigationContainer>
  );
}
