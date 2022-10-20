import { StyleSheet } from "react-native";
import { screenDimensionsHeight, screenDimensionsWidth } from "../constants";

const styles = StyleSheet.create({
    container: {
        // display: "flex",
        marginTop: 16,
        minWidth: 200,
        borderWidth: 1,
        padding: 1,
        width: screenDimensionsWidth * 0.75,
        // height: screenDimensionsHeight / 4,
        // backgroundColor: "blue",
    },
    list: {
        // backgroundColor: "green",

        maxHeight: 200,
    },
    listHeader: {
        marginBottom: 4,
        borderBottomWidth: 1,
    },
    emptyList: {
        // backgroundColor: "red",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: 50,
    },
});

export default styles;
