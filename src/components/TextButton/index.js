import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';

import Label from '../Label';

import { Color, Font } from '../../utils/theme';

const TextButton = (props) => {
    const { style, activeOpacity, disabled, onPress, titleStyle, title } = props;

    return (
        <TouchableOpacity
            style={[styles.buttonStyle,
            { backgroundColor: disabled ? Color.DISABLE_COLOR : Color.THEME },
                style]}
            activeOpacity={activeOpacity}
            disabled={disabled}
            onPress={onPress}>
            <Label
                style={[styles.textStyle,
                { color: disabled ? Color.WHITE : Color.WHITE },
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
        height: 56,
        borderRadius: 30,
        backgroundColor: Color.BLACK,
        marginHorizontal: 57
    },
    textStyle: {
        fontFamily: Font.COMFORTAA_SEMIBOLD,
        color: Color.TEXT_WHITE,
        fontSize: Font.SIZE_16,
        includeFontPadding: false
    }
});

export default TextButton;