import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { accentColor, accentColorContrast, borderColor, globalStyles } from "../../theme/styles";
import { ChevronRight, LucideIcon } from "lucide-react-native";

interface ListProps {
  title?: string;
  data: {
    title: string;
    icon?: LucideIcon;
    onPress?: () => void;
  }[];
}

const List: React.FC<ListProps> = ({ title, data }) => {
  return (
    <View style={styles.listContainer}>
      <View style={styles.list}>
        {title && <Text style={[globalStyles.subHead, styles.listLabel]}>{title}</Text>}

        <View style={styles.listItemContainer}>
          <View style={styles.listItemInner}>
            {data.map((item, i) => (
              <View key={i} style={styles.listItem}>
                <View style={styles.listItemLeft}>
                  {item.icon && (
                    <View style={styles.listItemIconContainer}>
                      {React.createElement(item.icon, { size: 17, color: accentColor })}
                    </View>
                  )}
                  <Text style={styles.listItemTiltle}>{item.title}</Text>
                </View>
                <ChevronRight size={20} color={accentColor} />
              </View>
            ))}
          </View>
        </View>
      </View>
    </View>
  );
};

export default List;

const styles = StyleSheet.create({
  listContainer: {
    padding: 6,
  },
  list: {
    width: "100%",
    gap: 6,
  },
  listLabel: {
    marginLeft: 12,
  },
  listItemContainer: {
    backgroundColor: borderColor,
    overflow: "hidden",
    borderRadius: 10,
    width: "100%",
    //padding: 2,
  },
  listItemInner: {
    borderRadius: 9,
    overflow: "hidden",
    gap: 1,
  },
  listItem: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "white",
    height: 55,
    paddingHorizontal: 12,
  },
  listItemLeft: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  listItemIconContainer: {
    backgroundColor: accentColorContrast,
    justifyContent: "center",
    alignItems: "center",
    aspectRatio: 1,
    borderRadius: 5,
    height: 30,
  },
  listItemTiltle: {
    fontWeight: "500",
    fontSize: 15,
  },
});