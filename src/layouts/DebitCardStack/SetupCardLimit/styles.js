import {StyleSheet} from 'react-native';
import {Font, Color} from '../../../utils/theme';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Color.BG_THEME
    },
    content: {
        flex: 1,
        backgroundColor: Color.BG_THEME
    },
    title: {
        marginTop: 0,
        fontSize: Font.SIZE_24,
        fontFamily: Font.COMFORTAA_BOLD,
        color: Color.WHITE,
        marginLeft: 24
    },
    instruction: {
        fontSize: Font.SIZE_14,
        fontFamily: Font.COMFORTAA_MEDIUM,
        color: Color.TEXT_COLOR,
        marginLeft: 12
    },
    panelContainer: {
        marginHorizontal: 24,
        marginTop: 12
    },
    instructionView: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    reminder: {
        fontSize: Font.SIZE_13,
        fontFamily: Font.COMFORTAA_REGULAR,
        color: Color.LIGHT_TEXT_COLOR,
        marginTop: 12,
        lineHeight: 18
    },
    commonLimitView: {
        flexDirection: 'row',
        marginTop: 32,
        justifyContent: 'space-between'
    }
});

export default styles;