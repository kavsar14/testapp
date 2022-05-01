import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import CustomIcon from '../components/CustomIcon';
import Label from '../components/Label';

import getHeaderTitle from '../navigation/getHeaderTitle';
import { Color, Font } from '../utils/theme';
import Routes from './Routes';
import HomeScreen from '../layouts/Home';
import PaymentsScreen from '../layouts/Payments';
import ProfileScreen from '../layouts/Profile';
import CreditScreen from '../layouts/Credit';

const DebitCard = createNativeStackNavigator();
export const DebitCardStack = () => {
    return (
        <DebitCard.Navigator screenOptions={{
            headerShown: false
        }}>
            <DebitCard.Screen name={Routes.ManageDebitCard} component={HomeScreen} />
            <DebitCard.Screen name={Routes.SetupCardLimit} component={HomeScreen} />
        </DebitCard.Navigator>
    )
}

const TabBar = createBottomTabNavigator();
export const TabBarNavigation = () => {
    return (
        <TabBar.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused }) => {
                    let iconName;
                    if (route.name === Routes.Home) {
                        iconName = 'Home';
                    }
                    else if (route.name === Routes.DebitCardStack) {
                        iconName = 'Card';
                    }
                    else if (route.name === Routes.Payments) {
                        iconName = 'Payments';
                    }
                    else if (route.name === Routes.Credit) {
                        iconName = 'Credit';
                    }
                    else if (route.name === Routes.Profile) {
                        iconName = 'Account';
                    }
                    return (
                        <CustomIcon name={iconName} size={Font.SIZE_24} color={focused ? Color.THEME : Color.TAB_TEXT_COLOR } />
                    )
                },
                tabBarLabel: ({ focused }) => {
                    return (
                         <Label 
                            style={{
                                fontSize: Font.SIZE_09,
                                fontFamily: Font.COMFORTAA_REGULAR,
                                color: focused ? Color.THEME : Color.TAB_TEXT_COLOR,
                                includeFontPadding: false,
                                marginBottom: 5
                            }}
                         >
                             {getHeaderTitle(route, true)}
                        </Label>
                    )
                },
                headerShown: false,
                tabBarStyle: {
                    backgroundColor: Color.WHITE,
                    alignItems: 'center',
                    justifyContent: 'center',
                    height: 56
                },
                tabBarHideOnKeyboard: true
            })}
            >
            <TabBar.Screen name={Routes.Home} component={HomeScreen} />
            <TabBar.Screen name={Routes.DebitCardStack} component={DebitCardStack} />
            <TabBar.Screen name={Routes.Payments} component={PaymentsScreen} />
            <TabBar.Screen name={Routes.Credit} component={CreditScreen} />
            <TabBar.Screen name={Routes.Profile} component={ProfileScreen} />
        </TabBar.Navigator>
    );
}