import { StyleSheet } from "react-native";
import { screenDimensionsWidth, screenDimensionsHeight } from "../constants";

const styles = StyleSheet.create({
    listEmptyComponentView: {
        // backgroundColor: "orange",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: 100,
        height: screenDimensionsHeight * 0.8,
        // width: screenDimensionsWidth * 0.8,
    },

    textHeader: {
        fontSize: 24,
        marginBottom: 8,
        marginTop: 16,
        // backgroundColor: "orange",
        // width: screenDimensionsWidth > 330 ? 320 : 300,
        width: screenDimensionsWidth * 0.8,
    },
});

export default styles;
