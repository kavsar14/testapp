import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs'
import React, { useState, useLayoutEffect } from 'react'
import { View, SafeAreaView, StatusBar, Image, TouchableOpacity } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'

import Label from '../../../components/Label'
import SlideUpPanel from '../../../components/SlideUpPanel';
import TextButton from '../../../components/TextButton'
import CommonLimitView from '../../../components/CommonLimitView'
import Textfield from '../../../components/Textfield'
import HeaderLeft from '../../../components/HeaderLeft'

import { CardActions } from '../../../state/ducks/card'
import { screenHeight } from '../../../utils/globals'
import { Color } from '../../../utils/theme'
import styles from './styles'
import Logo from './../../../assets/images/Logo.svg';
import LimitSet from './../../../assets/images/LimitSet.svg';
import { getIntegerLimitNumber } from '../../../utils/utils'

const SetupCardLimit = ({ navigation, route }) => {
    const tabBarHeight = useBottomTabBarHeight();
    const dispatch = useDispatch();
    const storedWeeklyLimit = useSelector(state => state.card.limit);

    const [limit, setLimit] = useState('');

    useLayoutEffect(() => {
        navigation.setOptions({
            headerLeft: () => 
            <TouchableOpacity onPress={() => {
                let payload = {
                    isOnWeeklyLimit: false,
                    limit: storedWeeklyLimit
                }
                dispatch(CardActions.storeCardWeeklyLimit(payload));
                navigation.goBack()
            }}>
                <Image style={{height: 24, width: 24, tintColor: Color.WHITE}} source={require('./../../../assets/images/left-arrow.png')}/>
            </TouchableOpacity>,
            headerRight: () => <Logo />,
        })
    }, [navigation])

    const setWeeklyLimit = () => {
        let params = {
            'isOnWeeklyLimit': true,
            'limit': getIntegerLimitNumber(limit)
        }

        dispatch(CardActions.setCardWeeklyLimit(params,
            (response) => {
                console.log("set card limit response" , response);
                navigation.goBack()
            },
            (error) => {    
            }
        ))
    }

    const onChangeValue = (value) => {
        setLimit(value.toString());
    }

    return (
        <>
        <StatusBar backgroundColor={Color.BG_THEME}/>
        <SafeAreaView style={styles.container}>
            <View style={styles.content}>
                <Label style={styles.title}>Spending limit</Label>
                <SlideUpPanel
                    topMargin={screenHeight - 133 - tabBarHeight}
                    bottomMargin={screenHeight - 133 - tabBarHeight}
                >
                    <View style={styles.panelContainer}>
                        <View style={styles.instructionView}>
                        <LimitSet />
                        <Label style={styles.instruction}>Set a weekly debit card spending limit</Label>  
                        </View>
                        <Textfield 
                           value={limit}
                           onChangeText={onChangeValue}
                           returnKeyType={'done'}
                           keyboardType={'numeric'}
                        />
                        <Label style={styles.reminder}>
                            Here weekly means the last 7 days - not the calendar week
                        </Label>
                        <View style={styles.commonLimitView}>
                            <CommonLimitView
                                limit='5,000'
                                onPress={(value) => setLimit(value)}
                            />
                            <CommonLimitView
                                limit='10,000'
                                onPress={(value) => setLimit(value)}
                            />
                            <CommonLimitView
                                limit='20,000'
                                onPress={(value) => setLimit(value)}
                            />
                        </View>
                    </View>    
                </SlideUpPanel>
                <TextButton 
                    title={'Save'}
                    disabled={limit == ''}
                    onPress={() => setWeeklyLimit()}
                    style={{position: 'absolute', bottom: 20, right: 0, left: 0, alignSelf: 'center'}}
                />
            </View>
        </SafeAreaView>
        </>
    )
}

export default SetupCardLimit;