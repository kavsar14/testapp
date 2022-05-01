import React from "react"
import { Dimensions, Image, View } from "react-native"
import PropTypes from 'prop-types';

import ModalDropdown from '../ModalDropdown/ModalDropdown';
 
import styles from "./styles"
const { width} = Dimensions.get("window");
const screenWidth = width;

const ORDropdown = React.forwardRef((props, ref) => {
    const {
        data,
        container,
        width,
        height,
        label,
        style,
        textStyle,
        dropdownStyle,
        iconStyle,
        onChangeText,
        disabled,
        defaultValue
    } = props;

    let itemsCount = data.length;
    return (
        <View style={[styles.container, { width: width, height: height }, container]} >
            {/* {
                label ?
                    <ORText
                        title={label}
                        mainStyle={[{ width: screenWidth - 70 }, styles.labeltxt, GStyle.greyTxtfieldtitle]}
                    /> :
                    null
            } */}
            <ModalDropdown
                ref={ref}
                style={[styles.inputDropdown, style]}
                options={data}
                defaultValue={defaultValue}
                textStyle={styles.textStyle, textStyle}
                dropdownStyle={[{ backgroundColor: '#fff', width: screenWidth - 30, height: 200 }, dropdownStyle]}
                dropdownTextStyle={styles.dropdownTextStyle}
                showsVerticalScrollIndicator={itemsCount > 3 ? true : false}
                renderRightComponent={() => (
                    <Image source={require('../../assets/images/downArrow.png')} style={[styles.iconStyle, iconStyle]} />
                )}
                onSelect={(idx, value) => onChangeText(value)}
                disabled={disabled}
                renderButtonProps={{
                    style: {
                        flex: 1,
                        alignSelf: 'stretch',
                        justifyContent: 'space-around',
                    }
                }}
            >
            </ModalDropdown>
        </View>
    )
});

ORDropdown.defaultProps = {
    label: ""
}

ORDropdown.propTypes = {
    data: PropTypes.array,
    width: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ]),
    height: PropTypes.number,
    container: PropTypes.object,
    label: PropTypes.string,
    style: PropTypes.object,
    default: PropTypes.string,
    textStyle: PropTypes.object,
    dropdownStyle: PropTypes.object,
    iconStyle: PropTypes.object,
    onChangeText: PropTypes.func,
    disabled: PropTypes.bool
};

export default ORDropdown;