import { Alert, Pressable, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { LegacyRef, RefAttributes, forwardRef, useId, useRef } from "react";
import { ChevronRight, Pen, Trash } from "lucide-react-native";
import Swipeable from "react-native-gesture-handler/Swipeable";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { globalStyles } from "../../theme/styles";
import { Color } from "../../theme/color";

interface ItemProps {
  ref?: LegacyRef<Swipeable>;
  index?: number;
  label: string;
  note: string;
  icon: React.ReactNode;
  onPress?: () => void;
}

const RightSwipeActions = () => {
  return (
    <View style={{ flexDirection: "row", padding: 0.2, gap: 1 }}>
      <TouchableOpacity
        onPress={() => {
          Alert.alert("Delete");
        }}
        style={{
          backgroundColor: "blue",
          justifyContent: "center",
          alignItems: "center",
          aspectRatio: 1,
          height: "100%",
        }}
      >
        <Pen color="white" />
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => {
          Alert.alert("Delete");
        }}
        style={{
          backgroundColor: "red",
          justifyContent: "center",
          alignItems: "center",
          aspectRatio: 1,
          height: "100%",
        }}
      >
        <Trash color="white" />
      </TouchableOpacity>
    </View>
  );
};

const Item: React.FC<ItemProps> = forwardRef(({ index, label, note, icon, onPress }, ref) => {
  const id = useId();

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Swipeable
        id={id}
        ref={ref}
        renderRightActions={RightSwipeActions}
        leftThreshold={Infinity}
        onSwipeableOpen={(direction, swipeable) => {
          // console.log(id);
          // console.log(swipeable.props.id);
          //close();

          if (direction === "right") {
            // Swiped from right
          } else if (direction === "left") {
            // Swiped from left
          }
        }}
      >
        <Pressable onPress={onPress} style={styles.container}>
          <View style={styles.leftContainer}>
            <View style={styles.imageContainer}>{icon}</View>
          </View>

          <View style={styles.righContainer}>
            <View style={{}}>
              <Text style={[globalStyles.headline, styles.label]}>{label}</Text>
              <Text style={[globalStyles.subHead, styles.note]}>{note}</Text>
            </View>
            <ChevronRight />
          </View>
        </Pressable>
      </Swipeable>
    </GestureHandlerRootView>
  );
});

export default Item;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    gap: 10,
    paddingHorizontal: 12,
    backgroundColor: "white",
  },
  leftContainer: {
    paddingVertical: 6,
    height: "100%",
  },
  righContainer: {
    flex: 1,
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
    height: "100%",
    borderBottomWidth: 0.5,
    borderColor: "#E5E5E5",
  },
  imageContainer: {
    borderRadius: 10,
    overflow: "hidden",
    aspectRatio: 1,
    height: 50,
    backgroundColor: Color.grayscale[100],
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    height: "100%",
    width: "100%",
  },
  label: {},
  note: { opacity: 0.7 },
});
