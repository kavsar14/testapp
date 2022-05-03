import React, { useEffect } from 'react'
import { View, SafeAreaView, StatusBar } from 'react-native'
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';
import { useDispatch, useSelector } from 'react-redux';

import Label from '../../../components/Label'
import SlideUpPanel from '../../../components/SlideUpPanel';
import CardView from '../../../components/CardView';
import ProgressBar from '../../../components/ProgressBar';
import DebitCardActionView from '../../../components/DebitCardActionView';

import styles from './styles'
import { currencyView, screenHeight, statusHeight } from '../../../utils/globals'
import Logo from './../../../assets/images/Logo.svg';
import { Color } from '../../../utils/theme';
import { CardActions } from '../../../state/ducks/card';
import Routes from '../../../navigation/Routes';

const ManageDebitCard = ({ navigation, route }) => {
    const tabBarHeight = useBottomTabBarHeight();
    const dispatch = useDispatch();
    const isEnabled = useSelector(state => state.card.isOnWeeklyLimit);
    const weeklyLimit = useSelector(state => state.card.limit);

    useEffect(() => {
        getWeeklyLimit()
    }, [])

    const getWeeklyLimit = () => {
        dispatch(CardActions.getCardWeeklyLimit((response) => {
                console.log("response ", response);
            },
            (error) => {    
            }
        ))
    }

    const setOffWeeklyLimit = () => {
        let params = {
            'isOnWeeklyLimit': false,
            'limit': weeklyLimit
        }

        dispatch(CardActions.setCardWeeklyLimit(params,
            (response) => {
                 console.log("response ", response);
            },
            (error) => {    
            }
        ))
    }

    const onToggleLimitSwitch = () => {
        if(isEnabled) {
            setOffWeeklyLimit();
        } else {
            let payload = {
                isOnWeeklyLimit: true,
                limit: weeklyLimit
            }
            dispatch(CardActions.storeCardWeeklyLimit(payload));
            navigation.navigate(Routes.SetupCardLimit);
        }
    }

    return (
        <>
        <StatusBar backgroundColor={Color.BG_THEME}/>
        <SafeAreaView style={styles.container}>
            <View style={styles.content}>
                <Logo height={25} width={25} style={styles.logo} />
                <Label style={styles.title}>Debit Card</Label>
                <Label style={styles.balanceTitle}>Available balance</Label>
                <View style={styles.balanceView}>
                    {currencyView()}
                    <Label style={styles.balance}>3,000</Label>
                </View>
                <SlideUpPanel
                    topMargin={screenHeight - statusHeight - tabBarHeight}
                    bottomMargin={screenHeight - 243 - tabBarHeight}
                >
                    <CardView 
                     name={'Mark Henry'} 
                     cardNumber={5647341124132020} 
                     expiry={'12/20'} 
                     cvv={456}
                     cardContainerStyle={{marginTop: -75}}
                     hideCardViewStyle={{top: -107}}
                     />

                     {
                        isEnabled && 
                         <ProgressBar
                            spending={350}
                            limit={weeklyLimit}
                            progressViewStyle={{marginTop: 25}}
                        />
                     }

                     <DebitCardActionView
                      actionViewStyle={styles.actionViewStyle}
                      iconName={'insight'}
                      title={'Top-up account'}
                      description={'Deposit money to your account to use with card'}
                      isSwitch={false} 
                     />

                    <DebitCardActionView
                      actionViewStyle={styles.actionViewStyle}
                      iconName={'limit'}
                      title={'Weekly spending limit'}
                      description={'You haven’t set any spending limit on card'}
                      isSwitch={true} 
                      isEnabled={isEnabled}
                      onPressSwitch={() => onToggleLimitSwitch()}
                     />

                    <DebitCardActionView
                      actionViewStyle={styles.actionViewStyle}
                      iconName={'freezecard'}
                      title={'Freeze card'}
                      description={'Your debit card is currently active'}
                      isSwitch={true}
                      isEnabled={false} 
                     />

                    <DebitCardActionView
                      actionViewStyle={styles.actionViewStyle}
                      iconName={'getnewcard'}
                      title={'Get a new card'}
                      description={'This deactivates your current debit card'}
                      isSwitch={false} 
                     />

                    <DebitCardActionView
                      actionViewStyle={styles.actionViewStyle}
                      iconName={'deactivate'}
                      title={'Deactivated cards'}
                      description={'Your previously deactivated cards'}
                      isSwitch={false} 
                     />

                </SlideUpPanel>
            </View>
        </SafeAreaView>
        </>
    )
}

export default ManageDebitCard;