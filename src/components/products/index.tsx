import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { globalStyles, accentColor, lightColor } from "../../theme/styles";
import { NavigationProp, useNavigation } from "@react-navigation/native";

const Product = () => {
  const navigation = useNavigation<NavigationProp<any>>();
  return (
    <Pressable style={styles.container} onPress={() => navigation.navigate("Product")}>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={{
            uri: "https://yombouna.sn/wp-content/uploads/2020/09/Eau-minerale-kirene-pack-12-bouteilles.jpg",
          }}
        />
      </View>
      <View style={styles.textContainer}>
        <View style={[globalStyles.container, { flex: 1 }]}>
          <Text style={styles.name}>Eau-Minerale-Kirene-pack-12-bouteilles</Text>
          <Text style={styles.price}>Boissons</Text>
          <Text style={styles.price}>2 500 FCFA - 002283748</Text>
        </View>
        <View style={styles.unitContainer}>
          <Text style={styles.unit}>20</Text>
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
    padding: 5,
    paddingVertical: 7,
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: lightColor,
  },
  imageContainer: {
    borderRadius: 10,
    overflow: "hidden",
    aspectRatio: 1,
    height: 60,
    backgroundColor: lightColor,
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
    backgroundColor: accentColor,
    paddingVertical: 5,
    paddingHorizontal: 5,
    borderRadius: 100,
  },
  unit: {
    color: "white",
  },
  name: {
    //fontWeight: "700",
    fontSize: 15,
  },
  price: {
    opacity: 0.6,
    //fontSize: 12,
  },
});
