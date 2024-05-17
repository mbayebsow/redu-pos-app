import { Image, NativeScrollEvent, NativeSyntheticEvent, ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useCallback, useEffect, useState } from "react";
import { backgroundLightColor, backgroundMediumColor, globalStyles } from "../theme/styles";
import Button from "../components/ui/button";
import { PackagePlus, Send } from "lucide-react-native";
import { NavigationProp, RouteProp, useNavigation } from "@react-navigation/native";
import List from "../components/ui/list";
import { PRODUCTS } from "../utils/data/products";
import { ProductParams } from "../types";

interface ProductScreenProps {
  route?: RouteProp<ProductParams>;
}

const ProductScreen = ({ route }: ProductScreenProps) => {
  const { pid } = route?.params || {};
  const [isOnTop, setIsOnTop] = useState(true);
  const navigation = useNavigation<NavigationProp<any>>();

  const PRODUCT = useCallback(() => {
    return PRODUCTS.find((p) => p.identifier === pid);
  }, [pid]);

  const handleScroll = useCallback((event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const s = event.nativeEvent.contentOffset.y;

    if (s > 0) {
      setIsOnTop(false);
    } else {
      setIsOnTop(true);
    }
  }, []);

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => <Button title="Ok" fill="clear" />,
      headerStyle: {
        backgroundColor: isOnTop ? backgroundLightColor : "white",
      },
      headerShadowVisible: isOnTop ? false : true,
    });
  }, [isOnTop]);

  return (
    <ScrollView scrollEventThrottle={1} onScroll={handleScroll} style={styles.container}>
      {PRODUCT() && (
        <View style={[globalStyles.container, styles.inner]}>
          <View style={[styles.topContainer]}>
            <Image
              style={styles.image}
              source={{
                uri: PRODUCT()?.image,
              }}
            />

            <View>
              <Text style={[globalStyles.title1, styles.name]}>{PRODUCT()?.name}</Text>
            </View>
            <View style={styles.buttonContainer}>
              <Button title="Stock" expand="full" size="large" icon={PackagePlus} color="secondary" />
              <Button title="Vente" expand="full" size="large" icon={Send} color="secondary" />
            </View>
          </View>

          <List
            title="Stock"
            data={[
              {
                title: "Stock actuelle",
                value: PRODUCT()?.stockQuantity,
              },
              {
                title: "Minimun stock",
                value: "200",
              },
            ]}
          />

          <List
            title="Details"
            data={[
              {
                title: "Prix",
                value: PRODUCT()?.priceSale,
              },
              {
                title: "Coût",
                value: PRODUCT()?.priceCost,
              },
              {
                title: "Categorie",
                value: PRODUCT()?.categoryId,
              },
              {
                title: "UPC",
                value: PRODUCT()?.identifier,
              },
            ]}
          />

          <List
            title="Quantité"
            data={[
              {
                title: "Magasin principal",
                value: "200",
              },
            ]}
          />
        </View>
      )}
    </ScrollView>
  );
};

export default ProductScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: backgroundLightColor,
  },
  inner: {
    flex: 1,
    alignItems: "center",
    paddingBottom: 40,
    //paddingTop: 100,
    gap: 20,
  },
  topContainer: {
    alignItems: "center",
    gap: 20,
    paddingHorizontal: 10,
    paddingTop: 20,
    paddingBottom: 10,
  },
  image: {
    aspectRatio: 1,
    width: "70%",
    borderRadius: 10,
    backgroundColor: backgroundMediumColor,
  },
  name: {
    fontWeight: "600",
    textAlign: "center",
    width: 300,
  },
  price: {
    opacity: 0.6,
    textAlign: "center",
    //fontSize: 12,
  },
  buttonContainer: {
    gap: 10,
    flexDirection: "row",
    alignItems: "center",
  },
});
