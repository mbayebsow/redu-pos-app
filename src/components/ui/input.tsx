import React from "react";
import { View, TextInput } from "react-native";
import { globalStyles } from "../../theme/styles";

const Input = () => {
  return (
    <View style={globalStyles.container}>
      <TextInput
        style={globalStyles.input}
        //onChangeText={onChangeNumber}
        //value={number}
        placeholder="useless placeholder"
        keyboardType="numeric"
      />
    </View>
  );
};

export default Input;
