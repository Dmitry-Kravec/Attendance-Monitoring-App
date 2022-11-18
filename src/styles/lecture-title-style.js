import { StyleSheet } from "react-native";
import { screenDimensionsWidth, screenDimensionsHeight } from "../constants";

const styles = StyleSheet.create({
    lectureTitleView: {
        backgroundColor: "#EAFE6E",
        minHeight: screenDimensionsHeight * 0.1,
        maxHeight: "80%",
        height: "70%",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        paddingLeft: screenDimensionsWidth > 330 ? 24 : 8,
        paddingRight: screenDimensionsWidth > 330 ? 24 : 8,
    },
    lectureTitleText: {
        textAlign: "center",
        fontSize: screenDimensionsWidth > 330 ? 16 : 14,
    },
});

export default styles;
