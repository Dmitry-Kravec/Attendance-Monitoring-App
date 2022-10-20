import { StyleSheet } from "react-native";
import { screenDimensionsHeight, screenDimensionsWidth } from "../constants";

const styles = StyleSheet.create({
    container: {
        marginTop: 16,
        minWidth: 200,
        width: screenDimensionsWidth * 0.75,
        // height: screenDimensionsHeight / 4,
        borderWidth: 1,
        padding: 1,
        // backgroundColor: "blue",
    },
    list: {
        // paddingTop: 2,
        // borderWidth: 1,
        // backgroundColor: "red",
    },
    listHeader: {
        // marginBottom: 4,
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
