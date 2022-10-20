import React from "react";
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";

const CustomButton = ({ onPress, title = "NAME" }) => {
  return (
    <TouchableOpacity
      style={styles["custom-button"]}
      onPress={onPress}
      activeOpacity={0.6}
    >
      <Text style={styles["custom-button__title"]}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  ["custom-button"]: {},
  ["custom-button__title"]: {
    width: 170,
    height: 35,
    textAlign: "center",
    textAlignVertical: "center",
    backgroundColor: "#C6E05C",
    borderRadius: 5,
  },
});

export default CustomButton;
