import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { accentColor, accentColorContrast, globalStyles, textColor } from "../../theme/styles";
import { LucideIcon } from "lucide-react-native";
import { Color } from "../../theme/color";

interface CardProps {
  title?: string;
  columns?: number;
  data?: {
    title: string;
    subTitle?: string;
    icon?: LucideIcon;
    onPress?: () => void;
  }[];
  colored?: boolean;
}

const Card: React.FC<CardProps> = ({ title, columns = 1, data, colored }) => {
  return (
    <View style={[globalStyles.container, styles.cardContainer]}>
      {title && <Text style={[globalStyles.subHead, styles.cardContainerTitle]}>{title}</Text>}
      <View style={styles.cardInner}>
        {data?.map((item, i) => (
          <Pressable
            onPress={item.onPress}
            style={[styles.cardItemContainer, { width: `${100 / columns - 1}%` }]}
            key={i}
          >
            <View
              style={[
                styles.cardItem,
                { backgroundColor: colored ? Color.complementary[i + 1]?.tint : "white" },
              ]}
            >
              {item.icon && (
                <View
                  style={[
                    styles.cardItemIconContainer,
                    //{ backgroundColor: Color.complementary[i + 1]?.fill },
                  ]}
                >
                  {React.createElement(item.icon, {
                    size: 29,
                    color: colored ? Color.complementary[i + 1]?.fill : accentColor,
                  })}
                </View>
              )}
              {item.title && (
                <Text
                  style={[
                    globalStyles.headline,
                    styles.cardItemTitle,
                    { color: colored ? Color.complementary[i + 1]?.fill : textColor },
                  ]}
                >
                  {item.title}
                </Text>
              )}
              {item.subTitle && (
                <Text style={[globalStyles.subHead, styles.cardItemSubTitle]}>{item.subTitle}</Text>
              )}
            </View>
          </Pressable>
        ))}
      </View>
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  cardContainer: {
    gap: 10,
  },
  cardInner: {
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 7,
  },
  cardItemContainer: {
    //aspectRatio: 1.5,
    //width: "50%",
    //padding: 4,
  },
  cardContainerTitle: {
    paddingHorizontal: 12,
  },
  cardItem: {
    paddingHorizontal: 20,
    paddingVertical: 16,
    gap: 2,
    borderRadius: 10,
  },
  cardItemIconContainer: {
    // aspectRatio: 1,
    // height: 40,
    // justifyContent: "center",
    // alignItems: "center",
    // borderRadius: 5,
  },
  cardItemTitle: {
    marginTop: 7,
  },
  cardItemSubTitle: {},
});
