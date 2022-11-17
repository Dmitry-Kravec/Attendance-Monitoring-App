import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    userInfoContainer: {
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-start",
        height: 150,
    },
    userInfoContainer_firstLastName: {
        fontSize: 24,
    },
    userInfoContainer_userRole: {
        paddingTop: 4,
        fontSize: 16,
        paddingBottom: 24,
    },
    userInfoContainer_mailContainer: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        width: 250,
        borderBottomWidth: 1,
    },
    userInfoContainer_field: {
        fontSize: 16,
    },
});

export default styles;
