import React, { useCallback, useEffect, useRef, useState } from "react";
import { NativeScrollEvent, NativeSyntheticEvent, StyleSheet, Text, View } from "react-native";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { Barcode, FileText, HandCoins, PackageMinus, SquarePen } from "lucide-react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { globalStyles, backgroundColor } from "../theme/styles";
import Input from "../components/ui/input";
import ImagePicker from "../components/ui/image-picker";
import Button from "../components/ui/button";

const CATEGORIES = Array(7).fill(0);

const AddProductScreen = () => {
  const [isOnTop, setIsOnTop] = useState(true);
  const navigation = useNavigation<NavigationProp<any>>();
  const productNameRef = useRef<string | undefined>();
  const productPriceRef = useRef<string | undefined>();
  const productDescriptionRef = useRef<string | undefined>();
  const productIdentifierRef = useRef<string | undefined>();
  const productMinStockRef = useRef<string | undefined>();
  //const { bottom, top } = useSafeAreaInsets();

  const handleScroll = useCallback((event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const s = event.nativeEvent.contentOffset.y;
    if (s > 0) {
      setIsOnTop(false);
    } else {
      setIsOnTop(true);
    }
  }, []);

  const addProduct = () => {
    console.log(
      productNameRef.current,
      productPriceRef.current,
      productDescriptionRef.current,
      productIdentifierRef.current,
      productMinStockRef.current
    );
  };

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => <Button title="Ok" fill="clear" onPress={addProduct} />,
      headerShadowVisible: isOnTop ? false : true,
      headerStyle: { backgroundColor: isOnTop ? backgroundColor : "white" },
    });
  }, [isOnTop]);

  return (
    <>
      <KeyboardAwareScrollView style={[styles.container]} onScroll={handleScroll}>
        <View style={{ marginBottom: 60 }}>
          <ImagePicker />

          <View style={[styles.inner]}>
            <Input
              icon={<SquarePen size={20} color="gray" />}
              label="Nom de produit"
              value={productNameRef.current}
              onChange={(value) => (productNameRef.current = value)}
            />
            <Input
              icon={<HandCoins size={20} color="gray" />}
              label="Prix du produit"
              keyboardType="number-pad"
              value={productPriceRef.current}
              onChange={(value) => (productPriceRef.current = value)}
            />
            <Input
              icon={<FileText size={20} color="gray" />}
              label="Description"
              value={productDescriptionRef.current}
              onChange={(value) => (productDescriptionRef.current = value)}
            />
            <Input
              icon={<Barcode size={20} color="gray" />}
              label="SKU"
              keyboardType="number-pad"
              value={productIdentifierRef.current}
              onChange={(value) => (productIdentifierRef.current = value)}
            />
            <Input
              icon={<PackageMinus size={20} color="gray" />}
              label="Minimun stock"
              keyboardType="number-pad"
              value={productMinStockRef.current}
              onChange={(value) => (productMinStockRef.current = value)}
            />

            <View style={[globalStyles.container]}>
              <View style={[styles.labelContainer]}>
                <Text style={styles.label}>Categorie</Text>
              </View>

              <View style={styles.chipsContainer}>
                {CATEGORIES.map((_, i) => (
                  <View key={i} style={styles.chip}>
                    <View style={styles.chipIcon} />
                    <Text style={styles.chipText}>Categorie</Text>
                  </View>
                ))}
              </View>
            </View>

            <View style={[globalStyles.container]}>
              <View style={[styles.labelContainer]}>
                <Text style={styles.label}>Boutique</Text>
              </View>

              <View style={styles.chipsContainer}>
                {CATEGORIES.map((_, i) => (
                  <View key={i} style={styles.chip}>
                    <View style={styles.chipIcon} />
                    <Text style={styles.chipText}>Boutique</Text>
                  </View>
                ))}
              </View>
            </View>
          </View>
        </View>
      </KeyboardAwareScrollView>
    </>
  );
};

export default AddProductScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 12,
  },
  inner: {
    flex: 1,
    padding: 6,
    borderRadius: 10,
    backgroundColor: "white",
  },
  labelContainer: {
    padding: 6,
    marginTop: 5,
    marginBottom: 3,
  },
  label: {
    fontWeight: "600",
    fontSize: 15,
  },
  chipsContainer: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "flex-start",
    gap: 10,
  },
  chip: {
    gap: 10,
    padding: 5,
    paddingRight: 10,
    borderWidth: 1,
    borderRadius: 100,
    flexDirection: "row",
    alignItems: "center",
    width: "auto",
    height: 30,
  },
  chipIcon: {
    borderRadius: 100,
    aspectRatio: 1,
    overflow: "hidden",
    justifyContent: "center",
    alignContent: "center",
    backgroundColor: "red",
    height: "100%",
  },
  chipText: {},
  image: {
    width: 200,
    height: 200,
  },
});
