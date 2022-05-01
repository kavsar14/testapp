import React from 'react';
import { StyleSheet, View, ViewPropTypes } from 'react-native';

import { Color } from '../../utils/theme';
import { screenWidth } from '../../utils/globals';

const Divider = (props) => {
    const { style } = props;

    let buttonStyle = [];
    buttonStyle.push(styles.container);
    buttonStyle.push(style);

    return (
        <View style={buttonStyle} />
    );
};

Divider.propTypes = {
    style: ViewPropTypes.style,
};

const styles = StyleSheet.create({
    container: {
        width: screenWidth,
        height: 1,
        backgroundColor: Color.BORDER_LIGHT,
        // marginBottom: 24,
    },
});

export default Divider;