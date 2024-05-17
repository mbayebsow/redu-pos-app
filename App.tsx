import React, { useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Boxes, HandCoins, LayoutGrid } from "lucide-react-native";
import { AppTheme, backgroundColor } from "./src/theme/styles";
import ProductsScreen from "./src/screens/products-screen";
import ScannerScreen from "./src/screens/scanner-screen";
import SalesScreen from "./src/screens/sales-screen";
import CategoryScreen from "./src/screens/category-screen";
import StoreScreen from "./src/screens/store-screen";
import AddProductScreen from "./src/screens/add-product-screen";
import CloseModalButton from "./src/components/shared/close-modal-button";
import ProductScreen from "./src/screens/product-screen";
import SaleScreen from "./src/screens/sale-screen";
import SpaceScreen from "./src/screens/space-screen";
import { Session } from "@supabase/supabase-js";
import { supabase } from "./src/utils/supabase";
import Auth from "./src/components/auth";

const Tab = createBottomTabNavigator();
const RootStack = createNativeStackNavigator();

const TabNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: { paddingBottom: 10, height: 60 },
        headerShown: false,
      }}
    >
      <Tab.Screen
        name="Produits"
        component={ProductsScreen}
        options={{
          tabBarIcon: ({ color, size }) => <Boxes color={color} size={size} />,
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
        name="Space"
        component={SpaceScreen}
        options={{
          tabBarIcon: ({ color, size }) => <LayoutGrid color={color} size={size} />,
        }}
      />
    </Tab.Navigator>
  );
};

const Routes = () => {
  return (
    <RootStack.Navigator screenOptions={{ headerBackTitle: "Retour", headerTitleAlign: "center" }}>
      <RootStack.Group>
        <RootStack.Screen name="Home" component={TabNavigation} options={{ headerShown: false }} />
        <RootStack.Screen
          name="Product"
          component={ProductScreen!}
          options={{
            headerTitle: "",
          }}
        />
        <RootStack.Screen
          name="Sale"
          component={SaleScreen}
          options={{
            headerTitle: "",
          }}
        />
        <RootStack.Screen name="Scanner" component={ScannerScreen} />
      </RootStack.Group>

      <RootStack.Group screenOptions={{ headerShadowVisible: false }}>
        <RootStack.Screen name="Categories" component={CategoryScreen} />
        <Tab.Screen name="Boutiques" component={StoreScreen} />
      </RootStack.Group>

      <RootStack.Group
        screenOptions={({ navigation }) => ({
          presentation: "modal",
          headerTitle: "Ajouter un produit",
          headerLeft: () => <CloseModalButton title="Annuler" navigation={navigation} />,
          headerStyle: { backgroundColor },
        })}
      >
        <RootStack.Screen name="AddProduct" component={AddProductScreen} />
      </RootStack.Group>
    </RootStack.Navigator>
  );
};

export default function App() {
  const [session, setSession] = useState<Session | null>(null);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });
  }, []);

  return session && session.user ? (
    <NavigationContainer theme={AppTheme}>
      <StatusBar style="auto" />
      <Routes />
    </NavigationContainer>
  ) : (
    <Auth />
  );
}
