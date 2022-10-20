import React from "react";
import { StyleSheet, View } from "react-native";
import { connect } from "react-redux";

import { userExit } from "../../redux/actions";

import CustomButton from "../custom-button";
import UserProfileInfo from "../user-profile-info";

const UserProfilePage = ({ userExit, ...otherProps }) => {
    return (
        <View style={styles.userProfileContainer}>
            <UserProfileInfo {...otherProps} />
            <CustomButton title="Выйти из аккаунта" onPress={userExit} />
        </View>
    );
};

const styles = StyleSheet.create({
    userProfileContainer: {
        // backgroundColor: "red",
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-start",
        width: "100%",
        height: "50%",
    },
});

const mapStateToProps = ({
    login: {
        user: { userRole, firstName, lastName, email },
    },
}) => {
    return { userRole, firstName, lastName, email };
};

const mapDispathToProps = (dispatch) => {
    return {
        userExit: () => {
            dispatch(userExit());
        },
    };
};

export default connect(mapStateToProps, mapDispathToProps)(UserProfilePage);
