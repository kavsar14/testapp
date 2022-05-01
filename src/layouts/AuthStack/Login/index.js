import React, { useState, useRef } from 'react'
import { View, SafeAreaView, Alert, AppState } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import Label from '../../../components/Label'

const Login = ({ navigation, route }) => {

    return (

        <SafeAreaView style={styles.container}>
            <KeyboardAwareScrollView
                contentContainerStyle={styles.content}
                style={styles.scrollView}>

                <Label>
                     Hello login
                </Label>

            </KeyboardAwareScrollView>

        </SafeAreaView>

    )
}

export default Login;