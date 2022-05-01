import React from 'react';
import { Dimensions, Platform, NativeModules, View, StyleSheet } from 'react-native';
import _ from 'lodash';
import Label from '../components/Label';
import { Color, Font } from './theme';

const { width, height } = Dimensions.get('window');
export const screenWidth = width;
export const screenHeight = height;

export const isIOS = () => {
    return Platform.OS === 'ios' ? true : false
}

const { StatusBarManager } = NativeModules;
export const statusHeight = StatusBarManager.HEIGHT;
const androidHeaderHeight = 56;
const iosHeaderHeight = statusHeight + 44;
export const headerHeight = isIOS() ? iosHeaderHeight : androidHeaderHeight;

// const statusBarHeight = StatusBar.currentHeight || 24;
//     const headerHeight = 56;
//     const bottomTabHeight = 80;

export const Globals = {
    kUserToken: ''
};

export const currencyView = () => {
    return (
        <View style={styles.currencyView}>
            <Label style={styles.currency}>
                S$
            </Label>
        </View>
    )
}

const styles = StyleSheet.create({
    currencyView: {
        height: 22,
        width: 40,
        backgroundColor: Color.THEME,
        justifyContent: 'center',
        alignItems: 'center'
    },
    currency: {
        fontSize: Font.SIZE_12,
        fontFamily: Font.COMFORTAA_BOLD,
        color: Color.WHITE
    },
});