import { FlatList, SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import Input from "../components/ui/input";
import { globalStyles } from "../theme/styles";
import Button from "../components/ui/button";
import Product from "../components/products";

const data = Array(50).fill(0);

const ProductsScreen = () => {
  return (
    <View style={[globalStyles.container]}>
      <View style={[styles.filterContainer]}>
        <View style={styles.inputContainer}>
          <Input />
        </View>
        <View style={styles.buttonContainer}>
          <Button variant="secondary">F</Button>
          <Button>Ajouter</Button>
        </View>
      </View>

      <View style={[globalStyles.container, styles.productsContainer]}>
        <FlatList
          style={{}}
          contentContainerStyle={{ gap: 1 }}
          columnWrapperStyle={{ gap: 10 }}
          data={data}
          numColumns={2}
          //keyExtractor={(item, index) => index} item.id
          renderItem={(item) => <Product />}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  filterContainer: {
    //flex: 1,
    flexDirection: "row",
    //justifyContent: "space-between",
  },
  inputContainer: {
    flex: 1,
  },
  buttonContainer: {
    flexDirection: "row",
    width: "auto",
  },
  productsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    alignItems: "flex-start",
    gap: 10,
  },
});

export default ProductsScreen;
