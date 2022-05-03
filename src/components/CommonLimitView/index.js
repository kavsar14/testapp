import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';

import Label from '../Label';

import { Color, Font } from '../../utils/theme';
import { Globals } from '../../utils/globals';

const CommonLimitView = (props) => {
    const { limit, onPress } = props;

    return (
        <TouchableOpacity
            style={styles.buttonStyle}
            onPress={() => onPress(limit)}>
            <Label
                style={styles.textStyle}>
                {`${Globals.currency} ${limit}`}
            </Label>
        </TouchableOpacity>
    );
};

CommonLimitView.propTypes = {
    onPress: PropTypes.func,
    limit: PropTypes.string,
};

const styles = StyleSheet.create({
    buttonStyle: {
        alignItems: 'center',
        justifyContent: 'center',
        height: 40,
        borderRadius: 4,
        backgroundColor: Color.LIGHT_THEME,
        width: '30%'
    },
    textStyle: {
        fontFamily: Font.COMFORTAA_SEMIBOLD,
        color: Color.THEME,
        fontSize: Font.SIZE_12,
        includeFontPadding: false
    }
});

export default CommonLimitView;