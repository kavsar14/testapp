import { StyleSheet } from 'react-native';
import { Color } from '../../utils/theme';

const styles = StyleSheet.create({
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
});

export default styles;