import { SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { accentColor, backgroundMediumColor, borderColor, globalStyles } from "../theme/styles";
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

const SpaceScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.inner}>
          <View style={styles.userContainer}>
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

          <View style={styles.operationsContainer}>
            <Text style={[globalStyles.subHead, styles.operationsContainerTitle]}>Operations</Text>
            <View style={styles.operationsInner}>
              <View style={styles.operationsItemContainer}>
                <View style={styles.operationsItem}>
                  <NotebookPen size={27} color={accentColor} />
                  <Text style={[globalStyles.headline, styles.operationsItemTitle]}>Carnet</Text>
                  <Text style={[globalStyles.subHead, styles.operationsItemSubTitle]}>
                    5 au total
                  </Text>
                </View>
              </View>
              <View style={styles.operationsItemContainer}>
                <View style={styles.operationsItem}>
                  <Combine size={27} color={accentColor} />
                  <Text style={[globalStyles.headline, styles.operationsItemTitle]}>Stock</Text>
                  <Text style={[globalStyles.subHead, styles.operationsItemSubTitle]}>
                    5 au total
                  </Text>
                </View>
              </View>
              <View style={styles.operationsItemContainer}>
                <View style={styles.operationsItem}>
                  <BarChartBig size={27} color={accentColor} />
                  <Text style={[globalStyles.headline, styles.operationsItemTitle]}>Rapport</Text>
                  <Text style={[globalStyles.subHead, styles.operationsItemSubTitle]}>
                    5 au total
                  </Text>
                </View>
              </View>
              <View style={styles.operationsItemContainer}>
                <View style={styles.operationsItem}>
                  <Users size={27} color={accentColor} />
                  <Text style={[globalStyles.headline, styles.operationsItemTitle]}>Équipe</Text>
                  <Text style={[globalStyles.subHead, styles.operationsItemSubTitle]}>
                    5 au total
                  </Text>
                </View>
              </View>
              <View style={styles.operationsItemContainer}>
                <View style={styles.operationsItem}>
                  <Store size={27} color={accentColor} />
                  <Text style={[globalStyles.headline, styles.operationsItemTitle]}>Boutiques</Text>
                  <Text style={[globalStyles.subHead, styles.operationsItemSubTitle]}>
                    5 au total
                  </Text>
                </View>
              </View>
              <View style={styles.operationsItemContainer}>
                <View style={styles.operationsItem}>
                  <PackagePlus size={27} color={accentColor} />
                  <Text style={[globalStyles.headline, styles.operationsItemTitle]}>
                    Fournisseurs
                  </Text>
                  <Text style={[globalStyles.subHead, styles.operationsItemSubTitle]}>
                    5 au total
                  </Text>
                </View>
              </View>
              <View style={styles.operationsItemContainer}>
                <View style={styles.operationsItem}>
                  <Contact size={27} color={accentColor} />
                  <Text style={[globalStyles.headline, styles.operationsItemTitle]}>Clients</Text>
                  <Text style={[globalStyles.subHead, styles.operationsItemSubTitle]}>
                    5 au total
                  </Text>
                </View>
              </View>
              <View style={styles.operationsItemContainer}>
                <View style={styles.operationsItem}>
                  <BadgeSwissFranc size={27} color={accentColor} />
                  <Text style={[globalStyles.headline, styles.operationsItemTitle]}>Paiements</Text>
                  <Text style={[globalStyles.subHead, styles.operationsItemSubTitle]}>
                    5 au total
                  </Text>
                </View>
              </View>
            </View>
          </View>

          <List
            title="Autres"
            data={[
              {
                title: "Categories produits",
                icon: LayoutGrid,
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
    backgroundColor: backgroundMediumColor,
  },
  inner: {
    padding: 12,
    gap: 20,
  },
  userContainer: {
    padding: 6,
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
    backgroundColor: borderColor,
  },
  nameContainer: {},
  userName: {},
  userEstablishment: {},
  userPhone: {},
  operationsContainer: {
    padding: 2,
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
    padding: 4,
  },
  operationsContainerTitle: {
    paddingHorizontal: 16,
  },
  operationsItem: {
    paddingHorizontal: 20,
    paddingVertical: 16,
    gap: 2,
    backgroundColor: "white",
    borderRadius: 10,
  },
  operationsItemTitle: {
    marginTop: 7,
  },
  operationsItemSubTitle: {},
});
