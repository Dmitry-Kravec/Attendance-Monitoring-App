import React from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";

const CustomButton = ({ onPress, title = "NAME" }) => {
    return (
        <TouchableOpacity
            style={styles.custom_button}
            onPress={onPress}
            activeOpacity={0.6}
        >
            <Text style={styles.custom_button__title}>{title}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    custom_button: {},
    custom_button__title: {
        width: 170,
        height: 35,
        textAlign: "center",
        textAlignVertical: "center",
        backgroundColor: "#C6E05C",
        borderRadius: 5,
    },
});

export default CustomButton;
