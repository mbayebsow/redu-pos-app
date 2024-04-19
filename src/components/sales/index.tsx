import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { accentColor, globalStyles, lightColor } from "../../theme/styles";
import { ChevronRight } from "lucide-react-native";

const SaleItem = () => {
  return (
    <View style={styles.container}>
      <View style={styles.leftContainer}>
        <View style={styles.imageContainer}>
          <Image
            style={styles.image}
            source={{
              uri: "https://res.cloudinary.com/glide/image/fetch/f_auto,w_500,c_limit/https%3A%2F%2Fstorage.googleapis.com%2Fglide-prod.appspot.com%2Fuploads-v2%2FYGvI36VoQe5mJNelMBS1-template-builder%2Fpub%2FZ1NivEP9kiOxcJKs948A.png",
            }}
          />
        </View>
      </View>

      <View style={styles.righContainer}>
        <View style={{}}>
          <Text style={styles.name}>Nom du produit</Text>
          <Text style={styles.details}>Boutique - Vente</Text>
        </View>
        <ChevronRight />
      </View>
    </View>
  );
};

export default SaleItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    gap: 10,
  },
  leftContainer: {
    paddingVertical: 6,
    height: "100%",
  },
  righContainer: {
    flex: 1,
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
    height: "100%",
    borderBottomWidth: 0.5,
    borderColor: "#E5E5E5",
  },
  imageContainer: {
    borderRadius: 10,
    overflow: "hidden",
    aspectRatio: 1,
    height: 50,
    backgroundColor: lightColor,
  },
  image: {
    height: "100%",
    width: "100%",
  },
  name: {
    fontWeight: "700",
    fontSize: 16,
  },
  details: {
    opacity: 0.6,
    fontSize: 13,
  },
});
