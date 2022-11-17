import { StyleSheet } from "react-native";
import { screenDimensionsWidth } from "../constants";

const styles = StyleSheet.create({
    lectureTitleView: {
        backgroundColor: "#EAFE6E",
        height: 130,
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
