import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
    },
    createButtonView: {
        marginTop: 12,
        width: "50%",
    },
    titleAndButtonContainer: {
        height: "25%",
        display: "flex",
        alignItems: "center",
    },
    listsContainer: { height: "60%" },
    touchableOp: {
        height: 35,
        backgroundColor: "#C6E05C",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 5,
    },
    touchableOpText: {
        width: 170,
        textAlign: "center",
    },
});

export default styles;
