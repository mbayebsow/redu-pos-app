import React, { useEffect, useState } from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import { CameraView, Camera, BarcodeScanningResult } from "expo-camera/next";
import { X } from "lucide-react-native";
import { lightColor } from "../theme/styles";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Button from "../components/ui/button";

const ScannerScreen = () => {
  const [result, setResult] = useState("");
  const [hasPermission, setHasPermission] = useState(false);
  const [scanned, setScanned] = useState(false);
  const { bottom, top } = useSafeAreaInsets();

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
    <View style={[styles.container]}>
      <SafeAreaView>
        <View style={[styles.cameraContainer, { paddingTop: top }]}>
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
            style={[styles.camera]}
          />
        </View>
      </SafeAreaView>

      <View style={styles.resultContainer}>
        {scanned && (
          <View style={styles.rescan}>
            <Button
              title="Re-scan"
              icon={<X size={20} color="white" />}
              onPress={() => setScanned(false)}
            />
          </View>
        )}
        <Text>{result}</Text>
      </View>
    </View>
  );
};

export default ScannerScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //backgroundColor: bac,
  },
  cameraContainer: {
    //flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 30,
  },
  camera: {
    width: "100%",
    aspectRatio: 1.7,
    borderRadius: 20,
    overflow: "hidden",
  },
  resultContainer: {
    flex: 1,
    padding: 30,
    backgroundColor: "white",
    height: "100%",
    borderTopWidth: 1,
    borderTopColor: lightColor,
  },
  rescan: {
    alignItems: "center",
    zIndex: 1,
    width: "100%",
  },
});
