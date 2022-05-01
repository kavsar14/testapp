import {StyleSheet} from 'react-native';
import {hasNotch} from 'react-native-device-info';
import {ifIphoneX} from 'react-native-iphone-x-helper';
import colors from '../../../utils/colors';
import {screenWidth} from '../../../utils/dimensions';
import {Font, font_17} from '../../../utils/theme';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.BG_COLOR
    },
    scrollView: {
        flex: 1,
        backgroundColor: colors.BG_COLOR,
        paddingTop: '20%'
    },
    content: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    button: {
        marginTop: 16,
    },
    bottomBtnView: {
        width: '100%',
        height: 80,
        alignItems: "center",
        justifyContent: 'center',
        marginBottom: hasNotch() ? 0 : 20

    },
    underlineStyleBase: {
        width: (screenWidth - 100) * 0.2,
        height: (screenWidth - 100) * 0.2,
        borderRadius: 8,
        borderWidth: 1,
        color: '#606060',
        fontSize: 26,
        paddingTop: 2,
        paddingBottom: 2
    },
    underlineStyleHighLighted: {
        borderColor: "#606060",
        paddingTop: 2,
        paddingBottom: 2
    },
    secureAndForgotView: {
        flexDirection: 'row',
        width: screenWidth - 60,
        height: 40,
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: 20,
    },
    btnForgotPin: {
        backgroundColor: colors.TRANSPARENT,
        width: 160,
        justifyContent:'flex-start'
    },
    btnTitleForgotPin: {
        paddingVertical: 0,
        color: colors.PRIMARY_BLUE,
        fontSize: font_17,
        fontWeight: '600',
        fontFamily: Font.SFProText_Regular,
    }

});

export default styles;