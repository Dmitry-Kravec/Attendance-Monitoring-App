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
        minWidth: 170,
        minHeight: 35,
        textAlign: "center",
        textAlignVertical: "center",
        backgroundColor: "#C6E05C",
        borderRadius: 5,
        padding: 5,
        paddingLeft: 10,
        paddingRight: 10,
    },
});

export default CustomButton;
