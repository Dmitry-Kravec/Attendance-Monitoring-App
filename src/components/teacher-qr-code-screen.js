import React, { useContext } from "react";
import { View, Text, ActivityIndicator } from "react-native";
import { connect } from "react-redux";

import { fetchTeacherQr, teacherQrReset } from "../redux/actions";
import appServiceContext from "./app-service-context";

import { QRCode } from "react-native-custom-qr-codes-expo";
import BackButton from "./back-button";
import CustomButton from "./custom-button";

import styles from "../styles/teacher-qr-code-screen-style";

const TeacherQrCodeScreen = ({
    fetchTeacherQr,
    teacherQrReset,
    lessonQrCode,
    lessonQrCodeLoading,
    lessonQrCodeLoadingError,
    lessonInfoID,
}) => {
    const apiService = useContext(appServiceContext);

    let body;

    if (
        lessonQrCodeLoading ||
        !lessonInfoID ||
        (!lessonQrCode && !lessonQrCodeLoadingError)
    ) {
        body = (
            <View style={styles.qrAndButtonView}>
                <ActivityIndicator size="large" color="#0000ff" />
            </View>
        );
    } else {
        body = (
            <View style={styles.qrAndButtonView}>
                {lessonQrCodeLoadingError ? (
                    <Text>Ошибка загрузки QR</Text>
                ) : (
                    <QRCode
                        style={styles.qr}
                        size={styles.qrSize}
                        content={lessonQrCode}
                    />
                )}

                <View style={styles.newCodeButton}>
                    <CustomButton
                        title="Получить новый код"
                        onPress={() => {
                            fetchTeacherQr(apiService)(lessonInfoID);
                        }}
                    />
                </View>
            </View>
        );
    }

    return (
        <View style={styles.container}>
            <BackButton handler={teacherQrReset} />
            {body}
        </View>
    );
};

const mapStateToProps = ({
    teacher: {
        lesQrCode: {
            lessonQrCode,
            lessonQrCodeLoading,
            lessonQrCodeLoadingError,
        },
        lesInfo: { lessonInfoID },
    },
}) => {
    return {
        lessonQrCode,
        lessonQrCodeLoading,
        lessonQrCodeLoadingError,
        lessonInfoID,
    };
};

const mapDispathToProps = (dispatch) => {
    return {
        fetchTeacherQr: fetchTeacherQr(dispatch),
        teacherQrReset: () => {
            dispatch(teacherQrReset());
        },
    };
};

export default connect(mapStateToProps, mapDispathToProps)(TeacherQrCodeScreen);
