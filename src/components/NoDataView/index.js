import React from 'react';
import { View, ViewPropTypes } from 'react-native';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import Label from '../Label';

import styles from './styles';

const NoDataView = (props) => {
    const { style, title } = props;

    const isLoading = useSelector(state => state.common.isLoading);

    if (isLoading) {
        return <></>
    } else {
        return (
            <View style={[styles.container, style]}>
                <Label style={styles.titleText}>{title || 'No Data Found'}</Label>
            </View>
        )
    }
}

NoDataView.propTypes = {
    style: ViewPropTypes.style,
    title: PropTypes.string,
}

export default NoDataView;
