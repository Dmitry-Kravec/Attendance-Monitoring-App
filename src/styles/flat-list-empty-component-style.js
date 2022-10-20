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
        // height: "100%",
        // width: screenDimensionsWidth * 0.8,
    },
});

export default styles;
