import React, { useState } from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import PropTypes from 'prop-types';

import Label from '../Label';

import styles from './styles';
import AspireLogo from './../../assets/images/AspireLogo.svg';
import VisaLogo from './../../assets/images/VisaLogo.svg';
import HideEye from './../../assets/images/HideEye.svg';
import ShowEye from './../../assets/images/ShowEye.svg';
import { getCardChunkFourDigits } from '../../utils/utils';

const CardView = (props) => {
    const [isShowCardNumber, setIsShowCardNumber] = useState(true)
    const { name, cardNumber, expiry, cvv, hideCardViewStyle, cardContainerStyle } = props;

    return (
        <>
        <TouchableOpacity
         onPress={() => {
            setIsShowCardNumber(!isShowCardNumber);
         }}
         style={[styles.hideCardView, hideCardViewStyle]}>
            <View style={styles.hideCardInnerView}>
                {
                    isShowCardNumber ?
                    <ShowEye /> :
                    <HideEye />
                }
                
                <Label style={styles.toggleDescription}>{isShowCardNumber ? `Hide card number` : `Show card number`}</Label>
            </View>
        </TouchableOpacity>
        <View style={[styles.container, cardContainerStyle]}>
            <AspireLogo style={styles.aspireLogo}/>
            <VisaLogo style={styles.visaLogo}/>
            <Label style={styles.name}>{name}</Label>
            <View style={styles.cardNumberView}>
                <Label style={styles.number}>
                {
                isShowCardNumber ?
                getCardChunkFourDigits(cardNumber, 1) :
                `\u25CF\u25CF\u25CF\u25CF`
                }
                </Label>
                <Label style={styles.number}>
                {
                isShowCardNumber ?
                getCardChunkFourDigits(cardNumber, 2) :
                `\u25CF\u25CF\u25CF\u25CF`
                }
                </Label>
                <Label style={styles.number}>
                {
                isShowCardNumber ?
                getCardChunkFourDigits(cardNumber, 3) :
                `\u25CF\u25CF\u25CF\u25CF`
                }
                </Label>
                <Label style={styles.number}>{getCardChunkFourDigits(cardNumber, 4)}</Label>
            </View>
            <View style={styles.expiryCvvView}>
                <Label style={styles.expiry}>{`Thru: ${expiry}`}</Label>
                {
                    isShowCardNumber ?
                    <Label style={styles.cvv}>{`CVV: ${cvv}`}</Label> :
                    <View style={styles.starCvvView}>
                        <Label style={styles.cvv}>{`CVV: `}</Label>
                        <Label style={styles.star}>{`***`}</Label>
                    </View>
                }
            </View>
        </View>
        </>
    );
};

CardView.propTypes = {
    cardNumber: PropTypes.number,
    name: PropTypes.string,
    expiry: PropTypes.string,
    cvv: PropTypes.number
};

export default CardView;