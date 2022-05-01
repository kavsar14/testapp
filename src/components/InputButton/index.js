import React from 'react';
import { StyleSheet, View, TouchableOpacity, ViewPropTypes } from 'react-native';
import PropTypes from 'prop-types';

const InputButton = (props) => {
    const { style, disabled, onPress, children } = props;

    return (
        <View style={[styles.container, style]}>
            {children}
            <TouchableOpacity
                style={styles.button}
                disabled={disabled}
                onPress={onPress} />
        </View>
    );
};

InputButton.propTypes = {
    style: ViewPropTypes.style,
    disabled: PropTypes.bool,
    onPress: PropTypes.func,
};

const styles = StyleSheet.create({
    container: {
        position: 'relative',
    },
    button: {
        height: '100%',
        width: '100%',
        position: 'absolute',
        left: 0,
        top: 0,
    }
})

export default InputButton;