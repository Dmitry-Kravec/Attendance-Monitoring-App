import { StyleSheet } from "react-native";
import { screenDimensionsWidth, screenDimensionsHeight } from "../constants";

const styles = StyleSheet.create({
    ListHeaderComponentStyle: {
        marginBottom: 8,
        marginTop: 16,
        paddingLeft: screenDimensionsWidth * 0.05,
        paddingRight: screenDimensionsWidth * 0.05,
        width: screenDimensionsWidth,
        // backgroundColor: "orange",
    },

    textHeader: {
        fontSize: 24,
    },

    contentContainerStyle: {
        // backgroundColor: "red",
        display: "flex",
        alignItems: "center",
    },
});

export default styles;
