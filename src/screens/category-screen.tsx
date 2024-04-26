import React from "react";
import { StyleSheet, View } from "react-native";
import { CircleFadingPlus, Search } from "lucide-react-native";
import { backgroundColor } from "../theme/styles";
import Input from "../components/ui/input";
import CategoryItem from "../components/category";
import AppLayout from "../components/layout";

const data = Array(5).fill(0);

const CategoryScreen = () => {
  return (
    <AppLayout title="Catégories" stickyHeaderIndices={[1]} headerRight={<CircleFadingPlus />}>
      <View style={[styles.filterContainer]}>
        <View style={styles.inputContainer}>
          <Input placholder="Recherche" icon={<Search size={20} color="gray" />} />
        </View>
      </View>

      <View style={styles.content}>
        <View style={styles.itemsContainer}>
          {data.map((item, index) => (
            <CategoryItem key={index} />
          ))}
        </View>
      </View>
    </AppLayout>
  );
};

export default CategoryScreen;

const styles = StyleSheet.create({
  filterContainer: {
    flexDirection: "row",
    paddingHorizontal: 6,
    paddingBottom: 4,
    backgroundColor: backgroundColor,
  },
  inputContainer: {
    flex: 1,
    //paddingHorizontal: 6,
  },
  content: {
    height: "100%",
    //flex: 1,
    backgroundColor: "white",
    //padding: 12,
  },
  itemsContainer: {
    paddingVertical: 6,
    //borderRadius: 10,
  },
});
