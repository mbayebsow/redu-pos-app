import { SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import {
  accentColorContrast,
  backgroundLightColor,
  backgroundMediumColor,
  borderColor,
  globalStyles,
} from "../theme/styles";
import {
  BadgeInfo,
  BadgeSwissFranc,
  BarChartBig,
  Barcode,
  Combine,
  Contact,
  Headset,
  LayoutGrid,
  NotebookPen,
  PackagePlus,
  Ruler,
  ShieldBan,
  Store,
  TabletSmartphone,
  User,
  Users,
} from "lucide-react-native";
import List from "../components/ui/list";
import Card from "../components/ui/card";
import { NavigationProp, useNavigation } from "@react-navigation/native";

const SpaceScreen = () => {
  const navigation = useNavigation<NavigationProp<any>>();

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={[styles.inner, globalStyles.container]}>
          <View style={[globalStyles.container, styles.userContainer]}>
            <View style={styles.avatarContainer}>
              <User />
            </View>
            <View style={styles.nameContainer}>
              <Text style={[styles.userName, globalStyles.title1]}>Mbaye babacar</Text>
              <Text style={[styles.userEstablishment]}>Etablissement Mbaye babacar</Text>
              <Text style={[styles.userPhone, globalStyles.subHead]}>
                Administrateur - 77 000 00 00
              </Text>
            </View>
          </View>

          <Card
            title="Operations"
            colored
            columns={2}
            data={[
              {
                title: "Carnet",
                subTitle: "5 au total",
                icon: NotebookPen,
              },
              {
                title: "Stock",
                subTitle: "5 au total",
                icon: Combine,
              },
              {
                title: "Rapport",
                subTitle: "5 au total",
                icon: BarChartBig,
              },
              {
                title: "Équipe",
                subTitle: "5 au total",
                icon: Users,
              },
              {
                title: "Boutiques",
                subTitle: "5 au total",
                icon: Store,
                onPress: () => navigation.navigate("Boutiques"),
              },
              {
                title: "Fournisseurs",
                subTitle: "5 au total",
                icon: PackagePlus,
              },
              {
                title: "Clients",
                subTitle: "5 au total",
                icon: Contact,
              },
              {
                title: "Paiements",
                subTitle: "5 au total",
                icon: BadgeSwissFranc,
              },
            ]}
          />

          <List
            title="Autres"
            data={[
              {
                title: "Categories produits",
                icon: LayoutGrid,
                onPress: () => navigation.navigate("Categories"),
              },
              {
                title: "Unités produits",
                icon: Ruler,
              },
              {
                title: "Code bare produits",
                icon: Barcode,
              },
            ]}
          />

          <List
            title="Paramétres & Support"
            data={[
              {
                title: "Parametre de sécurité",
                icon: ShieldBan,
              },
              {
                title: "Conditions d'utilisation",
                icon: BadgeInfo,
              },
              {
                title: "Contacter le support",
                icon: Headset,
              },
              {
                title: "Appareils",
                icon: TabletSmartphone,
              },
            ]}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SpaceScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: backgroundLightColor,
  },
  inner: {
    gap: 20,
  },
  userContainer: {
    paddingBottom: 15,
    // flexDirection: "row",
    // alignItems: "center",
    gap: 15,
    borderBottomWidth: 1,
    borderColor,
  },
  avatarContainer: {
    alignItems: "center",
    justifyContent: "center",
    aspectRatio: 1,
    borderRadius: 100,
    height: 60,
    backgroundColor: accentColorContrast,
  },
  nameContainer: {},
  userName: {},
  userEstablishment: {},
  userPhone: {},
});
