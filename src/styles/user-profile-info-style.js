import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    userInfoContainer: {
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-start",
        // backgroundColor: "red",
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
        // backgroundColor: "green",
        borderBottomWidth: 1,
        // borderBottomStartRadius: 60,
        // borderBottomEndRadius: 50,
    },
    userInfoContainer_field: {
        fontSize: 16,
    },
});

export default styles;
