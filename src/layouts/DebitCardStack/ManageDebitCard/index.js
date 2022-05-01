import React, { useState, useRef } from 'react'
import { View, SafeAreaView, Alert, AppState, StatusBar, Animated } from 'react-native'
import SlidingUpPanel from 'rn-sliding-up-panel'
import { BottomTabBarHeightContext } from '@react-navigation/bottom-tabs';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';
import { Switch } from 'react-native-switch';

import Label from '../../../components/Label'

import styles from './styles'
import { currencyView, isIOS, screenHeight, statusHeight } from '../../../utils/globals'
import Logo from './../../../assets/images/Logo.svg';
import SlideUpPanel from '../../../components/SlideUpPanel';
import { Color } from '../../../utils/theme';

const ManageDebitCard = ({ navigation, route }) => {
    const tabBarHeight = useBottomTabBarHeight();

    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);

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
                    <Switch
                        trackColor={{ false: Color.TRANSPARENT, true: Color.THEME }}
                        onValueChange={toggleSwitch}
                        value={isEnabled}
                        activeText={''}
                        inActiveText={''}
                        backgroundActive={Color.THEME}
                        backgroundInactive={Color.INPUT_LIGHT}
                        circleSize={18}
                        barHeight={24}
                        circleBorderWidth={1}
                        outerCircleStyle={{}}
                        switchLeftPx={2}
                        switchWidthMultiplier={2.5}
                        switchRightPx={2}
                        innerCircleStyle={{ alignItems: "center", justifyContent: "center", backgroundColor: Color.WHITE, borderColor: Color.INPUT_LIGHT }}
                    />
                </SlideUpPanel>
            </View>
        </SafeAreaView>
    )
}

export default ManageDebitCard;