
import { Dimensions, StyleSheet } from "react-native"
import { Color, Font } from '../../utils/theme';
const { width } = Dimensions.get("window");
const screenWidth = width;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        justifyContent: 'space-between',
       // marginBottom: 7,
       // marginTop: 7
    },
    inputDropdown: {
        borderBottomColor: Color.BORDER_COLOR,
        borderBottomWidth: 1,
        paddingBottom: 5,
        paddingTop: 0,
        flexDirection: 'row',
        alignItems: "center",
        height: 30,
        color: Color.TEXT_BLACK,
        fontFamily: Font.robotoMedium,
        width: screenWidth - 30,
    },
    textStyle: {
        fontSize: 14,
    },
    dropdownTextStyle: {
        fontSize: 14
    },
    labltxt: {
        flexDirection: 'row',
        alignItems: "center",
        // margin: 0
    },
    dropdown: {
        // margin: 0,
    },
    iconStyle: {
        width: 12, height: 7, left: screenWidth - 60, position: "absolute"
    }
})

export default styles;