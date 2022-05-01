import React from 'react';
import { View, StyleSheet } from 'react-native';
import { ifIphoneX } from 'react-native-iphone-x-helper';

import IconButton from '../IconButton';

import { Color, Font } from '../../utils/theme';
import { screenWidth } from '../../utils/globals';

const LoginHeader = (props) => {
    const { onPress, iconShow } = props;
    return (
        <View style={styles.container}>
            <View style={styles.mainBox}>
                <View style={styles.boxShadow}>
                    {
                        iconShow &&
                        <IconButton
                            style={styles.button}
                            onPress={onPress}
                            iconName={'back'}
                            iconStyle={styles.backIcon}
                        />
                    }
                </View>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',

    },
    mainBox: {
        overflow: 'hidden',
        paddingBottom: 5,
        width: screenWidth
    },
    boxShadow: {
        ...ifIphoneX({
            height: 60,
        }, {
            height: 60
        }),
        backgroundColor: Color.WHITE,
        shadowColor: Color.BLACK,
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.15,
        shadowRadius: 4,
        elevation: 2,
    },

    button: {
        paddingLeft: 16
    },

    backIcon: {
        fontSize: Font.SIZE_16,
        ...ifIphoneX({
            paddingTop: 0,
        }, {
            paddingTop: 10,
        }),
    }
});

export default LoginHeader;