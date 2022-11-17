import { StyleSheet } from "react-native";
import { screenDimensionsWidth } from "../constants";

const styles = StyleSheet.create({
    container: {
        display: "flex",
        flexGrow: 1,
        justifyContent: "flex-start",
    },
    qr: {},
    newCodeButton: {
        width: 200,
        marginTop: 60,
        alignItems: "center",
    },
    qrAndButtonView: {
        flex: 1,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },
    qrSize: screenDimensionsWidth * 0.8,
});

export default styles;
