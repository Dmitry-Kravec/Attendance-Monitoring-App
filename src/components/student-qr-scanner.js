import { React, useContext, useEffect, useState } from "react";
import { View, Text } from "react-native";
import { connect } from "react-redux";

import { fetchSendStudentQrCode } from "../redux/actions";
import appServiceContext from "./app-service-context";
import { BarCodeScanner } from "expo-barcode-scanner";
import CustomButton from "./custom-button";

import styles from "../styles/student-qr-scanner-style";

const StudentQrScanner = ({ fetchSendStudentQrCode, user }) => {
    const [hasPermissons, setHasPermissons] = useState(null);
    const [scanned, setScanned] = useState(false);
    const [qrCode, setQrCode] = useState("Не отсканирован");

    const apiServise = useContext(appServiceContext);

    const askCameraPermission = () => {
        (async () => {
            const { status } = await BarCodeScanner.requestPermissionsAsync();
            setHasPermissons(status === "granted");
        })();
    };

    useEffect(() => {
        askCameraPermission();
    }, []);

    const handleBarCodeScanned = ({ data }) => {
        if (scanned) {
            return;
        }
        setScanned(true);
        setQrCode(data);
    };

    if (hasPermissons === null) {
        return (
            <View>
                <Text>Запрос на использование камеры</Text>
            </View>
        );
    }
    if (hasPermissons === false) {
        return (
            <View>
                <Text>Разрешите приложению использовать камеру</Text>
                <CustomButton
                    title="Разрешить доступ к камере"
                    onPress={askCameraPermission}
                />
            </View>
        );
    }

    return (
        <View style={styles.container}>
            <View style={styles.barCodeBox}>
                <BarCodeScanner
                    onBarCodeScanned={handleBarCodeScanned}
                    style={{ height: 600, width: 500 }}
                />
            </View>
            <View style={styles.buttonView}>
                <Text style={styles.buttonViewText}>{qrCode}</Text>
                {scanned ? (
                    <View style={styles.buttonViewInside}>
                        <CustomButton
                            title="Сканировать снова"
                            onPress={() => {
                                setScanned(false);
                                setQrCode("Не отсканирован");
                            }}
                        />
                        <CustomButton
                            title="Отправить"
                            onPress={() => {
                                fetchSendStudentQrCode(apiServise)(
                                    user,
                                    qrCode
                                );
                            }}
                        />
                    </View>
                ) : null}
            </View>
        </View>
    );
};

const mapStateToProps = ({ login: { user } }) => {
    return {
        user,
    };
};

const mapDispathToProps = (dispatch) => {
    return {
        fetchSendStudentQrCode: fetchSendStudentQrCode(dispatch),
    };
};

export default connect(mapStateToProps, mapDispathToProps)(StudentQrScanner);
