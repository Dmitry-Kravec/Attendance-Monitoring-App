import { StyleSheet } from "react-native";
import { screenDimensionsWidth } from "../constants";

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        width: screenDimensionsWidth,
        // height: "8%",
        paddingTop: 8,
        paddingBottom: 8,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-start",
        // backgroundColor: "green",
    },
    arrow: {
        marginLeft: 16,
        marginTop: 8,
        marginBottom: 12,
        marginRight: 12,
    },
    text: {
        marginTop: 8,
        marginBottom: 12,
        marginRight: 12,
    },
});

export default styles;
