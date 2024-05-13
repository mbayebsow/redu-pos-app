import React, { useCallback, useEffect, useRef, useState } from "react";
import { NativeScrollEvent, NativeSyntheticEvent, StyleSheet, Text, View } from "react-native";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { Barcode, FileText, HandCoins, PackageMinus, SquarePen } from "lucide-react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { globalStyles, backgroundColor } from "../theme/styles";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import Input from "../components/ui/input";
import ImagePicker from "../components/ui/image-picker";
import Button from "../components/ui/button";

const CATEGORIES = Array(7).fill(0);

const formSchema = z.object({
  productName: z.string().min(3, "Too short").max(30, "Too long"),
  productDescription: z.string().max(300, "Too long"),
  productPrice: z.coerce.number().min(1),
  productIdentifier: z.coerce.number().min(1),
  productMinStock: z.coerce.number().min(1),
});
const defaultValues = {
  productName: "",
  productPrice: "",
  productDescription: "",
  productIdentifier: "",
  productMinStock: "1",
};
const AddProductScreen = () => {
  const [isOnTop, setIsOnTop] = useState(true);
  const productImageRef = useRef<string | undefined>();
  const navigation = useNavigation<NavigationProp<any>>();

  const { control, handleSubmit } = useForm({ defaultValues, resolver: zodResolver(formSchema) });
  const onSubmit = (data: any) => {
    alert(JSON.stringify({ ...data, productImage: productImageRef.current }));
  };

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
      headerRight: () => <Button title="Ok" fill="clear" onPress={handleSubmit(onSubmit)} />,
      headerShadowVisible: isOnTop ? false : true,
      headerStyle: { backgroundColor: isOnTop ? backgroundColor : "white" },
    });
  }, [isOnTop]);

  return (
    <KeyboardAwareScrollView style={[styles.container]} onScroll={handleScroll}>
      <View style={{ marginBottom: 60, alignItems: "center" }}>
        <View style={styles.imagePicker}>
          <ImagePicker productImageRef={productImageRef} />
        </View>

        <View style={[styles.inner]}>
          <Input control={control} icon={SquarePen} label="Nom de produit" name="productName" />
          <Input
            control={control}
            icon={HandCoins}
            label="Prix du produit"
            name="productPrice"
            keyboardType="number-pad"
          />
          <Input control={control} icon={FileText} label="Description" name="productDescription" />
          <Input
            control={control}
            icon={Barcode}
            label="SKU"
            name="productIdentifier"
            keyboardType="number-pad"
          />
          <Input
            control={control}
            icon={PackageMinus}
            label="Minimun stock"
            name="productMinStock"
            keyboardType="number-pad"
          />

          <View style={[globalStyles.container, { flex: 1 }]}>
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

          <View style={[globalStyles.container, { flex: 1 }]}>
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
  );
};

export default AddProductScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 12,
  },
  imagePicker: {
    width: "70%",
    marginBottom: 20,
  },
  inner: {
    flex: 1,
    //padding: 6,
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
