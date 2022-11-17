import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "flex-start",
    },
    barCodeBox: {
        marginTop: 100,
        alignItems: "center",
        justifyContent: "center",
        height: 300,
        width: 300,
        overflow: "hidden",
    },
    buttonView: {
        marginTop: 40,
    },
    buttonViewText: {
        marginBottom: 30,
    },
    buttonViewInside: {
        display: "flex",
        height: 90,
        justifyContent: "space-between",
        alignItems: "center",
    },
});

export default styles;
