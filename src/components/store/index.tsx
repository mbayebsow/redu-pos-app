import React from "react";
import { Store } from "lucide-react-native";
import Item from "../ui/item";

const StoreItem = () => {
  return (
    <Item label="Nom de la boutique" note="1234 Main Street, Dallas, TX 75201" icon={<Store />} />
  );
};

export default StoreItem;
