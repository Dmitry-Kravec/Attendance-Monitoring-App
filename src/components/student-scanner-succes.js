import React from "react";
import { View, Text } from "react-native";

import CustomButton from "./custom-button";

import styles from "../styles/student-scanner-succes-style";

const StudentScannerSuccess = ({ resetScanError }) => {
    return (
        <View>
            <View style={styles.container}>
                <Text style={styles.text}>Посещение отмечено</Text>
                <CustomButton
                    title="Сканировать заново"
                    onPress={resetScanError}
                />
            </View>
        </View>
    );
};

export default StudentScannerSuccess;
