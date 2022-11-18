import { StyleSheet } from "react-native";
import { screenDimensionsHeight, screenDimensionsWidth } from "../constants";

const styles = StyleSheet.create({
    container: {
        marginTop: 16,
        minWidth: 200,
        width: screenDimensionsWidth * 0.8,
        borderWidth: 1,
        padding: 1,
        height: "45%",
    },
    list: {},
    listHeader: {
        borderBottomWidth: 1,
    },
    emptyList: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: 50,
    },
});

export default styles;
