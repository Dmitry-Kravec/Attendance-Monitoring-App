import { React, useContext } from "react";
import { connect } from "react-redux";
import { View, Text, TextInput, ActivityIndicator } from "react-native";

import appServiceContext from "./app-service-context";
import { fetchLogin, loginErrorReset } from "../redux/actions";
import { Formik } from "formik";

import CustomButton from "./custom-button";

import styles from "../styles/login-style";

const Login = ({
    loginError,
    loginDataSentToServer,
    fetchLogin,
    loginErrorReset,
}) => {
    const appService = useContext(appServiceContext);

    return (
        <View style={styles.loginView}>
            <Text style={styles.enterText}>Вход</Text>
            <View style={styles.formContainer}>
                <Formik
                    initialValues={{ email: "", password: "" }}
                    onSubmit={(values) => {
                        values.email = values.email.toLowerCase();

                        fetchLogin(appService)(values);
                    }}
                >
                    {({ handleChange, handleSubmit, values }) => (
                        <View style={styles.inputContainer}>
                            <TextInput
                                style={styles.textInput}
                                textAlign={"center"}
                                value={values.email}
                                placeholder="Sfedu-email"
                                onChangeText={(e) => {
                                    if (loginError) {
                                        loginErrorReset();
                                    }
                                    handleChange("email")(e);
                                }}
                            />
                            <TextInput
                                style={styles.textInput}
                                textAlign={"center"}
                                value={values.password}
                                placeholder="Пароль"
                                secureTextEntry={true}
                                onChangeText={(e) => {
                                    if (loginError) {
                                        loginErrorReset();
                                    }
                                    handleChange("password")(e);
                                }}
                            />

                            <View style={styles.enterButton}>
                                <CustomButton
                                    title="Войти"
                                    onPress={handleSubmit}
                                />
                            </View>
                        </View>
                    )}
                </Formik>

                {loginError ? (
                    <Text
                        style={styles.textError}
                    >{`Неверная почта или пароль`}</Text>
                ) : null}
                {loginDataSentToServer ? (
                    <ActivityIndicator
                        style={styles.loading}
                        size="large"
                        color="#0000ff"
                    />
                ) : null}
            </View>
        </View>
    );
};

const mapStateToProps = ({
    login: { isLoggedIn, loginError, loginDataSentToServer },
}) => {
    return {
        isLoggedIn,
        loginError,
        loginDataSentToServer,
    };
};

const mapDispathToProps = (dispatch) => {
    return {
        fetchLogin: fetchLogin(dispatch),
        loginErrorReset: () => dispatch(loginErrorReset()),
    };
};

export default connect(mapStateToProps, mapDispathToProps)(Login);
