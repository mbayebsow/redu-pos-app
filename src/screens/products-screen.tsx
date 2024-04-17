import { FlatList, StyleSheet, View } from "react-native";
import React from "react";
import Input from "../components/ui/input";
import { globalStyles } from "../theme/styles";
import Button from "../components/ui/button";
import Product from "../components/products";
import { ListFilter, Plus, ScanLine } from "lucide-react-native";
import Header from "../components/layout/header";
import Fab from "../components/ui/fab";

const data = Array(50).fill(0);

const ProductsScreen = () => {
  return (
    <View style={[globalStyles.container, { flex: 1 }]}>
      <Header
        title="Produits"
        actions={<Button icon={<Plus size={20} color="white" />} title="Ajouter" />}
      />
      <View style={[styles.filterContainer]}>
        <View style={styles.inputContainer}>
          <Input />
        </View>
        <View style={styles.buttonContainer}>
          <Button variant="icon">
            <ListFilter />
          </Button>
        </View>
      </View>

      <View style={[globalStyles.container, styles.productsContainer]}>
        <FlatList
          contentContainerStyle={{ gap: 10 }}
          columnWrapperStyle={{ gap: 10 }}
          data={data}
          numColumns={3}
          showsVerticalScrollIndicator={false}
          //keyExtractor={(item, index) => index} item.id
          renderItem={(item) => <Product />}
        />
      </View>
      <Fab title="Scanner" icon={<ScanLine color="white" size={20} />} />
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
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    alignItems: "flex-start",
    gap: 10,
  },
});

export default ProductsScreen;
