import React from 'react';
import { View, StyleSheet, TextInput, ViewPropTypes } from 'react-native';
import PropTypes from 'prop-types';

import { Color, Font } from '../../utils/theme';
import { currencyView } from '../../utils/globals';

const Textfield = (props) => {
    const { inputContainerStyle, inputStyle, placeholder, disabled, defaultValue, placeholderTextColor, value, editable, secureTextEntry, autoCorrect, autoCapitalize, multiline, textAlignVertical, textAlign, numberOfLines, maxLength, keyboardType, returnKeyType, onChangeText, onFocus, onBlur, onSubmitEditing, inputAccessoryViewID, reference, autoFocus } = props;

    return (
        
                <View style={[styles.textInputContainer, inputContainerStyle]}>
                    {
                        currencyView()
                    }
                    <TextInput
                        defaultValue={defaultValue}
                        disabled={disabled}
                        style={[styles.textInput, inputStyle]}
                        placeholder={placeholder}
                        placeholderTextColor={placeholderTextColor}
                        value={value}
                        editable={editable}
                        secureTextEntry={secureTextEntry}
                        autoCorrect={autoCorrect}
                        autoCapitalize={autoCapitalize}
                        multiline={multiline}
                        numberOfLines={numberOfLines}
                        textAlignVertical={textAlignVertical}
                        textAlign={textAlign}
                        maxLength={maxLength}
                        keyboardType={keyboardType}
                        returnKeyType={keyboardType == 'number-pad' ? 'done' : returnKeyType}
                        onChangeText={(value) => {
                            value = value.trimStart()
                            onChangeText(value)
                        }}
                        onFocus={onFocus}
                        onBlur={e => onBlur && onBlur(e)}
                        onSubmitEditing={onSubmitEditing}
                        inputAccessoryViewID={inputAccessoryViewID}
                        ref={reference}
                        autoFocus={autoFocus}
                    />
                </View>
       
    )
}

Textfield.defaultProps = {
    placeholderTextColor: Color.GREY,
    editable: true,
    secureTextEntry: false,
    autoCorrect: true,
    autoCapitalize: 'none',
    multiline: false,
    textAlignVertical: 'center',
    disabledIcon: true,
    errorMessage: '',
    autoFocus: false
};

Textfield.propTypes = {
    style: ViewPropTypes.style,

    inputContainerStyle: ViewPropTypes.style,

    inputStyle: PropTypes.oneOfType([
        PropTypes.object,
        PropTypes.array
    ]),
    placeholder: PropTypes.string,
    placeholderTextColor: PropTypes.string,
    value: PropTypes.string,
    editable: PropTypes.bool,
    secureTextEntry: PropTypes.bool,
    autoCorrect: PropTypes.bool,
    autoCapitalize: PropTypes.string,
    multiline: PropTypes.bool,
    textAlignVertical: PropTypes.string,
    textAlign: PropTypes.string,
    numberOfLines: PropTypes.number,
    maxLength: PropTypes.number,
    keyboardType: PropTypes.string,
    returnKeyType: PropTypes.string,
    onChangeText: PropTypes.func,
    onFocus: PropTypes.func,
    onBlur: PropTypes.func,
    onSubmitEditing: PropTypes.func,
    inputAccessoryViewID: PropTypes.string,
    errorMessage: PropTypes.string,
    reference: PropTypes.any,
    onPressIcon: PropTypes.func,
    disabledIcon: PropTypes.bool,

    iconStyle: PropTypes.oneOfType([
        PropTypes.object,
        PropTypes.array
    ]),
    iconName: PropTypes.string,
    autoFocus: PropTypes.bool
};

const styles = StyleSheet.create({
    textInputContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        borderWidth: 0,
        borderBottomWidth: 1,
        borderRadius: 0,
        borderBottomColor: Color.BORDER_COLOR,
    },
    textInput: {
        width: '85%',
        fontFamily: Font.COMFORTAA_REGULAR,
        fontSize: Font.SIZE_14,
        color: Color.BLACK,
    },
    button: {
        justifyContent: 'center',
        alignItems: 'center',
    }
});

export default Textfield;