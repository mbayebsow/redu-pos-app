import React, { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import { backgroundColor, globalStyles, lightColor } from "../theme/styles";
import { Search } from "lucide-react-native";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import AppLayout from "../components/layout";
import SaleItem from "../components/sales";
import Input from "../components/ui/input";
import { SALES } from "../utils/data/sales";

const formSchema = z.object({
  productNameSearch: z.string(),
});
const defaultValues = {
  productNameSearch: "",
};

const SalesScreen = () => {
  const [searchValue, setSearchValue] = useState<string>("");
  const { control, watch } = useForm({ defaultValues, resolver: zodResolver(formSchema) });

  useEffect(() => {
    const subscription = watch((value) => setSearchValue(value.productNameSearch || ""));
    return () => subscription.unsubscribe();
  }, [watch]);

  return (
    <AppLayout title="Ventes" stickyHeaderIndices={[1]}>
      <View style={[globalStyles.container, styles.filterContainer]}>
        <View style={styles.inputContainer}>
          <Input
            control={control}
            icon={Search}
            name="saleIdSearch"
            placeholder="Rechercher par ID"
          />
        </View>
      </View>

      <View style={[globalStyles.container, styles.content]}>
        <View style={styles.itemsContainer}>
          <View style={styles.itemsContainerInner}>
            {SALES.map((item, index) => (
              <SaleItem key={index} sale={item} />
            ))}
          </View>
        </View>
      </View>
    </AppLayout>
  );
};

export default SalesScreen;

const styles = StyleSheet.create({
  filterContainer: {
    flexDirection: "row",
    backgroundColor: backgroundColor,
  },
  inputContainer: {
    flex: 1,
  },
  content: {
    flex: 1,
    //padding: 12,
  },
  itemsContainer: {
    flex: 1,
    backgroundColor: "white",
    padding: 6,
  },
  itemsContainerInner: {
    backgroundColor: lightColor,
    gap: 1,
  },
});
