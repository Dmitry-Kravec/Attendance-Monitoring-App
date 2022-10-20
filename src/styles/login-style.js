import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    loginView: {
        marginTop: 30,
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-start",
        flex: 1,
        // backgroundColor: "blue",
    },
    enterText: {
        fontSize: 24,
        marginBottom: 30,
    },
    formContainer: {
        // width: 250,
        display: "flex",
        alignItems: "center",
        // backgroundColor: "green",
    },
    inputContainer: {
        // backgroundColor: "green",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },
    textInput: {
        marginTop: 4,
        marginBottom: 8,
        borderRadius: 20,
        borderWidth: 1,
        width: 250,
        // backgroundColor: "#DFE4F0",
    },
    enterButton: {
        marginTop: 12,
        marginBottom: 9,
    },
    textError: {
        color: "red",
        marginTop: 16,
    },
    loading: {
        marginTop: 16,
    },
});

export default styles;
