import { Alert, Modal, Pressable, SafeAreaView, StyleSheet, Text, View } from "react-native";
import { BarcodeScanningResult, Camera, CameraView } from "expo-camera/next";
import React, { useEffect, useState } from "react";
import Fab from "../ui/fab";
import { ScanLine, X } from "lucide-react-native";
import Button from "../ui/button";

const BarcodeScanner = () => {
  const [visible, setVisible] = useState(false);
  const [result, setResult] = useState("");
  const [hasPermission, setHasPermission] = useState(false);
  const [scanned, setScanned] = useState(false);

  useEffect(() => {
    const getCameraPermissions = async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === "granted");
    };

    getCameraPermissions();
    return () => {
      setScanned(false);
      setResult("");
    };
  }, []);

  const handleBarCodeScanned = ({ type, data }: BarcodeScanningResult) => {
    setScanned(true);
    setResult(data);
    Alert.alert(`Bar code with type ${type} and data ${data} has been scanned!`);
  };

  const handleClose = () => {
    setVisible(false);
    setScanned(false);
    setResult("");
  };

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <>
      <Fab
        title="Scanner"
        icon={<ScanLine color="white" size={20} />}
        onPress={() => setVisible(true)}
      />
      <Modal visible={visible} animationType="slide">
        <SafeAreaView style={styles.container}>
          <View style={styles.cameraContainer}>
            <CameraView
              style={styles.camera}
              onBarcodeScanned={scanned ? undefined : handleBarCodeScanned}
              barcodeScannerSettings={{
                barcodeTypes: [
                  "upc_a",
                  "codabar",
                  "ean13",
                  "ean8",
                  "code39",
                  "code93",
                  "code128",
                  "upc_e",
                ],
              }}
            />
          </View>

          <View>
            <Button
              title="Scanner"
              icon={<ScanLine size={20} color="white" />}
              onPress={() => setScanned(false)}
            />
            <Text>{result}</Text>
          </View>

          <View style={styles.closeButton}>
            <Button variant="icon" icon={<X size={20} color="black" />} onPress={handleClose} />
          </View>
        </SafeAreaView>
      </Modal>
    </>
  );
};

export default BarcodeScanner;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 40,
    alignItems: "center",
    justifyContent: "center",
  },
  cameraContainer: {
    //flex: 1,
    width: "80%",
    justifyContent: "center",
    alignItems: "center",
  },
  camera: {
    width: "100%",
    aspectRatio: 1.8,
    borderRadius: 20,
    overflow: "hidden",
  },
  closeButton: {
    flex: 1,
    position: "absolute",
    justifyContent: "center",
    top: 50,
    left: 10,
    zIndex: 1,
  },
});
