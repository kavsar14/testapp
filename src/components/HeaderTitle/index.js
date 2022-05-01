import React from 'react';
import { View, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

import Label from '../Label';

import { Color, Font } from '../../utils/theme';

const HeaderTitle = (props) => {
    const { title } = props;
    return (
        <View style={styles.container}>
            <Label style={styles.title}>
                {title}
            </Label>
        </View>
    )
}

HeaderTitle.propTypes = {
    title: PropTypes.string,
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: Font.SIZE_16,
        fontFamily: Font.COMFORTAA_BOLD,
        color: Color.BLACK,
        alignSelf: 'center',
        includeFontPadding: false

    }
});

export default HeaderTitle;