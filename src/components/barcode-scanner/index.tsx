import { Modal, Pressable, SafeAreaView, StyleSheet, Text, View } from "react-native";
import { Camera } from "expo-camera";
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

  const handleBarCodeScanned = ({ type, data }) => {
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
      <Fab
        title="Scanner"
        icon={<ScanLine color="white" size={20} />}
        onPress={() => setVisible(true)}
      />
      <Modal visible={visible} animationType="slide">
        <SafeAreaView style={styles.container}>
          <View style={styles.cameraContainer}>
            <Camera
              ratio="1:1"
              focusable={true}
              autoFocus={true}
              focusDepth={3}
              onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
              barCodeScannerSettings={{
                barCodeTypes: [
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
    width: "100%",
    height: "100%",
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
