import React from "react";
import { View, Text } from "react-native";

import CustomButton from "./custom-button";
import styles from "../styles/student-scanner-failure-style";

const StudentScannerFailure = ({ errorCode, resetScanError }) => {
    let errorMessage;

    switch (errorCode) {
        case 403:
            errorMessage = "Qr-код недействителен";
            break;
        case 500:
            errorMessage = "Обнаружено несколько одинаковых qr-кодов";
            break;
        case 409:
            errorMessage = "Студент не является участником занятия";
            break;

        default: {
            errorMessage = "Непредвиденная ошибка сервера";
        }
    }

    return (
        <View style={styles.container}>
            <Text>Ошибка:</Text>
            <Text style={styles.text}>{errorMessage}</Text>
            <CustomButton title="Сканировать заново" onPress={resetScanError} />
        </View>
    );
};

export default StudentScannerFailure;
