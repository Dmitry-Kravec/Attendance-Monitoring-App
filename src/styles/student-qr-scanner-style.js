import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    barCodeBox: {
        marginTop: "5%",
        alignItems: "center",
        justifyContent: "center",
        height: "60%",
        width: 300,
    },
    permissionContainer: {
        display: "flex",
        flexGrow: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    permissionCameraText: {
        textAlign: "center",
        marginBottom: 30,
    },
    barCodeScanner: { height: "100%", width: 300 },
    buttonView: {
        marginTop: "6%",
    },
    buttonViewText: {
        marginBottom: "5%",
    },
    buttonViewInside: {
        display: "flex",
        height: 90,
        justifyContent: "space-between",
        alignItems: "center",
    },
});

export default styles;
