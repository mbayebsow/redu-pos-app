import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { Search } from "lucide-react-native";
import { borderColor, globalStyles } from "../theme/styles";
import Input from "../components/ui/input";
import CategoryItem from "../components/category";

const data = Array(5).fill(0);

const CategoryScreen = () => {
  return (
    <View style={{ flex: 1 }}>
      <View style={[globalStyles.container, styles.filterContainer]}>
        <View style={styles.inputContainer}>
          <Input placholder="Recherche" icon={<Search size={20} color="gray" />} />
        </View>
      </View>

      <ScrollView style={[globalStyles.container, styles.content]}>
        <View style={styles.itemsContainer}>
          {data.map((item, index) => (
            <CategoryItem key={index} />
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

export default CategoryScreen;

const styles = StyleSheet.create({
  filterContainer: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: borderColor,
  },
  inputContainer: {
    flex: 1,
    //paddingHorizontal: 6,
  },
  content: {
    //height: "100%",
    //flex: 1,
    //padding: 12,
  },
  itemsContainer: {
    paddingVertical: 6,
    //borderRadius: 10,
  },
});
