import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import { globalStyles } from "../theme/styles";
import SaleItem from "../components/sales";
import Input from "../components/ui/input";
import Button from "../components/ui/button";
import { ListFilter } from "lucide-react-native";

const data = Array(50).fill(0);

const Separator = () => {
  return <View style={{ borderBottomWidth: 0 }} />;
};

const SalesScreen = () => {
  return (
    <View style={[globalStyles.container, { flex: 1 }]}>
      <View style={[styles.filterContainer]}>
        <View style={styles.inputContainer}>
          <Input />
        </View>
        <View style={styles.buttonContainer}>
          <Button variant="icon" icon={<ListFilter />} />
        </View>
      </View>

      <View style={[globalStyles.container]}>
        <FlatList
          //contentContainerStyle={{ gap: 10 }}
          //columnWrapperStyle={{ gap: 10 }}
          ItemSeparatorComponent={Separator}
          data={data}
          //numColumns={3}
          showsVerticalScrollIndicator={false}
          //keyExtractor={(item, index) => index} item.id
          renderItem={(item) => <SaleItem />}
        />
      </View>
    </View>
  );
};

export default SalesScreen;

const styles = StyleSheet.create({
  filterContainer: {
    //flex: 1,
    flexDirection: "row",
    //justifyContent: "space-between",
    backgroundColor: "white",
  },
  inputContainer: {
    flex: 1,
  },
  buttonContainer: {
    flexDirection: "row",
    width: "auto",
  },
  productsContainer: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    alignItems: "flex-start",
    gap: 10,
  },
});
