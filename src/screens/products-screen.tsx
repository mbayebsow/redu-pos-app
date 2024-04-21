import React from "react";
import { Pressable, StyleSheet, View } from "react-native";
import { CircleFadingPlus, ListFilter, ScanLine, Search } from "lucide-react-native";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import Input from "../components/ui/input";
import Button from "../components/ui/button";
import Product from "../components/products";
import { backgroundColor, lightColor } from "../theme/styles";
import AppLayout from "../components/layout";

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
    <AppLayout title="Produits" headerRight={<ActionButton />} stickyHeaderIndices={[1]}>
      <View>
        <View style={[styles.filterContainer]}>
          <View style={styles.inputContainer}>
            <Input placholder="Recherche" icon={<Search size={20} color="gray" />} />
          </View>
          <View style={styles.buttonContainer}>
            <Button variant="icon" icon={<ListFilter size={20} />} />
            <Button
              variant="icon"
              icon={<ScanLine size={20} />}
              onPress={() => navigation.navigate("ScannerScreen")}
            />
          </View>
        </View>
      </View>

      <View style={styles.productsContainer}>
        {data.map((item, index) => (
          <Product key={index} />
        ))}
      </View>
    </AppLayout>
  );
};

const styles = StyleSheet.create({
  filterContainer: {
    //zIndex: 2,
    flexDirection: "row",
    paddingHorizontal: 6,
    paddingBottom: 4,
    backgroundColor: backgroundColor,
    borderBottomWidth: 1,
    borderColor: lightColor,
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
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "flex-start",
    padding: 6,
    //marginTop: 5,
    backgroundColor: "white",
  },
  addProductButton: {
    padding: 6,
  },
});

export default ProductsScreen;
