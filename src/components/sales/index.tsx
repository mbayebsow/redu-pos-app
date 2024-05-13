import React, { LegacyRef, useRef } from "react";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { Pressable, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { accentColor, globalStyles, lightColor } from "../../theme/styles";
import { GestureHandlerRootView, Swipeable } from "react-native-gesture-handler";
import { BellPlus, Pin, Printer } from "lucide-react-native";
import { SaleType } from "../../types";

interface SaleItemProps {
  sale?: SaleType;
}

const RightSwipeActions = () => {
  return (
    <View style={{ flexDirection: "row", gap: 1 }}>
      <TouchableOpacity
        onPress={() => {
          alert("Delete");
        }}
        style={{
          backgroundColor: "orange",
          justifyContent: "center",
          alignItems: "center",
          aspectRatio: 0.5,
          height: "100%",
        }}
      >
        <BellPlus color="white" />
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => {
          alert("Delete");
        }}
        style={{
          backgroundColor: accentColor,
          justifyContent: "center",
          alignItems: "center",
          aspectRatio: 0.5,
          height: "100%",
        }}
      >
        <Printer color="white" />
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => {
          alert("Delete");
        }}
        style={{
          backgroundColor: "gray",
          justifyContent: "center",
          alignItems: "center",
          aspectRatio: 0.5,
          height: "100%",
        }}
      >
        <Pin color="white" />
      </TouchableOpacity>
    </View>
  );
};

const SaleItem: React.FC<SaleItemProps> = ({ sale }) => {
  const swipeableRef: LegacyRef<Swipeable> = useRef(null);
  const navigation = useNavigation<NavigationProp<any>>();

  const close = () => {
    setTimeout(() => {
      swipeableRef.current?.close();
    }, 2000);
  };

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Swipeable
        // id={id}
        ref={swipeableRef}
        shouldCancelWhenOutside
        renderRightActions={RightSwipeActions}
        leftThreshold={Infinity}
        onSwipeableOpen={close}
      >
        <Pressable style={styles.container} onPress={() => navigation.navigate("Sale")}>
          <View style={styles.head}>
            <Text style={[styles.saleId, globalStyles.headline]}>{sale?.receiptNo}</Text>
            <View style={styles.saleTotal}>
              <Text>{sale?.amount}</Text>
            </View>
          </View>
          <View>
            <Text style={[globalStyles.subHead]}>
              {sale?.date.toLocaleString()} - Nom du client
            </Text>
            <Text style={styles.saleItems}>
              1 x Produit, 4 x Produit,3 x Produit,2 x Produit, 3 x Produit
            </Text>
          </View>
          <View style={styles.salePaymentStatus}>
            <Text style={{ fontSize: 11, fontWeight: "600", color: "white" }}>{sale?.status}</Text>
          </View>
        </Pressable>
      </Swipeable>
    </GestureHandlerRootView>
  );
};

export default SaleItem;

const styles = StyleSheet.create({
  container: {
    gap: 0,
    paddingHorizontal: 6,
    paddingVertical: 10,
    backgroundColor: "white",
  },
  head: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  saleId: {},
  saleTotal: {
    backgroundColor: lightColor,
    padding: 5,
    paddingHorizontal: 10,
    borderRadius: 100,
  },
  saleItems: {
    opacity: 0.6,
  },
  salePaymentStatus: {
    flex: 1,
    backgroundColor: "red",
    padding: 5,
    paddingHorizontal: 10,
    borderRadius: 100,
    alignSelf: "flex-start",
    marginTop: 10,
  },
});
