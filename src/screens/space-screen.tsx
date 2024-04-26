import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { backgroundColor, borderColor, globalStyles, lightColor } from "../theme/styles";
import { User } from "lucide-react-native";

const SpaceScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.inner}>
        <View style={styles.userContainer}>
          <View style={styles.avatarContainer}>
            <User />
          </View>
          <View style={styles.nameContainer}>
            <Text style={[styles.userName, globalStyles.title1]}>Mbaye babacar</Text>
            <Text style={[styles.userEstablishment]}>Etablissement Mbaye babacar</Text>
            <Text style={[styles.userPhone, globalStyles.subHead]}>Vendeur - 77 000 00 00</Text>
          </View>
        </View>

        <View style={styles.operationsContainer}>
          <Text>Operations</Text>
          <View style={styles.operationsInner}>
            <View style={styles.operationsItemContainer}>
              <View style={styles.operationsItem}></View>
            </View>
            <View style={styles.operationsItemContainer}>
              <View style={styles.operationsItem}></View>
            </View>
            <View style={styles.operationsItemContainer}>
              <View style={styles.operationsItem}></View>
            </View>
            <View style={styles.operationsItemContainer}>
              <View style={styles.operationsItem}></View>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SpaceScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: lightColor,
  },
  inner: {
    padding: 6,
    gap: 20,
  },
  userContainer: {
    backgroundColor,
    borderRadius: 10,
    padding: 6,
    margin: 6,
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
  },
  avatarContainer: {
    alignItems: "center",
    justifyContent: "center",
    aspectRatio: 1,
    borderRadius: 100,
    height: 70,
    backgroundColor: borderColor,
  },
  nameContainer: {},
  userName: {},
  userEstablishment: {},
  userPhone: {},
  operationsContainer: {
    //padding: 6,
    gap: 5,
  },
  operationsInner: {
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
  },
  operationsItemContainer: {
    aspectRatio: 1.5,
    width: "50%",
    padding: 6,
  },
  operationsItem: {
    flex: 1,
    backgroundColor: "white",
    borderRadius: 10,
  },
});
