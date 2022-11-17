import { StyleSheet } from "react-native";
import { screenDimensionsWidth, screenDimensionsHeight } from "../constants";

const styles = StyleSheet.create({
    listEmptyComponentView: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: 100,
        height: screenDimensionsHeight * 0.8,
    },

    textHeader: {
        fontSize: 24,
        marginBottom: 8,
        marginTop: 16,
        width: screenDimensionsWidth * 0.8,
        backgroundColor: "orange",
    },
});

export default styles;
