import { ScrollView, Text, View } from "react-native";
import React from "react";
import Input from "../components/ui/input";
import { globalStyles } from "../theme/styles";

const ProductsScreen = () => {
  return (
    <ScrollView style={globalStyles.container}>
      <View>
        <Input />
      </View>
      <View style={globalStyles.container}>
        <Text>ProductsScreen</Text>
      </View>
    </ScrollView>
  );
};

export default ProductsScreen;
