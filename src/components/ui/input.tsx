import React, { useState } from "react";
import { View, TextInput, StyleSheet, Text, TextInputProps, Pressable } from "react-native";
import { backgroundMediumColor, globalStyles } from "../../theme/styles";
import { Controller } from "react-hook-form";
import { LucideIcon, X } from "lucide-react-native";

interface InputProps extends TextInputProps {
  label?: string;
  name: string;
  icon?: LucideIcon;
  control?: any;
}

const Input: React.FC<InputProps> = ({ label, name, icon, control, ...otherProps }) => {
  const [isFocus, setIsFocus] = useState(false);

  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { value, onChange, onBlur }, fieldState: { error } }) => (
        <View style={[globalStyles.container]}>
          {label && (
            <View style={[styles.labelContainer]}>
              <Text style={styles.label}>{label}</Text>
            </View>
          )}

          <View style={[styles.container, { borderWidth: isFocus ? 2 : 0 }]}>
            {icon && (
              <View style={styles.icon}>
                {React.createElement(icon, { size: 20, color: "gray" })}
              </View>
            )}

            <TextInput
              style={styles.input}
              value={value}
              onChangeText={onChange}
              onFocus={() => setIsFocus(true)}
              onBlur={() => setIsFocus(false)}
              {...otherProps}
            />

            {value && (
              <Pressable style={styles.icon} onPress={() => onChange("")}>
                <X size={15} />
              </Pressable>
            )}
          </View>
          {error && <Text style={styles.errorMessage}>{error.message}</Text>}
        </View>
      )}
    />
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
  errorMessage: {
    color: "red",
    alignSelf: "stretch",
    fontSize: 12,
    marginLeft: 10,
  },
});
