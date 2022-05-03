import React from 'react';
import { StyleSheet, View } from 'react-native';
import PropTypes from 'prop-types';
import { Switch } from 'react-native-switch';

import Label from '../Label';

import { Color, Font } from '../../utils/theme';
import { getIconView } from '../../utils/utils';

const DebitCardActionView = (props) => {
    const { actionViewStyle, title, description, iconName , isSwitch, isEnabled, onPressSwitch } = props;

    return (
        <View style={[styles.actionView, actionViewStyle]}>
            {getIconView(iconName)}
            <View style={[styles.mainView, {width: isSwitch ? '67%' : '85%'}]}>
              <Label style={styles.title}>{title}</Label>
              <Label style={styles.description}>{description}</Label>
            </View>
            {
                isSwitch && 
                <View style={styles.switch}>
                    <Switch
                        trackColor={{ false: Color.TRANSPARENT, true: Color.THEME }}
                        onValueChange={onPressSwitch}
                        value={isEnabled}
                        activeText={''}
                        inActiveText={''}
                        backgroundActive={Color.THEME}
                        backgroundInactive={Color.INPUT_LIGHT}
                        circleSize={18}
                        barHeight={24}
                        circleBorderWidth={1}
                        outerCircleStyle={{}}
                        switchLeftPx={2}
                        switchWidthMultiplier={2.5}
                        switchRightPx={2}
                        innerCircleStyle={{ alignItems: "center", justifyContent: "center", backgroundColor: Color.WHITE, borderColor: Color.INPUT_LIGHT }}
                    />
                </View>
            }
        </View>
    );
};

DebitCardActionView.propTypes = {
    actionViewStyle: PropTypes.oneOfType([
        PropTypes.object,
        PropTypes.array
    ]),
    iconName: PropTypes.string, 
    isSwitch: PropTypes.bool, 
    isEnabled: PropTypes.bool, 
    onPressSwitch: PropTypes.func,
    title: PropTypes.string,
    description: PropTypes.string
};

const styles = StyleSheet.create({
    actionView: {
        flexDirection: 'row',
        backgroundColor: Color.WHITE,
        marginHorizontal: 24
    },
    mainView: {
        flexDirection: 'column',
        marginLeft: 12,
        width: '85%'
    },
    title: {
        fontFamily: Font.COMFORTAA_MEDIUM,
        color: Color.TITLE_TEXT_COLOR,
        fontSize: Font.SIZE_14,
        lineHeight: 19
    },
    description: {
        fontFamily: Font.COMFORTAA_REGULAR,
        color: Color.LIGHT_TEXT_COLOR,
        fontSize: Font.SIZE_13,
        lineHeight: 18,
        marginTop: 2
    },
    switch: {
        position: 'absolute',
        right: 0,
        top: 2
    },
});

export default DebitCardActionView;