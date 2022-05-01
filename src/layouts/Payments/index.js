import React, { useState, useRef } from 'react'
import { View, SafeAreaView, Alert, AppState } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import Label from '../../components/Label'
import styles from './styles'

const Payments = ({ navigation, route }) => {
    return (
        <SafeAreaView style={styles.container}>
            <View
                style={styles.content}>

                <Label>
                     Payments Screen
                </Label>

            </View>

        </SafeAreaView>
    )
}

export default Payments;