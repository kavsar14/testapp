import React from "react";
import { StyleSheet, View, TouchableOpacity, ScrollView, Image, Text, StatusBar } from "react-native";
import Modal from "react-native-modal";
import _ from 'lodash'

import Label from "../Label";
import { Color, Font } from "../../utils/theme";
import { getDateInFormat } from "../../utils/dateTime";
import { getBookingPercentage, getFromattedPrice, getUpperCase } from "../../utils/utils";
import IconButton from "../IconButton";
import { getRatingsView, screenHeight, screenWidth } from "../../utils/globals";
import { useTranslation } from "react-i18next";
import { ImageBaseUrl } from "../../utils/variable";
import { useHeaderHeight } from "@react-navigation/stack";

const CustomPicker = (props) => {
    const {
        visible,
        data,
        onSwipeDown,
        onSelect
     } = props;

    const { t, i18n } = useTranslation();
    const language = i18n.language;
    const STATUS_BAR_HEIGHT = StatusBar.currentHeight || 24;
    const headerHeight = useHeaderHeight();

    const renderList = (item, index) => {
        const activityId = _.get(item, 'ActivityData._id', '');
        const sessionStartDate = _.get(item, 'reoccursessions.sSessionStart', '');
        const bookedSeat = _.get(item, 'reoccursessions.sBookedSlot', 0);
        const seat = _.get(item, 'reoccursessions.sMaxGroup', 0);
        const overallRating = _.get(item, 'ActivityData.sAverageReview', 0);
        const price = _.get(item, 'sPrice', '');
        const distance = _.get(item, 'Distance', null);
        const title = _.get(item, 'ActivityData.sActivityTitle', '');
        const address = _.get(item, 'reoccursessions.sAddress', '');
        const sActivityImage = _.get(item, 'ActivityData.sProfileImage', '');
        const shakerProfile = _.get(item, 'ShakerData.sProfileImage', '');
        const firstname = _.get(item, 'ShakerData.sFirstName', '');
        const lastName = _.get(item, 'ShakerData.sLastName', '');
        
        let dateFormatted = sessionStartDate ? getDateInFormat(sessionStartDate, 'ddd, DD MMM', language) : '';
            let time = sessionStartDate ? getDateInFormat(sessionStartDate, 'HH:mm', language) : '';
        return (
            <TouchableOpacity onPress={() => onSelect(index, item.reoccursessions._id, activityId, bookedSeat)} style={styles.cardView}>
                <View style={styles.cardInner}>
                    <View style={styles.contentSection}>
                        <View style={styles.activityText}>
                            <Label style={styles.activityTitle} numberOfLines={1}>{title}</Label>
                            <Label style={styles.location} numberOfLines={2}>{address}</Label>
                            {
                                distance == null ?
                                    <Label style={styles.distance}>{`(-- km)`}</Label> :
                                    <Label style={styles.distance}>{`(${distance} km)`}</Label>
                            }
                        </View>
                        <View style={styles.imgView}>
                            <Image source={{ uri: ImageBaseUrl + sActivityImage }} style={styles.imgTag} />
                        </View>
                    </View>
                    <View style={styles.activityDetails}>
                        <View>
                            <Label style={styles.location}>{dateFormatted}</Label>
                            <Label style={styles.location}>{time}</Label>
                        </View>
                        <View style={{ alignSelf: 'flex-end' }}>
                            <View style={styles.userNumber}>
                                {/* <View style={[styles.userIcon, { backgroundColor: item.rating > 9 ? Color.BLACK : item.rating > 8 ? Color.NEON : Color.NEONGREEN }]}>
                                    <IconButton
                                        iconName={'profile'}
                                        iconStyle={[styles.profileIcon, { color: item.rating > 9 ? Color.WHITE : Color.BLACK }]}
                                    >
                                    </IconButton>
                                </View> */}
                                <View style={[styles.userIcon, { backgroundColor: getBookingPercentage(bookedSeat, seat) < 75 ? Color.NEONGREEN : getBookingPercentage(bookedSeat, seat) == 100 ? Color.BLACK : Color.NEON }]}>
                                    <IconButton
                                        iconName={'profile'}
                                        iconStyle={[styles.profileIcon, { color: getBookingPercentage(bookedSeat, seat) == 100 ? Color.WHITE : Color.BLACK }]}
                                    >
                                    </IconButton>
                                </View>
                                <View style={styles.userActive}>
                                    {/* {item.rating < 10 ?
                                        <Label style={styles.userNo}>{item.rating}{'/10'}</Label>
                                        :
                                        <Label style={styles.fullText}>Full</Label>
                                    } */}
                                    <Label style={[styles.userNo, {marginLeft: bookedSeat.toString().length == 1 && seat.toString().length == 1 ? 7 : 10}]}>{`${bookedSeat}/${seat}`}</Label>
                                    {/* <Label style={[styles.userNo, {marginLeft: bookedSeat.toString().length == 1 && seat.toString().length == 1 ? 7 : 10}]}>{`${1}/${1}`}</Label> */}
                                </View>
                            </View>
                            {
                                getBookingPercentage(bookedSeat, seat) < 75 ?
                                    <Label style={[styles.capText, { color: Color.TXTGREY }]}>{t('spaces')}</Label> :
                                    getBookingPercentage(bookedSeat, seat) == 100 ?
                                        <Label style={[styles.capText, { color: Color.TXTGREY }]}>{t('full')}</Label> :
                                        <Label style={styles.capText}>{t('fillingFast')}</Label>
                            }
                        </View>
                    </View>
                    <View style={styles.profileDetails}>
                        <View style={styles.profileinline}>
                            {
                                shakerProfile ?
                                    <Image source={{ uri: ImageBaseUrl + shakerProfile }} style={styles.profileImg} /> :
                                    <View style={styles.noImage}>
                                        <Text style={{ color: Color.TEXT_DEEPBLUE }}>{`${getUpperCase(firstname.substring(0, 1))}${getUpperCase(lastName.substring(0, 1))}`}</Text>
                                    </View>
                            }
                            <Label style={styles.profileNameText}>{`${firstname} ${lastName}`}</Label>
                        </View>
                        <View>
                            <Label style={styles.priceText}>{`${getFromattedPrice(price)}€`}</Label>
                            <View style={styles.starMain}>
                                {/* // <StarFill />
                                // <StarFill />
                                // <StarFill />
                                // <StarFill /> 
                                <Star />
                                <Star />
                                <Star />
                                <Star />
                                <Star /> */}
                                {
                                    getRatingsView(Math.round(overallRating))
                                }
                            </View>
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
        )
    }

    return (
        <Modal
        swipeDirection="down"
        onSwipeComplete={(e) => { onSwipeDown() }}
        // animationType="slide"
        animationInTiming={500}
        animationOutTiming={500}
        propagateSwipe={true}
        isVisible={visible}
        transparent={true}
        backdropOpacity={0.5}
        hasBackdrop={true}
        backdropColor={"rgba(0, 0, 0, 0)"}
        style={{ margin: 0, width: screenWidth, justifyContent: "flex-end"}}
    >
        <View style={styles.centeredView}>
            <View style={styles.modalView}>           
                <View style={[styles.modelContainer, { height: screenHeight - headerHeight - 30 }]}>
                  <View style={styles.topHorizontal}/>
                  <ScrollView style={{height: screenHeight - headerHeight - STATUS_BAR_HEIGHT - 45, marginTop: 16}}>
                      {
                        data.map((item, index)=>
                              renderList(item, index)
                          )
                      }
                  </ScrollView>
                  
                </View>
            </View>
        </View>
   </Modal>
    )
}



