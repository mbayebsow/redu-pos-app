import React, { LegacyRef, useRef } from "react";
import { ShoppingBag } from "lucide-react-native";
import Item from "../ui/item";
import { Swipeable } from "react-native-gesture-handler";
import { NavigationProp, useNavigation } from "@react-navigation/native";

interface SaleItemProps {
  index: number;
}

const SaleItem: React.FC<SaleItemProps> = ({ index }) => {
  const swipeableRef: LegacyRef<Swipeable> = useRef(null);
  const navigation = useNavigation<NavigationProp<any>>();

  const close = () => {
    if (swipeableRef.current) {
      swipeableRef.current.close();
    }
  };

  return (
    <Item
      onPress={() => navigation.navigate("Sale")}
      index={index}
      ref={swipeableRef}
      label="Nom du produit"
      note="Boutique - Vente"
      icon={<ShoppingBag />}
    />
  );
};

export default SaleItem;
