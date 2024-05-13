import React from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { globalStyles, borderColor, backgroundMediumColor } from "../../theme/styles";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { ProductParams, ProductType } from "../../types";

interface ProductProps {
  product: ProductType;
}

const Product = ({ product }: ProductProps) => {
  const navigation = useNavigation<NavigationProp<ProductParams>>();

  return (
    <Pressable
      style={[styles.container, globalStyles.container]}
      onPress={() => navigation.navigate("Product", { pid: product.identifier })}
    >
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={{
            uri: product.image,
          }}
        />
      </View>
      <View style={styles.textContainer}>
        <View style={[globalStyles.container, { flex: 1 }]}>
          <Text style={[globalStyles.subHead, styles.price]}>Boissons</Text>
          <Text style={[globalStyles.headline, styles.name]} numberOfLines={2}>
            {product.name}
          </Text>
          <Text style={styles.price}>
            {product.priceSale} FCFA - {product.identifier}
          </Text>
        </View>
        <View style={styles.unitContainer}>
          <Text style={styles.unit}>{product.stockQuantity}</Text>
        </View>
      </View>
    </Pressable>
  );
};

export default Product;

const styles = StyleSheet.create({
  container: {
    //flex: 1,
    gap: 5,
    paddingVertical: 7,
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: borderColor,
  },
  imageContainer: {
    borderRadius: 10,
    overflow: "hidden",
    aspectRatio: 1,
    height: 60,
    backgroundColor: backgroundMediumColor,
  },
  image: {
    height: "100%",
    width: "100%",
  },
  textContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    flex: 1,
    gap: 10,
  },
  unitContainer: {
    backgroundColor: backgroundMediumColor,
    padding: 6,
    borderRadius: 100,
  },
  unit: {
    //color: "black",
  },
  name: {},
  price: {
    //opacity: 0.6,
    //fontSize: 12,
  },
});
