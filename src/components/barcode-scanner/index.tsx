import React, { useEffect, useState } from "react";
import { ScanLine, X } from "lucide-react-native";
import { Modal, Pressable, SafeAreaView, StyleSheet, Text, View } from "react-native";
import { CameraView, Camera, BarcodeScanningResult } from "expo-camera/next";
import { BarCodeScanner } from "expo-barcode-scanner";
import Fab from "../ui/fab";
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
    console.log(`Bar code with type ${type} and data ${data} has been scanned!`);
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
      <Modal visible={visible} animationType="slide">
        <SafeAreaView style={styles.container}>
          <View style={styles.cameraContainer}>
            <CameraView
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
              style={StyleSheet.absoluteFillObject}
            />
          </View>
          {scanned && (
            <Pressable onPress={() => setScanned(false)}>
              <Text>Tap to Scan Again</Text>
            </Pressable>
          )}

          <Text>{result}</Text>

          <View style={styles.closeButton}>
            <Button title="Fermer" icon={<X size={20} color="white" />} onPress={handleClose} />
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
    alignItems: "center",
    justifyContent: "center",
  },
  cameraContainer: {
    //flex: 1,
    width: 300,
    height: 300,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
    overflow: "hidden",
  },
  closeButton: {
    flex: 1,
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
    bottom: 50,
    zIndex: 1,
    width: "100%",
  },
});
