import React from "react";
import { View, Text, ActivityIndicator } from "react-native";

import styles from "../styles/flat-list-empty-component-style";

const FlatListEmptyComponent = ({
    itemListLength,
    itemListIsLoading,
    itemListLoadingError,
}) => {
    return (
        <View style={styles.listEmptyComponentView}>
            {itemListLoadingError ? (
                <Text>Произошла ошибка при загрузке</Text>
            ) : null}
            {itemListIsLoading ? (
                <ActivityIndicator size="large" color="#0000ff" />
            ) : null}
            {itemListLength === 0 && !itemListIsLoading ? (
                <Text>Список пуст</Text>
            ) : null}
        </View>
    );
};

export default FlatListEmptyComponent;
