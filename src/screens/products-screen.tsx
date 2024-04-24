import React from "react";
import { Pressable, StyleSheet, View } from "react-native";
import { CircleFadingPlus, ListFilter, ScanBarcode, Search } from "lucide-react-native";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { backgroundColor, lightColor } from "../theme/styles";
import Input from "../components/ui/input";
import Button from "../components/ui/button";
import Product from "../components/products";
import AppLayout from "../components/layout";
import Fab from "../components/ui/fab";

const data = Array(50).fill(0);

const ActionButton = () => {
  const navigation = useNavigation<NavigationProp<any>>();
  return (
    <Pressable onPress={() => navigation.navigate("AddProduct")} style={styles.addProductButton}>
      <CircleFadingPlus />
    </Pressable>
  );
};

const ProductsScreen = () => {
  const navigation = useNavigation<NavigationProp<any>>();

  return (
    <>
      <AppLayout
        title="Produits"
        headerRight={<ActionButton />}
        stickyHeaderIndices={[1]}
        contentContainerStyle={{ paddingBottom: 80 }}
      >
        <View>
          <View style={[styles.filterContainer]}>
            <View style={styles.inputContainer}>
              <Input placholder="Recherche" icon={<Search size={20} color="gray" />} />
            </View>
            <View style={styles.buttonContainer}>
              <View>
                <Button variant="icon" icon={<ListFilter size={20} />} />
              </View>
            </View>
          </View>
        </View>

        <View style={styles.productsContainer}>
          {data.map((item, index) => (
            <Product key={index} />
          ))}
        </View>
      </AppLayout>
      <Fab
        title="scanner"
        icon={<ScanBarcode color="white" />}
        onPress={() => navigation.navigate("Scanner")}
      />
    </>
  );
};

const styles = StyleSheet.create({
  filterContainer: {
    flexDirection: "row",
    paddingHorizontal: 6,
    paddingBottom: 4,
    backgroundColor: backgroundColor,
  },
  inputContainer: {
    flex: 1,
  },
  buttonContainer: {
    flexDirection: "row",
    width: "auto",
  },
  productsContainer: {
    flex: 1,
    padding: 6,
    backgroundColor: "white",
  },
  addProductButton: {
    padding: 6,
  },
});

export default ProductsScreen;
