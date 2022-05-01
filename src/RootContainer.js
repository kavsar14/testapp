import React, { useRef } from 'react';
import { TextInput, Text, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import ProgressHud from './components/ProgressHud';
import ToastMessage from "./../src/components/ToastMessage";

import { TabBarNavigation } from './navigation';

TextInput.defaultProps = { ...(TextInput.defaultProps || {}), allowFontScaling: false };
Text.defaultProps = { ...(Text.defaultProps || {}), allowFontScaling: false };
Text.defaultProps.allowFontScaling = false

const RootContainer = () => {
    const navigationRef = useRef();

    return (
        <>
            <NavigationContainer ref={navigationRef}>
                <TabBarNavigation />
            </NavigationContainer>
            <ToastMessage />
            <ProgressHud />
        </>
    )
}

export default RootContainer;
