import React from "react";
import { View, Text } from "react-native";

import styles from "../styles/user-profile-info-style";

const UserProfileInfo = ({ userRole, firstName, lastName, email }) => {
    return (
        <View style={styles.userInfoContainer}>
            <Text style={styles.userInfoContainer_firstLastName}>
                {firstName + " " + lastName}
            </Text>
            <Text style={styles.userInfoContainer_userRole}>{userRole}</Text>
            <View style={styles.userInfoContainer_mailContainer}>
                <Text style={styles.userInfoContainer_field}>Почта:</Text>
                <Text style={styles.userInfoContainer_field}>{email}</Text>
            </View>
        </View>
    );
};

export default UserProfileInfo;
