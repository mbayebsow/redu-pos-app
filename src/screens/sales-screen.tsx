import React from "react";
import { StyleSheet, View } from "react-native";
import { backgroundColor } from "../theme/styles";
import AppLayout from "../components/layout";
import SaleItem from "../components/sales";
import Input from "../components/ui/input";

const data = Array(50).fill(0);

const SalesScreen = () => {
  return (
    <AppLayout title="ventes" stickyHeaderIndices={[1]}>
      <View style={styles.inputContainer}>
        <Input />
      </View>

      <View style={styles.content}>
        <View style={styles.itemsContainer}>
          {data.map((item, index) => (
            <SaleItem key={index} index={index} />
          ))}
        </View>
      </View>
    </AppLayout>
  );
};

export default SalesScreen;

const styles = StyleSheet.create({
  filterContainer: {
    flexDirection: "row",
    backgroundColor: "white",
  },
  inputContainer: {
    flex: 1,
    paddingHorizontal: 6,
    backgroundColor: backgroundColor,
  },
  content: {
    padding: 12,
  },
  itemsContainer: {
    backgroundColor: "white",
    paddingVertical: 6,
    borderRadius: 10,
  },
});