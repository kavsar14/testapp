import React from 'react';
import { StyleSheet, FlatList, ViewPropTypes, View } from 'react-native';
import PropTypes from 'prop-types';

import TextButton from '../TextButton';

import { Color, Font } from '../../utils/theme';
import { screenWidth } from '../../utils/globals';

const TabView = (props) => {
    const { contentStyle, reference, data, currentIndex, onPress } = props;

    const renderItems = ({ item, index }) => {
        const isSelected = index == currentIndex;
        return (
            <View style={{ width: screenWidth / 2 }}>
                <TextButton
                    style={isSelected ? styles.buttonSelectedStyle : styles.buttonStyle}
                    onPress={() => onPress(item)}
                    title={item.title}
                    titleStyle={isSelected ? styles.titleSelectedStyle : styles.titleStyle}
                />
            </View>
        )
    }

    return (
        <FlatList
            contentContainerStyle={[styles.container, contentStyle]}
            horizontal
            data={data}
            ref={reference}
            showsHorizontalScrollIndicator={false}
            renderItem={renderItems}
            keyExtractor={(_, index) => index.toString()}
        />
    )
}

TabView.propTypes = {
    contentStyle: ViewPropTypes.style,
    data: PropTypes.array,
    currentIndex: PropTypes.number,
    onPress: PropTypes.func,
    reference: PropTypes.any
};

const styles = StyleSheet.create({
    container: {
    },
    buttonSelectedStyle: {
        borderRadius: 0,
        backgroundColor: Color.WHITE,
        paddingHorizontal: 9,
        borderBottomWidth: 1,
        borderColor: Color.DEEPBLUE,
    },
    buttonStyle: {
        borderRadius: 0,
        backgroundColor: Color.WHITE,
        paddingHorizontal: 9,
        borderBottomWidth: 0.2,
        borderColor: Color.GREY,
    },
    titleSelectedStyle: {
        color: Color.TEXT_DEEPBLUE,
        fontFamily: Font.COMFORTAA_REGULAR,
        fontSize: Font.SIZE_14,
        textTransform: "capitalize"
    },
    titleStyle: {
        color: Color.GREY,
        fontFamily: Font.COMFORTAA_REGULAR,
        fontSize: Font.SIZE_14,
        textTransform: "capitalize"
    },
})

export default TabView;