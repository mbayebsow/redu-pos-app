import React from "react";
import { LayoutGrid } from "lucide-react-native";
import Item from "../ui/item";

const CategoryItem = () => {
  return <Item label="Nom de la categorie" note="4 Produits" icon={<LayoutGrid />} />;
};

export default CategoryItem;
