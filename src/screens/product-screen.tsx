import {
  Image,
  NativeScrollEvent,
  NativeSyntheticEvent,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useCallback, useEffect, useState } from "react";
import { backgroundColor, globalStyles } from "../theme/styles";
import Button from "../components/ui/button";
import { PackagePlus, Send } from "lucide-react-native";
import { NavigationProp, useNavigation } from "@react-navigation/native";

const ProductScreen = () => {
  const [isOnTop, setIsOnTop] = useState(true);
  const navigation = useNavigation<NavigationProp<any>>();

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
      //headerRight: () => <Button title="Ok" variant="text" onPress={addProduct} />,
      headerShadowVisible: isOnTop ? false : true,
      headerStyle: { backgroundColor: isOnTop ? backgroundColor : "white" },
    });
  }, [isOnTop]);

  return (
    <ScrollView style={[{ flex: 1 }]} scrollEventThrottle={1} onScroll={handleScroll}>
      <View style={styles.container}>
        <View style={[styles.topContainer]}>
          <Image
            style={styles.image}
            source={{
              uri: "https://yombouna.sn/wp-content/uploads/2020/09/Eau-minerale-kirene-pack-12-bouteilles.jpg",
            }}
          />

          <View>
            <Text style={[globalStyles.title1, styles.name]}>
              Eau-Minerale-Kirene-pack-12-bouteilles
            </Text>
          </View>
          <View style={styles.buttonContainer}>
            <Button title="Stock" expand="full" icon={<PackagePlus color="white" size={20} />} />
            <Button title="Vente" expand="full" icon={<Send color="white" size={20} />} />
          </View>
        </View>

        <View style={styles.contain}>
          <View style={styles.list}>
            <Text style={styles.listLabel}>Stock</Text>
            <View style={styles.listItemContainer}>
              <View style={styles.listItemInner}>
                <View style={styles.listItem}>
                  <Text style={styles.listItemTiltle}>Stock actuelle</Text>
                  <Text>2 500</Text>
                </View>
                <View style={styles.listItem}>
                  <Text style={styles.listItemTiltle}>Minimun stock</Text>
                  <Text>200</Text>
                </View>
              </View>
            </View>
          </View>

          <View style={styles.list}>
            <Text style={styles.listLabel}>Details</Text>
            <View style={styles.listItemContainer}>
              <View style={styles.listItemInner}>
                <View style={styles.listItem}>
                  <Text style={styles.listItemTiltle}>Prix</Text>
                  <Text>2 500 FCFA</Text>
                </View>
                <View style={styles.listItem}>
                  <Text style={styles.listItemTiltle}>Coût</Text>
                  <Text>2 500 FCFA</Text>
                </View>
                <View style={styles.listItem}>
                  <Text style={styles.listItemTiltle}>Categorie</Text>
                  <Text>Boissons</Text>
                </View>
                <View style={styles.listItem}>
                  <Text style={styles.listItemTiltle}>UPC</Text>
                  <Text>1234567890123</Text>
                </View>
              </View>
            </View>
          </View>

          <View style={styles.list}>
            <Text style={styles.listLabel}>Quantité</Text>
            <View style={styles.listItemContainer}>
              <View style={styles.listItemInner}>
                <View style={styles.listItem}>
                  <Text style={styles.listItemTiltle}>Magasin principal</Text>
                  <Text>20</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default ProductScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    paddingBottom: 40,
    paddingTop: 100,
    gap: 20,
  },
  topContainer: {
    alignItems: "center",
    marginTop: 0,
    gap: 20,
    paddingHorizontal: 20,
  },
  image: {
    aspectRatio: 1,
    height: 170,
    borderRadius: 10,
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
  contain: {
    backgroundColor: "white",
    width: "100%",
    padding: 20,
  },
  list: {
    width: "100%",
    gap: 6,
    marginBottom: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 2,
  },
  listLabel: {
    opacity: 0.5,
    marginLeft: 12,
  },
  listItemContainer: {
    backgroundColor: backgroundColor,
    overflow: "hidden",
    borderRadius: 10,
    width: "100%",
    //padding: 2,
  },
  listItemInner: {
    borderRadius: 9,
    overflow: "hidden",
    gap: 1,
  },
  listItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "white",
    padding: 12,
    paddingVertical: 15,
  },
  listItemTiltle: {
    fontWeight: "500",
    fontSize: 15,
  },
});
