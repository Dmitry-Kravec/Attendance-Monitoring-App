import React from "react";

import { StyleSheet, View } from "react-native";

import Login from "../login";

const LoginPage = () => {
  return (
    <View style={styles.container}>
      <Login />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    //flex: 1,
    // backgroundColor: "red",
  },
});

export default LoginPage;
