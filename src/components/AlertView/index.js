import React from "react";
import { StyleSheet, Modal, View } from "react-native";
import PropTypes from 'prop-types';

import Label from '../Label';
import TextButton from '../TextButton';
import IconButton from '../IconButton';

import { Color, Font } from '../../utils/theme';

const AlertView = (props) => {
    const { iconCloseStyle, visible, alertText, confirmText, onConfirmPress, cancelText, onCancelPress, iconName, iconStyle, onPressIcon, customBg, newLabel, alertNewText, alertTextStyle, showClose, alertTextNew, isIconShow = true, cancelButtonStyle, confirmButtonStyle, confirmButtonTextStyle, cancelButtonTextStyle } = props;

    return (
        <Modal
            animationType='fade'
            transparent={true}
            visible={visible}>
            <View style={styles.container}>
                <View style={styles.centerContainer}>
                    {showClose &&
                        <IconButton
                            style={styles.buttonClose}
                            onPress={onPressIcon}
                            iconName={'close'}
                            iconStyle={[styles.iconCloseStyle, iconCloseStyle]} />
                    }
                    {
                        isIconShow && 
                        <View style={[styles.iconBg, customBg]}>
                            <IconButton
                                style={styles.buttonIcon}
                                onPress={onPressIcon}
                                iconName={iconName}
                                iconStyle={[styles.iconStyle, iconStyle]} />
                        </View>
                    }
                    <Label style={[styles.alertText, alertTextStyle]}>{alertText}</Label>
                    {newLabel && <Label style={[styles.alertNewText, alertNewText]}>{alertTextNew}</Label>}
                    <View style={styles.bottonView}>
                        <TextButton
                            style={[styles.button, { backgroundColor: Color.DEEPBLUE, borderColor: Color.TRANSPARENT },cancelButtonStyle]}
                            titleStyle={[styles.buttonText, { color: Color.WHITE }, cancelButtonTextStyle]}
                            title={cancelText}
                            onPress={onCancelPress}
                        />
                        <TextButton
                            style={[styles.button, { borderColor: Color.RED }, confirmButtonStyle]}
                            titleStyle={[styles.buttonText, confirmButtonTextStyle]}
                            title={confirmText}
                            onPress={onConfirmPress}
                        />
                    </View>
                </View>
            </View>
        </Modal>
    )
}

AlertView.defaultProps = {
    confirmText: "Confirm",
    cancelText: "No"
};

AlertView.propTypes = {
    visible: PropTypes.bool,

    alertText: PropTypes.string,

    confirmText: PropTypes.string,
    onConfirmPress: PropTypes.func,

    cancelText: PropTypes.string,
    onCancelPress: PropTypes.func,
};

const centerViewWidth = 375;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Color.OVERLAY,
    },
    centerContainer: {
        width: centerViewWidth,
        borderRadius: 15,
        backgroundColor: Color.WHITE,
        paddingVertical: 24,
        paddingHorizontal: 46,
        alignItems: 'center',
    },
    alertText: {
        fontFamily: Font.COMFORTAA_BOLD,
        fontSize: Font.SIZE_14,
        lineHeight: 22,
        textAlign: 'center',
        paddingBottom: 60
    },
    bottonView: {
        flexDirection: 'column',
        paddingTop: 1,
        backgroundColor: Color.TRANSPARENT,
        marginBottom: 16
    },
    button: {
        width: 310,
        height: 47,
        borderRadius: 10,
        backgroundColor: Color.TRANSPARENT,
        borderWidth: 1,
        marginBottom: 16
    },
    buttonText: {
        fontFamily: Font.COMFORTAA_BOLD,
        fontSize: Font.SIZE_14,
        color: Color.RED
    },
    iconBg: {
        width: 80,
        height: 80,
        backgroundColor: Color.RED,
        justifyContent: 'center',
        borderRadius: 40,
        marginBottom: 24,
    },
    iconStyle: {
        fontSize: Font.SIZE_32,
        color: Color.WHITE,
    },
    buttonIcon: {
        alignSelf: 'center',
    },
    buttonClose: {
        top: 24,
        right: 14,
        position: 'absolute'
    },
    iconCloseStyle: {
        color: Color.TEXT_GREY_LIGHT,
        fontSize: Font.SIZE_14,
        padding: 10
    },
    alertNewText: {
        fontSize: Font.SIZE_12,
        color: Color.TEXT_GREY_LIGHT
    }
});

export default AlertView;
