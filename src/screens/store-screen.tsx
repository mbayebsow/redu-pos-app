import React from "react";
import { StyleSheet, View } from "react-native";
import { CircleFadingPlus, Search } from "lucide-react-native";
import { backgroundColor } from "../theme/styles";
import Input from "../components/ui/input";
import StoreItem from "../components/store";
import AppLayout from "../components/layout";

const data = Array(5).fill(0);

const StoreScreen = () => {
  return (
    <AppLayout title="Boutiques" stickyHeaderIndices={[1]} headerRight={<CircleFadingPlus />}>
      <View style={[styles.filterContainer]}>
        <View style={styles.inputContainer}>
          <Input placholder="Recherche" icon={<Search size={20} color="gray" />} />
        </View>
      </View>

      <View style={styles.content}>
        <View style={styles.itemsContainer}>
          {data.map((item, index) => (
            <StoreItem key={index} />
          ))}
        </View>
      </View>
    </AppLayout>
  );
};

export default StoreScreen;

const styles = StyleSheet.create({
  filterContainer: {
    flexDirection: "row",
    backgroundColor: backgroundColor,
    paddingBottom: 4,
  },
  inputContainer: {
    flex: 1,
    paddingHorizontal: 6,
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
