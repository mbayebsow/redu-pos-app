import React from "react";
import { SectionList, StyleSheet, Text, View } from "react-native";
import { backgroundColor, globalStyles, lightColor } from "../theme/styles";
import AppLayout from "../components/layout";
import SaleItem from "../components/sales";
import Input from "../components/ui/input";
import { Search } from "lucide-react-native";

const data = Array(50).fill(0);

const SalesScreen = () => {
  return (
    <AppLayout title="Ventes" stickyHeaderIndices={[1]}>
      <View style={[globalStyles.container, styles.filterContainer]}>
        <View style={styles.inputContainer}>
          <Input placholder="Recherche" icon={<Search size={20} color="gray" />} />
        </View>
      </View>

      <View style={[globalStyles.container, styles.content]}>
        <View style={styles.itemsContainer}>
          <View style={styles.itemsContainerInner}>
            {data.map((item, index) => (
              <SaleItem key={index} index={index} />
            ))}
          </View>
        </View>
      </View>
    </AppLayout>
  );
};

export default SalesScreen;

const styles = StyleSheet.create({
  filterContainer: {
    flexDirection: "row",
    backgroundColor: backgroundColor,
  },
  inputContainer: {
    flex: 1,
  },
  content: {
    flex: 1,
    //padding: 12,
  },
  itemsContainer: {
    flex: 1,
    backgroundColor: "white",
    padding: 6,
  },
  itemsContainerInner: {
    backgroundColor: lightColor,
    gap: 1,
  },
});
