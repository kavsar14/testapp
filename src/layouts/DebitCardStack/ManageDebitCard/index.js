import React, { useState, useRef } from 'react'
import { View, SafeAreaView, Alert, AppState, StatusBar, Animated } from 'react-native'
import SlidingUpPanel from 'rn-sliding-up-panel'
import { BottomTabBarHeightContext } from '@react-navigation/bottom-tabs';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';

import Label from '../../../components/Label'

import styles from './styles'
import { currencyView, isIOS, screenHeight, statusHeight } from '../../../utils/globals'
import Logo from './../../../assets/images/Logo.svg';
import SlideUpPanel from '../../../components/SlideUpPanel';

const ManageDebitCard = ({ navigation, route }) => {
    const tabBarHeight = useBottomTabBarHeight();

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.content}>
                <View style={styles.header}>
                    <Label style={styles.title}>Debit Card</Label>
                    <Logo height={25} width={25} style={styles.logo} />
                </View>
                <Label style={styles.balanceTitle}>Available balance</Label>
                <View style={styles.balanceView}>
                    {currencyView()}
                    <Label style={styles.balance}>3,000</Label>
                </View>
                <SlideUpPanel
                    topMargin={screenHeight - statusHeight - tabBarHeight}
                    bottomMargin={screenHeight - 243 - tabBarHeight}
                >
                    <Label>Hello</Label>
                </SlideUpPanel>
            </View>
        </SafeAreaView>
    )
}

export default ManageDebitCard;