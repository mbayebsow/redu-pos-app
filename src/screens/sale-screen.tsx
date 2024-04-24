import React, { useEffect } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { accentColor } from "../theme/styles";
import { Download, HandCoins, PenLine, Undo2 } from "lucide-react-native";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import Button from "../components/ui/button";
import Product from "../components/products";

const PRODUCTS = Array(5).fill(0);

const SaleScreen = () => {
  const navigation = useNavigation<NavigationProp<any>>();

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <View style={{ flexDirection: "row", alignItems: "center", gap: 30 }}>
          <Button icon={<Undo2 size={23} color="red" />} size="small" fill="clear" />
          <Button icon={<PenLine size={23} color={accentColor} />} size="small" fill="clear" />
        </View>
      ),
    });
  }, []);

  return (
    <View style={styles.screenContainer}>
      <View style={styles.adjustDetails}>
        <View style={styles.detailsContainer}>
          <Text style={styles.adjustAgent}>Babacar</Text>
          <View style={styles.adjustTypeContainer}>
            <Text style={styles.adjustType}>Re-stock</Text>
            <Download color="white" size={20} />
          </View>
          <Text style={styles.adjustDate}>24 avril 2024 à 17:30</Text>
        </View>
        <View style={styles.paymentContainer}>
          <HandCoins color="black" size={20} />
          <Text>Partiel</Text>
        </View>
      </View>

      <ScrollView style={{ flex: 1 }}>
        <View style={styles.productsContainer}>
          {PRODUCTS.map((item, index) => (
            <Product key={index} />
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

export default SaleScreen;

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    padding: 0,
    backgroundColor: "white",
  },
  adjustDetails: {
    paddingHorizontal: 12,
    paddingVertical: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: accentColor,
  },
  detailsContainer: {
    gap: 3,
  },
  paymentContainer: {
    gap: 10,
    backgroundColor: "yellow",
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 100,
  },
  adjustAgent: {
    color: "white",
    fontVariant: ["oldstyle-nums"],
  },
  adjustTypeContainer: {
    gap: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  adjustType: {
    fontSize: 30,
    fontWeight: "700",
    color: "white",
  },
  adjustDate: {
    opacity: 0.7,
    color: "white",
  },
  actionsContainer: {},
  productsContainer: {
    flex: 1,
    padding: 6,
    paddingBottom: 30,
  },
});
