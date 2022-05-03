import React from "react";
import { View, ActivityIndicator, Text, StyleSheet } from "react-native";
import { useSelector } from "react-redux";

import { Color } from "../../utils/theme";

const ProgressHud = () => {
    const animating = useSelector(state => state.common.isLoading);

    console.log("animating ",animating);

    if (animating) {
        return (
            <View style={styles.mainContainer}>
                <View style={styles.centerContainer}>
                    <ActivityIndicator
                        style={styles.indicatorStyle}
                        animating={true}
                        color={Color.THEME}
                        size="large" />
                    <Text style={{ color: Color.THEME, marginBottom: 10, marginLeft: 10, marginRight: 10 }}>
                        {'Please Wait'}
                    </Text>
                </View>
            </View>
        );
    } else {
        return null;
    }
}

const styles = StyleSheet.create({
    mainContainer: {
        position: 'absolute',
        height: '100%',
        width: '100%',
        backgroundColor: Color.TRANSPARENT,
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 10
    },
    centerContainer: {
        backgroundColor: Color.WHITE,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5
    },
    indicatorStyle: {
        alignSelf: "center",
        marginTop: 15,
        marginBottom: 10,
    }
});

export default ProgressHud;