import React from "react";
import { StyleSheet, View } from "react-native";
import { backgroundColor } from "../theme/styles";
import AppLayout from "../components/layout";
import SaleItem from "../components/sales";
import Input from "../components/ui/input";
import { Search } from "lucide-react-native";

const data = Array(50).fill(0);

const SalesScreen = () => {
  return (
    <AppLayout title="ventes" stickyHeaderIndices={[1]}>
      <View style={[styles.filterContainer]}>
        <View style={styles.inputContainer}>
          <Input placholder="Recherche" icon={<Search size={20} color="gray" />} />
        </View>
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
    paddingHorizontal: 6,
    paddingBottom: 4,
    backgroundColor: backgroundColor,
  },
  inputContainer: {
    flex: 1,
  },
  content: {
    //padding: 12,
  },
  itemsContainer: {
    backgroundColor: "white",
    paddingVertical: 6,
    //borderRadius: 10,
  },
});
