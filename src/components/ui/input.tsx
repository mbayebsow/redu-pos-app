import React, { useState } from "react";
import { View, TextInput, StyleSheet, Text, KeyboardTypeOptions } from "react-native";
import { backgroundMediumColor, globalStyles } from "../../theme/styles";

interface InputProps {
  label?: string;
  icon?: React.ReactNode;
  value?: string | undefined;
  placholder?: string;
  keyboardType?: KeyboardTypeOptions;
  onChange?: (text: string) => void;
}

const Input: React.FC<InputProps> = ({
  label,
  icon,
  value,
  placholder,
  keyboardType,
  onChange,
}) => {
  const [isFocus, setIsFocus] = useState(false);

  return (
    <View style={[globalStyles.container]}>
      {label && (
        <View style={[styles.labelContainer]}>
          <Text style={styles.label}>{label}</Text>
        </View>
      )}

      <View style={[styles.container, { borderWidth: isFocus ? 2 : 0 }]}>
        {icon && <View style={styles.icon}>{icon}</View>}
        <TextInput
          style={styles.input}
          value={value}
          onChangeText={onChange}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          placeholder={placholder}
          keyboardType={keyboardType}
        />
      </View>
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  container: {
    height: 40,
    padding: 5,
    gap: 10,
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: backgroundMediumColor,
  },
  labelContainer: {
    padding: 6,
    marginTop: 5,
    marginBottom: 3,
  },
  label: {
    fontWeight: "600",
    fontSize: 15,
  },
  icon: {
    padding: 5,
  },
  input: {
    flex: 1,
    height: "100%",
  },
});
