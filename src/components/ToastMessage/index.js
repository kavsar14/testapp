import React, { useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import Label from '../Label';

import { CommonAction } from '../../state/ducks/common';
import { isIOS, screenWidth } from '../../utils/globals';
import { Color, Font } from '../../utils/theme';

const ToastMessage = () => {
    const dispatch = useDispatch();

    const visible = useSelector(state => state.common.visible);
    const message = useSelector(state => state.common.message);
    const success = useSelector(state => state.common.success);

    useEffect(() => {
        if (visible) {
            setTimeout(() => {
                dispatch(CommonAction.hideToast());
            }, 3000);
        }
    }, [visible])

    if (visible) {
        return (
            <View style={styles.mainView}>
                <View style={success ? styles.containersuccess : styles.containerinfo}>
                    <Label style={styles.message}>
                        {message}
                    </Label>
                </View>
            </View>
        )
    } else {
        return null
    }
}

const styles = StyleSheet.create({
    mainView: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        top: isIOS() ? 50 : 30,
        left: 0,
    },
    containersuccess: {
        flexDirection: 'row',
        backgroundColor: Color.THEME,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
        elevation: 3,
        borderRadius: 50,
        paddingHorizontal: 12,
        paddingVertical: 10,
    },
    containerinfo: {
        flexDirection: 'row',
        backgroundColor: Color.RED,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
        elevation: 3,
        borderRadius: 50,
        paddingHorizontal: 12,
        paddingVertical: 10,
    },
    message: {
        fontSize: Font.SIZE_14,
        fontFamily: Font.COMFORTAA_REGULAR,
        maxWidth: screenWidth - 115,
        color: Color.WHITE
    }
});

export default ToastMessage;