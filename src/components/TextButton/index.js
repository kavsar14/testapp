import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';

import Label from '../Label';
import IconButton from '../IconButton';

import { Color, Font } from '../../utils/theme';

const TextButton = (props) => {
    const { style, activeOpacity, disabled, onPress, titleStyle, title, children, iconShow, iconName } = props;

    let buttonStyle = [];
    buttonStyle.push(styles.button);
    buttonStyle.push(style);

    let textStyle = [];
    textStyle.push(styles.title);
    textStyle.push(titleStyle);

    return (
        <TouchableOpacity
            style={[styles.buttonStyle,
            { backgroundColor: disabled ? Color.GREY : Color.DEEPBLUE },
                style]}
            activeOpacity={activeOpacity}
            disabled={disabled}
            onPress={onPress}>
            {iconShow &&
                <IconButton
                    disabled={disabled}
                    onPress={onPress}
                    style={styles.button}
                    iconName={iconName}
                    iconStyle={styles.iconCss} />
            }
            <Label
                style={[styles.textStyle,
                { color: disabled ? Color.TEXT_DEEPBLUE : Color.WHITE },
                    titleStyle]}>
                {title}
            </Label>
        </TouchableOpacity>
    );
};

TextButton.propTypes = {
    style: PropTypes.oneOfType([
        PropTypes.object,
        PropTypes.array
    ]),
    activeOpacity: PropTypes.number,
    disabled: PropTypes.bool,
    onPress: PropTypes.func,

    title: PropTypes.string,
    titleStyle: PropTypes.oneOfType([
        PropTypes.object,
        PropTypes.array
    ]),
};

const styles = StyleSheet.create({
    buttonStyle: {
        alignItems: 'center',
        justifyContent: 'center',
        height: 47,
        borderRadius: 10,
        backgroundColor: Color.BLACK,

    },
    textStyle: {
        fontFamily: Font.COMFORTAA_MEDIUM,
        color: Color.TEXT_WHITE,
        fontSize: Font.SIZE_14,
        includeFontPadding: false
    },

    iconCss: {
        color: Color.WHITE,
        fontSize: Font.SIZE_20,
        paddingRight: 10
    }
});

export default TextButton;