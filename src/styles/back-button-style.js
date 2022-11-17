import { StyleSheet } from "react-native";
import { screenDimensionsWidth } from "../constants";

const styles = StyleSheet.create({
    container: {
        width: screenDimensionsWidth,
        paddingTop: 8,
        paddingBottom: 8,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-start",
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
