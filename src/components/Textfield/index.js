import React from 'react';
import { View, StyleSheet, TextInput, ViewPropTypes, Platform } from 'react-native';
import PropTypes from 'prop-types';
import _ from 'lodash';

import Label from '../Label';
import IconButton from '../IconButton';

import { Color, Font } from '../../utils/theme';

const Textfield = (props) => {
    const { style } = props;
    const { inputContainerStyle, inputStyle, placeholder, disabled, defaultValue, placeholderTextColor, iconStyle, value, editable, secureTextEntry, autoCorrect, autoCapitalize, multiline, textAlignVertical, textAlign, numberOfLines, maxLength, keyboardType, returnKeyType, onChangeText, onFocus, onBlur, onSubmitEditing, inputAccessoryViewID, reference, autoFocus } = props;
    const { onPressIcon, disabledIcon, iconName } = props;
    const { errorMessage } = props;
    // const [trimValue, setValue] = useState(value)

    return (
        <View style={style}>
            {!_.isEmpty(errorMessage) &&
                <Label style={styles.errorTextStyle}>
                    {errorMessage}
                </Label>
            }
            <View style={styles.inputContainer}>
                <View style={[styles.textInputContainer,
                { borderColor: !_.isEmpty(errorMessage) ? Color.RED : Color.SECONDARY_OP_2 }, inputContainerStyle]}>
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
                    {!_.isEmpty(iconName) &&
                        <IconButton
                            style={styles.button}
                            onPress={onPressIcon}
                            disabled={disabledIcon}
                            iconName={iconName}
                            iconStyle={[styles.iconStyle, iconStyle]} />
                    }
                </View>
            </View>
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

// const inputHeight = 48;

const styles = StyleSheet.create({
    inputContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    textInputContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderWidth: 0,
        borderBottomWidth: 1,
        borderRadius: 0,
        borderBottomColor: Color.BORDER_GREY,
    },
    textInput: {
        flex: 1,
        fontFamily: Font.COMFORTAA_REGULAR,
        fontSize: Font.SIZE_14,
        color: Color.BLACK,
        ...Platform.select({
            ios: {
                marginHorizontal: 16,
                marginLeft: 0,
                marginBottom: 16
            },
            android: {
                marginHorizontal: 0,
                marginBottom: 0,
                marginLeft: 0,
                paddingLeft: 0
            },
        }),
    },
    button: {
        justifyContent: 'center',
        alignItems: 'center',
        // width: 40
    },
    iconStyle: {
        fontSize: Font.SIZE_20,
        color: Color.GREY,
        top: Platform.OS === 'ios' ? -8 : 0,
        paddingHorizontal: 10,
    },
    errorTextStyle: {
        color: Color.RED,
        fontFamily: Font.COMFORTAA_REGULAR,
        fontSize: Font.SIZE_16,
        paddingBottom: Platform.OS === 'ios' ? 16 : 0,
    },
});

export default Textfield;