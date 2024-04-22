import React, { useState } from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import * as Imagepicker from "expo-image-picker";
import { globalStyles, lightColor } from "../../theme/styles";

const ImagePicker = () => {
  const [image, setImage] = useState<null | string>(null);
  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await Imagepicker.launchImageLibraryAsync({
      mediaTypes: Imagepicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  return (
    <View style={[globalStyles.container]}>
      <View style={[styles.container]}>
        <View style={styles.imageContainer}>
          {image && <Image source={{ uri: image }} style={styles.image} />}
        </View>

        <Pressable onPress={pickImage} style={styles.buttonContainer}>
          <Text style={styles.pickerText}>Choisissez une image</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default ImagePicker;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    gap: 20,
    padding: 20,
  },
  imageContainer: {
    aspectRatio: 1,
    width: 150,
    backgroundColor: lightColor,
    borderRadius: 10,
  },
  image: {
    height: "100%",
    width: "100%",
    borderRadius: 8,
  },
  buttonContainer: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: lightColor,
    paddingVertical: 7,
    paddingHorizontal: 15,
    borderRadius: 100,
    //flex: 1,
  },
  pickerText: {
    fontSize: 15,
    textAlign: "center",
  },
});
