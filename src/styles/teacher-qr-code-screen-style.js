import { StyleSheet } from "react-native";
import { screenDimensionsWidth, screenDimensionsHeight } from "../constants";

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        display: "flex",
        flexGrow: 1,
        // alignItems: "center",
        justifyContent: "flex-start",
        // backgroundColor: "red",
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
        // backgroundColor: "green",
        // marginTop: screenDimensionsHeight / 10,
    },
    qrSize: screenDimensionsWidth * 0.8,
});

export default styles;