const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: "flex-end",
        alignItems: "center",
    },
    modalView: {
        width: "100%",
        borderTopRightRadius: 0,
        borderTopLeftRadius: 0,
        backgroundColor: Color.WHITE,
        // ...Platform.select({
        //     ios: {
        //         shadowColor: "#000",
        //         shadowOffset: {
        //             width: 0,
        //             height: 0
        //         },
        //         shadowOpacity: 0.25,
        //         shadowRadius: 4,
        //     },
        //     android: {
        //         elevation: 5,
        //     },
        // })
    },
    modelContainer: {
        paddingHorizontal: 0,
        paddingTop: 24,
        paddingBottom: 10
    },
    topHorizontal: {
        width: 67,
        height: 5,
        borderRadius: 100,
        backgroundColor: Color.BLACK,
        alignSelf: "center"
    },
    nameView: {
        // marginHorizontal: 20,
        borderTopWidth: 1,
        borderTopColor: Color.BORDER_COLOR,
    },
    nameMainView: {
        backgroundColor: Color.WHITE,
        height: 36,
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 10
    },
    cardView: {
        backgroundColor: Color.WHITE,
        paddingVertical: 16,
        marginBottom: 10,
        ...Platform.select({
            ios: {
                shadowColor: 'rgba(0,0,0,0.12)',
                shadowOffset: {
                    width: 0,
                    height: 4,
                },
                shadowOpacity: 4,
                shadowRadius: 2,
            },
            android: {
                elevation: 3,
            },
        })
    },
    cardInner: {
        width: screenWidth - 32,
        alignSelf: 'center',
    },
    contentSection: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: 70,
        alignSelf: 'center',
    },
    activityText: {
        borderBottomWidth: 2,
        borderColor: Color.NEONGREEN,
        width: screenWidth - 144,
    },
    activityTitle: {
        color: Color.DEEPBLUE,
        fontSize: Font.SIZE_16,
        fontFamily: Font.COMFORTAA_BOLD,
        lineHeight: 24,
        includeFontPadding: false
    },
    location: {
        color: Color.TEXT_GREY_LIGHT,
        fontSize: Font.SIZE_10,
        marginVertical: 3
    },

    distance: {
        color: Color.TEXT_GREY_LIGHT,
        fontSize: Font.SIZE_10,
        lineHeight: 15,
    },
    imgView: {
        borderWidth: 2,
        borderColor: Color.NEONGREEN,
        width: 112,
        height: '100%'
    },
    imgTag: {
        flex: 1,
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
    },
    activityDetails: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 6,
        paddingHorizontal: 0
    },
    profileDetails: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
    },
    profileinline: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    profileImg: {
        width: 30,
        height: 30,
        borderRadius: 15
    },
    profileNameText: {
        fontSize: Font.SIZE_12,
        color: Color.GREY,
        fontFamily: Font.COMFORTAA_REGULAR,
        paddingLeft: 8
    },
    priceText: {
        fontSize: Font.SIZE_16,
        color: Color.TEXT_DEEPBLUE,
        fontFamily: Font.COMFORTAA_BOLD,
        alignSelf: 'flex-end',
        marginVertical: 6
    },
    starMain: {
        flexDirection: 'row',
    },
    userNumber: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    userIcon: {
        width: 30,
        height: 30,
        borderRadius: 15,
        backgroundColor: Color.NEONGREEN,
        justifyContent: 'center',
        alignItems: 'center',
        left: 13.5,
        zIndex: 10000
    },
    profileIcon: {
        fontSize: Font.SIZE_16,
        color: Color.BLACK
    },
    userActive: {
        width: 59,
        height: 23,
        borderRadius: 12,
        borderWidth: 1,
        borderColor: Color.BORDER_GREY,
        backgroundColor: Color.WHITE,
        justifyContent: 'center',
        alignItems: 'center'
    },
    userNo: {
        fontFamily: Font.COMFORTAA_BOLD,
        fontSize: Font.SIZE_10,
        color: Color.BLACK,
        paddingTop: Platform.OS === 'ios' ? 2 : 0,
        paddingBottom: Platform.OS === 'ios' ? 0 : 1,
    },
    fullText: {
        fontFamily: Font.COMFORTAA_BOLD,
        fontSize: Font.SIZE_10,
        color: Color.BLACK,
        paddingTop: Platform.OS === 'ios' ? 2 : 0,
        paddingBottom: Platform.OS === 'ios' ? 0 : 1,
    },
    capText: {
        marginTop: 6,
        color: Color.RED,
        fontSize: Font.SIZE_10,
        alignSelf: 'flex-end'
    },
    createActivity: {
        // position: 'absolute',
        // left: 16,
        // bottom: 10,
        bottom: 10,
        backgroundColor: Color.DEEPBLUE,
        width: screenWidth - 32,
        alignSelf: 'center',
        flexDirection: 'row',
        position: "absolute",
        zIndex: 1000
    },
    textStyle: {
        fontFamily: Font.COMFORTAA_BOLD,
        color: Color.WHITE
    },
    noImage: {
        display: 'flex',
        alignItems: 'center',
        width: 30,
        height: 30,
        borderRadius: 15,
        borderColor: Color.GREY,
        // borderWidth: 1, 
        //alignItems: "center", 
        justifyContent: "center",
        backgroundColor: Color.IMAGE_BG,
    },
    iconCss: {
        fontSize: Font.SIZE_48,
        color: Color.TEXT_DEEPBLUE,
        height: 49
    },
    buttonClose: {
        top: 35,
        right: 14,
        position: 'absolute'
    },
    iconCloseStyle: {
        color: Color.TEXT_GREY_LIGHT,
        fontSize: Font.SIZE_14,
        padding: 10
    },
})

export default CustomPicker;