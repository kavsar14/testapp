import React from 'react';
import { StyleSheet, View, TouchableOpacity, ScrollView, ViewPropTypes } from 'react-native';
import PropTypes from 'prop-types';

import Label from '../Label';

import { Color, Font } from '../../utils/theme';
import ErrorMessage from '../../utils/ErrorMessage';

const DropDownList = (props) => {
    const { style, onValueChange, listData, customContainerStyle } = props;

    let containerStyle = [];
    containerStyle.push(styles.container);
    containerStyle.push(style);

    console.log("0 item ",listData[0].displayName);

    return (
        <View style={[styles.container, customContainerStyle]}>
            <ScrollView>
                {listData.length ?
                    listData.map((item, index) => {
                        return (
                                <TouchableOpacity
                                    key={index.toString()}
                                    onPress={() => onValueChange(item)}>
                                    <Label style={styles.itemText}>{item.displayName}</Label>
                                </TouchableOpacity>
                        )
                    })
                    :
                    <Label style={styles.noDataText}>{ErrorMessage.NO_DATA}</Label>
                }
            </ScrollView>
        </View>
    )
}

DropDownList.propTypes = {
    style: ViewPropTypes.style,
    onValueChange: PropTypes.func,
    listData: PropTypes.array,
    customContainerStyle: PropTypes.oneOfType([
        PropTypes.array,
        PropTypes.object
    ]),
};

const styles = StyleSheet.create({
    container: {
        // position: 'absolute',
        width: '100%',
        top: 5,
        left: 0,
        paddingVertical: 7,
        paddingHorizontal: 14,
        backgroundColor: Color.WHITE,
        borderRadius: 10,
        maxHeight: 200,
        zIndex: 10,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 1, },
        shadowOpacity: 0.15,
        shadowRadius: 2,
        elevation: 24,
    },
    itemText: {
        fontFamily: Font.COMFORTAA_REGULAR,
        fontSize: Font.SIZE_14,
        color: Color.TXTGREY,
        paddingVertical: 7,
        // paddingHorizontal: 15,
    },
    noDataText: {
        fontSize: Font.SIZE_14,
        color: Color.BLACK,
        paddingVertical: 2,
        paddingHorizontal: 15,
        textAlign: 'center'
    }
})

export default DropDownList;