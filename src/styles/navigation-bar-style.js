import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    navigationBarContainer: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-evenly",
        width: "100%",
        borderBottomWidth: 1,
        borderTopWidth: 1,
        borderColor: "#C8C8C8",
        paddingBottom: 8,
    },
    navigationBarItem: {
        display: "flex",
        alignItems: "center",
        paddingTop: 8,
    },
    navigationBarItemText: {
        color: "gray",
        maxWidth: 90,
    },
    navigationBarSelectedItemTextAndIcon: {
        color: "#033868",
        textShadowColor: "#033868",
        textShadowRadius: 3,
    },
});

export default styles;
