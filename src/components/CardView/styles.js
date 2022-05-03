import { StyleSheet } from 'react-native';

import { Color, Font } from '../../utils/theme';

const styles = StyleSheet.create({
    container: {
        height: 220,
        marginHorizontal: 24,
        borderRadius: 10,
        backgroundColor: Color.THEME
    },
    aspireLogo: {
        position: 'absolute', 
        right: 24, 
        top: 24
    },
    visaLogo: {
        position: 'absolute', 
        right: 24, 
        bottom: 24
    },
    number: {
        fontSize: Font.SIZE_14,
        fontFamily: Font.COMFORTAA_SEMIBOLD,
        color: Color.WHITE,
        marginLeft: 24
    },
    expiry: {
        fontSize: Font.SIZE_13,
        fontFamily: Font.COMFORTAA_SEMIBOLD,
        color: Color.WHITE,
    },
    cvv: {
        fontSize: Font.SIZE_13,
        fontFamily: Font.COMFORTAA_SEMIBOLD,
        color: Color.WHITE,
        marginLeft: 32
    },
    starCvvView: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    star: {
        fontSize: Font.SIZE_24,
        fontFamily: Font.COMFORTAA_SEMIBOLD,
        color: Color.WHITE
    },
    name: {
        fontSize: Font.SIZE_22,
        fontFamily: Font.COMFORTAA_BOLD,
        color: Color.WHITE,
        marginTop: 69,
        marginLeft: 24
    },
    cardNumberView: {
        flexDirection: 'row', 
        alignItems: 'center',
        marginTop: 24
    },
    expiryCvvView: {
        flexDirection: 'row', 
        alignItems: 'center',
        marginTop: 15,
        marginLeft: 24
    },
    hideCardView: {
        height: 44,
        width: 151,
        borderTopLeftRadius: 6,
        borderTopRightRadius: 6,
        backgroundColor: Color.WHITE,
        position: 'absolute',
        right: 24
    },
    hideCardInnerView: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 8
    },
    toggleDescription: {
        fontSize: Font.SIZE_12,
        fontFamily: Font.COMFORTAA_SEMIBOLD,
        color: Color.THEME,
        marginLeft: 6,
        lineHeight: 16
    }
});

export default styles;