import React from 'react';
import { View, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

import Label from '../Label';

import { getWeekUsagePercentage } from '../../utils/utils';
import { Color, Font } from '../../utils/theme';


const ProgressBar = (props) => {
    const { spending, limit, progressViewStyle } = props;

    return (
        <>
            <View style={[styles.progressBarTextView, progressViewStyle]}>
              <Label style={styles.description}>Debit card spending limit</Label>
              <View style={styles.limitView}>
                <Label style={styles.spending}>{`$${spending}`}</Label>
                <View style={styles.verticleLine}/>
                <Label style={styles.limit}>{`$${limit}`}</Label>
              </View>
            </View>
            <View style={styles.progressBarView}>
               <View style={[styles.bgView, { width: `${getWeekUsagePercentage(spending, limit)}%`} ]} />
            </View>
        </>
    )
}

ProgressBar.propTypes = {
    spending: PropTypes.number,
    limit: PropTypes.number,
    progressViewStyle: PropTypes.oneOfType([
        PropTypes.object,
        PropTypes.array
    ]),
};

const styles = StyleSheet.create({
    progressBarView: {
        marginHorizontal: 24,
        height: 60,
        backgroundColor: Color.LIGHT_PROGRESS_THEME,
        borderRadius: 30,
        marginTop: 6,
        height: 15,
        overflow: 'hidden'
    },
    progressBarTextView: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginHorizontal: 24
    },
    description: {
        fontSize: Font.SIZE_13,
        fontFamily: Font.COMFORTAA_MEDIUM,
        color: Color.TEXT_COLOR,
        lineHeight: 18
    },
    spending: {
        fontSize: Font.SIZE_13,
        fontFamily: Font.COMFORTAA_MEDIUM,
        color: Color.THEME,
        lineHeight: 18
    },
    limit: {
        fontSize: Font.SIZE_13,
        fontFamily: Font.COMFORTAA_MEDIUM,
        color: Color.LIGHT_TEXT_COLOR,
        lineHeight: 18
    },
    limitView: {
        flexDirection: 'row',
        height: 18
    },
    verticleLine: {
        width: 1,
        borderWidth: 1,
        height: '100%',
        borderColor: Color.LIGHT_TEXT_COLOR,
        borderRadius: 100,
        alignSelf: 'center',
        marginHorizontal: 3
    },
    bgView: {
        position: 'absolute',
        top: 0,
        left: 0,
        height: '100%',
        backgroundColor: Color.THEME,
    }
});

export default ProgressBar;