import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

import { Ionicons } from "@expo/vector-icons";

import styles from "../styles/back-button-style";

const BackButton = ({ handler }) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.arrow} onPress={handler}>
                <Ionicons name="arrow-back" size={28} color="black" />
            </TouchableOpacity>
            <Text style={styles.text}>Назад</Text>
        </View>
    );
};

export default BackButton;
