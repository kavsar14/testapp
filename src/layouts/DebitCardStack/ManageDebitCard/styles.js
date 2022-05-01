import { StyleSheet } from 'react-native';
import { Font, Color } from '../../../utils/theme';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Color.BG_THEME
    },
    content: {
        flex: 1,
        backgroundColor: Color.BG_THEME
    },
    panel: {
        flex: 1,
        backgroundColor: Color.BG_THEME,
        zIndex: 1
    },
    panelHeader: {
        height: 20,
        backgroundColor: Color.WHITE,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
    },
    panelContainer: {
        flex: 1,
        backgroundColor: Color.WHITE,
    },
    header: {
        height: 56,
        marginHorizontal: 24,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    title: {
        marginTop: 32,
        fontSize: Font.SIZE_24,
        fontFamily: Font.COMFORTAA_BOLD,
        color: Color.WHITE
    },
    logo: {
        marginTop: 15
    },
    balanceTitle: {
        marginTop: 33,
        fontSize: Font.SIZE_14,
        fontFamily: Font.COMFORTAA_MEDIUM,
        color: Color.WHITE,
        marginLeft: 24
    },
    balanceView: {
        marginTop: 10,
        marginLeft: 24,
        height: 33,
        alignItems: 'center',
        flexDirection: 'row',
    },
    balance: {
        fontSize: Font.SIZE_24,
        fontFamily: Font.COMFORTAA_BOLD,
        color: Color.WHITE,
        marginLeft: 10
    }
});

export default styles;