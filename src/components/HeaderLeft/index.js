import React from 'react';
import { StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

import IconButton from '../IconButton';

import { Color, Font } from '../../utils/theme';

const HeaderLeft = (props) => {
    const { onPress, iconName, iconStyle } = props;

    return (
        <IconButton
            style={styles.container}
            onPress={onPress}
            iconName={iconName}
            iconStyle={[styles.iconStyle, iconStyle]} />
    )
}

HeaderLeft.defaultProps = {
    iconName: 'left-arrow'
}

HeaderLeft.propTypes = {
    onPress: PropTypes.func,

    iconName: PropTypes.string,
    iconStyle: PropTypes.oneOfType([
        PropTypes.object,
        PropTypes.array
    ]),
};

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 10,
        paddingVertical: 5,
    },
    iconStyle: {
        fontSize: Font.SIZE_20,
        color: Color.BLACK
    }
});

export default HeaderLeft