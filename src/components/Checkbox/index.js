import React, { useState, useEffect } from 'react';
import { StyleSheet, TouchableOpacity, ViewPropTypes, Text } from 'react-native';
import PropTypes from 'prop-types';

import Label from '../Label';

import Checked from '../../assets/images/checked1.svg';
import Uncheck from '../../assets/images/un_checked.svg';
import { Color, Font } from '../../utils/theme';

const Checkbox = (props) => {
    const { style, isChecked, titleStyle, title, onPress, disabled } = props;

    const [checked, setChecked] = useState(false);

    useEffect(() => {
        setChecked(isChecked ? isChecked : false);
    }, [isChecked])

    return (
        <TouchableOpacity
            style={[styles.button, style]}
            disabled={disabled}
            onPress={() => {
                setChecked(!checked)
                onPress(!checked)
            }}>
            {checked ? <Checked style={{ width: 10 }} /> : <Uncheck style={{ width: 10 }} />}
            <Text style={[styles.titleStyle, titleStyle]}>
                {title}
            </Text>
        </TouchableOpacity>
    )
}

Checkbox.propTypes = {
    style: ViewPropTypes.style,
    onPress: PropTypes.func,
    disabled: PropTypes.bool,

    isChecked: PropTypes.bool,

    titleStyle: PropTypes.oneOfType([
        PropTypes.object,
        PropTypes.array
    ]),
    title: PropTypes.string,
};

const styles = StyleSheet.create({
    button: {
        flexDirection: 'row',
        alignItems: 'center',
        //backgroundColor: "red",
        justifyContent: "center"
    },
    titleStyle: {
        color: Color.GREY,
        fontFamily: Font.COMFORTAA_REGULAR
    }
})

export default Checkbox;