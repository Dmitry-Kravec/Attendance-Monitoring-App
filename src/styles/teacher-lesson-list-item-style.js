import { StyleSheet } from "react-native";
import { screenDimensionsWidth } from "../constants";

const styles = StyleSheet.create({
    container: {
        marginTop: 8,
        backgroundColor: "#EAFE6E",
        height: 80,
        borderRadius: 10,
        alignItems: "center",
        justifyContent: "center",
        width: screenDimensionsWidth * 0.9,
        paddingLeft: 5,
        paddingRight: 5,
    },
    text: {
        textAlign: "center",
    },
});

export default styles;
