import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { globalStyles, accentColor, lightColor } from "../../theme/styles";

const Product = () => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={{
            uri: "https://res.cloudinary.com/glide/image/fetch/f_auto,w_500,c_limit/https%3A%2F%2Fstorage.googleapis.com%2Fglide-prod.appspot.com%2Fuploads-v2%2FYGvI36VoQe5mJNelMBS1-template-builder%2Fpub%2FZ1NivEP9kiOxcJKs948A.png",
          }}
        />
      </View>
      <View style={globalStyles.container}>
        <Text style={styles.unit}>280 units</Text>
        <Text style={styles.name}>Nom du produit</Text>
        <Text style={styles.price}>20.000 F</Text>
      </View>
    </View>
  );
};

export default Product;

const styles = StyleSheet.create({
  container: {
    //flex: 1,
    padding: 5,
    width: "33.33%",
  },
  imageContainer: {
    borderRadius: 10,
    overflow: "hidden",
    aspectRatio: 1,
    width: "100%",
    backgroundColor: lightColor,
  },
  image: {
    height: "100%",
    width: "100%",
  },
  unit: {
    color: accentColor,
  },
  name: {
    fontWeight: "700",
    fontSize: 14,
  },
  price: {
    opacity: 0.6,
    fontSize: 12,
  },
});
