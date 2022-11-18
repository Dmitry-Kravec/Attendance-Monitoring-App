import React from "react";
import { StyleSheet, View, ActivityIndicator } from "react-native";
import { connect } from "react-redux";
import StudentQrScanner from "../student-qr-scanner";

import { studentQRSendErrorReset } from "../../redux/actions";

import StudentScannerSuccess from "../student-scanner-succes";
import StudentScannerFailure from "../student-scanner-failure";

const StudentScannerPage = ({
    qrServerResponseWaiting,
    qrServerResponseError,
    qrServerResponseStatus,
    resetScanError,
}) => {
    const hideScannerFlag =
        qrServerResponseError ||
        qrServerResponseWaiting ||
        qrServerResponseStatus;

    return (
        <View style={styles.container}>
            {!hideScannerFlag ? <StudentQrScanner /> : null}

            {qrServerResponseWaiting ? (
                <ActivityIndicator size="large" color="#0000ff" />
            ) : null}

            {qrServerResponseStatus === 200 ? (
                <StudentScannerSuccess resetScanError={resetScanError} />
            ) : null}

            {qrServerResponseStatus !== null &&
            qrServerResponseStatus !== 200 ? (
                <StudentScannerFailure
                    errorCode={qrServerResponseStatus}
                    resetScanError={resetScanError}
                />
            ) : null}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        justifyContent: "center",
        alignItems: "center",
    },
});

const mapStateToProps = ({
    student: {
        qrServerResponse: {
            qrServerResponseWaiting,
            qrServerResponseError,
            qrServerResponseStatus,
        },
    },
}) => {
    return {
        qrServerResponseWaiting,
        qrServerResponseError,
        qrServerResponseStatus,
    };
};

const mapDispathToProps = (dispatch) => {
    return {
        resetScanError: () => {
            dispatch(studentQRSendErrorReset());
        },
    };
};

export default connect(mapStateToProps, mapDispathToProps)(StudentScannerPage);
