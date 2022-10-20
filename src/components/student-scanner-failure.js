import React from "react";
import { View, Text, Button } from "react-native";

import CustomButton from "./custom-button";
import styles from "../styles/student-scanner-failure-style";

const StudentScannerFailure = ({ errorCode, resetScanError }) => {
  return (
    <View style={styles.container}>
      {errorCode === 403 ? (
        <View style={[styles.container, { marginBottom: 16 }]}>
          <Text style={{ marginBottom: 4 }}>Ошибка:</Text>
          <Text>Qr-код недействителен</Text>
        </View>
      ) : null}
      {errorCode === 500 ? (
        <View>
          <View style={{ marginBottom: 16 }}>
            <Text style={[styles.container, { marginBottom: 16 }]}>
              Ошибка сервера:
            </Text>
            <Text>Обнаружено несколько одинаковых qr-кодов</Text>
          </View>
        </View>
      ) : null}
      <CustomButton title="Сканировать заново" onPress={resetScanError} />
      {/* <Button title="Сканировать заново" onPress={resetScanError} /> */}
    </View>
  );
};

export default StudentScannerFailure;
