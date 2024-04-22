import React, { useCallback, useEffect, useState } from "react";
import {
  Button,
  NativeScrollEvent,
  NativeSyntheticEvent,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { Barcode, FileText, HandCoins, PackageMinus, SquarePen } from "lucide-react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { globalStyles, lightColor } from "../theme/styles";
import Input from "../components/ui/input";
import ImagePicker from "../components/ui/image-picker";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const CATEGORIES = Array(7).fill(0);

const AddProductScreen = () => {
  const [isOnTop, setIsOnTop] = useState(true);
  const navigation = useNavigation<NavigationProp<any>>();
  const { bottom, top } = useSafeAreaInsets();

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
      headerRight: () => <Button title="Ok" />,
    });
  }, []);

  return (
    <>
      {!isOnTop && (
        <View
          style={{
            height: top + 5,
            width: "100%",
            position: "absolute",
            top: 0,
            backgroundColor: "white",
            zIndex: 10,
            borderBottomWidth: 1,
            borderColor: lightColor,
          }}
        />
      )}
      <KeyboardAwareScrollView
        style={[styles.inner]}
        //onScroll={}
        onScroll={handleScroll}
        //onScrollBeginDrag={(e) => console.log("target", e.cancelable)}
      >
        <View
          style={{
            marginBottom: bottom,
            marginTop: top,
          }}
        >
          <ImagePicker />

          <View
            style={{
              flex: 1,
              padding: 6,
              borderRadius: 10,
              backgroundColor: "white",
            }}
          >
            <Input icon={<SquarePen size={20} color="gray" />} label="Nom de produit" />
            <Input icon={<HandCoins size={20} color="gray" />} label="Prix du produit" />
            <Input icon={<FileText size={20} color="gray" />} label="Description" />
            <Input icon={<Barcode size={20} color="gray" />} label="SKU" />
            <Input icon={<PackageMinus size={20} color="gray" />} label="Minimun stock" />

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
    //backgroundColor: "white",
    flex: 1,
  },
  inner: {
    flex: 1,
    paddingHorizontal: 12,
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
