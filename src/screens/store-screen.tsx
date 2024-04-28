import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { CircleFadingPlus, Search } from "lucide-react-native";
import { backgroundColor, borderColor, globalStyles } from "../theme/styles";
import Input from "../components/ui/input";
import StoreItem from "../components/store";
import AppLayout from "../components/layout";

const data = Array(5).fill(0);

const StoreScreen = () => {
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
            <StoreItem key={index} />
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

export default StoreScreen;

const styles = StyleSheet.create({
  filterContainer: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: borderColor,
  },
  inputContainer: {
    flex: 1,
  },
  content: {
    // flex: 1,
    //padding: 12,
  },
  itemsContainer: {
    backgroundColor: "white",
    paddingVertical: 6,
    //borderRadius: 10,
  },
});
