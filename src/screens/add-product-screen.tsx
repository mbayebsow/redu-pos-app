import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import React from "react";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { globalStyles } from "../theme/styles";
import Input from "../components/ui/input";
import { Barcode, FileText, HandCoins, Image, PackageMinus, SquarePen } from "lucide-react-native";

const AddProductScreen = () => {
  const navigation = useNavigation<NavigationProp<any>>();
  return (
    <SafeAreaView style={[globalStyles.container, styles.container]}>
      <ScrollView style={[styles.inner]}>
        <Input icon={<Image size={20} color="gray" />} label="Photo" />
        <Input icon={<SquarePen size={20} color="gray" />} label="Nom de produit" />
        <Input icon={<HandCoins size={20} color="gray" />} label="Prix du produit" />
        <Input icon={<FileText size={20} color="gray" />} label="Description" />
        <Input icon={<Barcode size={20} color="gray" />} label="SKU" />
        <Input icon={<PackageMinus size={20} color="gray" />} label="Minimun stock" />
        <Input icon={<PackageMinus size={20} color="gray" />} label="Minimun stock" />
        <Input icon={<PackageMinus size={20} color="gray" />} label="Minimun stock" />
        <Input icon={<PackageMinus size={20} color="gray" />} label="Minimun stock" />
        <Input icon={<PackageMinus size={20} color="gray" />} label="Minimun stock" />
        <Input icon={<PackageMinus size={20} color="gray" />} label="Minimun stock" />
        <Input icon={<PackageMinus size={20} color="gray" />} label="Minimun stock" />
      </ScrollView>
    </SafeAreaView>
  );
};

export default AddProductScreen;

const styles = StyleSheet.create({
  container: {
    //paddingHorizontal: 12,
    backgroundColor: "white",
    //flex: 1,
    //borderRadius: 10,
  },
  inner: {
    padding: 6,
    //borderRadius: 10,
    //flex: 1,
    //justifyContent: "space-around",
  },
});
