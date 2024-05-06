import React, { useCallback, useState } from "react";
import { Image, StyleSheet, View } from "react-native";
import { MediaTypeOptions, launchImageLibraryAsync } from "expo-image-picker";
import { backgroundLightColor, globalStyles, lightColor } from "../../theme/styles";
import Button from "./button";

interface ImagePickerProps {
  productImageRef: React.MutableRefObject<string | undefined>;
}

const ImagePicker = ({ productImageRef }: ImagePickerProps) => {
  const [image, setImage] = useState<null | string>(null);

  const pickImage = useCallback(async () => {
    // No permissions request is necessary for launching the image library
    let result = await launchImageLibraryAsync({
      mediaTypes: MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 0.5,
    });

    //console.log(result);

    if (!result.canceled) {
      productImageRef.current = result.assets[0].uri;
      setImage(result.assets[0].uri);
    }
  }, []);

  return (
    <View style={[globalStyles.container]}>
      <View style={[styles.container]}>
        <View style={styles.imageContainer}>
          {image && <Image source={{ uri: image }} style={styles.image} />}
        </View>
        <Button title="Choisissez une image" color="secondary" shape="round" onPress={pickImage} />
      </View>
    </View>
  );
};

export default ImagePicker;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    gap: 20,
    paddingTop: 20,
  },
  imageContainer: {
    aspectRatio: 1,
    width: "100%",
    backgroundColor: backgroundLightColor,
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
