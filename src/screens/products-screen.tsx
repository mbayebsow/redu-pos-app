import React, { useEffect, useState } from "react";
import { Pressable, StyleSheet, View } from "react-native";
import { CircleFadingPlus, ListFilter, ScanBarcode, Search } from "lucide-react-native";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { accentColor, backgroundColor, globalStyles } from "../theme/styles";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import Input from "../components/ui/input";
import Button from "../components/ui/button";
import Product from "../components/products";
import AppLayout from "../components/layout";
import Fab from "../components/ui/fab";
import { useForm } from "react-hook-form";
import { PRODUCTS } from "../utils/data/products";

const formSchema = z.object({
  productNameSearch: z.string(),
});
const defaultValues = {
  productNameSearch: "",
};

const ActionButton = () => {
  const navigation = useNavigation<NavigationProp<any>>();
  return (
    <Pressable onPress={() => navigation.navigate("AddProduct")} style={styles.addProductButton}>
      <CircleFadingPlus color={accentColor} />
    </Pressable>
  );
};

const ProductsScreen = () => {
  const navigation = useNavigation<NavigationProp<any>>();
  const [searchValue, setSearchValue] = useState<string>("");
  const { control, watch } = useForm({ defaultValues, resolver: zodResolver(formSchema) });

  useEffect(() => {
    const subscription = watch((value) => setSearchValue(value.productNameSearch || ""));
    return () => subscription.unsubscribe();
  }, [watch]);

  return (
    <>
      <AppLayout
        title="Produits"
        headerRight={<ActionButton />}
        stickyHeaderIndices={[1]}
        contentContainerStyle={{ paddingBottom: 80 }}
      >
        <View>
          <View style={[globalStyles.container, styles.filterContainer]}>
            <View style={styles.inputContainer}>
              <Input
                control={control}
                icon={Search}
                name="productNameSearch"
                placeholder="Rechercher un produit"
              />
            </View>
            <View style={styles.buttonContainer}>
              <View style={globalStyles.container}>
                <Button color="light" icon={ListFilter} />
              </View>
            </View>
          </View>
        </View>

        <View style={[globalStyles.container, styles.productsContainer]}>
          {PRODUCTS.filter((product) =>
            product.name.toLocaleLowerCase().includes(searchValue?.toLocaleLowerCase())
          ).map((item, index) => (
            <Product key={index} product={item} />
          ))}
        </View>
      </AppLayout>
      <Fab
        title="Scanner"
        icon={<ScanBarcode color="white" size={20} />}
        onPress={() => navigation.navigate("Scanner")}
      />
    </>
  );
};

const styles = StyleSheet.create({
  filterContainer: {
    flexDirection: "row",
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
    backgroundColor: "white",
  },
  addProductButton: {
    paddingHorizontal: 10,
  },
});

export default ProductsScreen;
