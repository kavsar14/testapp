import React, { useRef } from 'react'
import { View, Animated } from 'react-native'
import SlidingUpPanel from 'rn-sliding-up-panel'

import styles from './styles'
import { isIOS } from '../../utils/globals'

const SlideUpPanel = (props) => {
    const {
        topMargin,
        bottomMargin
    } = props;
    const slider = useRef();
    // const pan = useRef(new Animated.Value(0)).current;

    return (
        <SlidingUpPanel
            ref={slider}
            draggableRange={{ top: topMargin, bottom: bottomMargin }}
            onBottomReached={() => {
            }}
            showBackdrop={false}
            friction={isIOS() ? 0.5 : 0.4}
        >
            {dragHandler => (
                <View style={styles.panel} {...dragHandler}>
                    <View style={styles.panelHeader}>
                    </View>
                    <View style={styles.panelContainer}>
                        {props.children}
                    </View>
                </View>
            )}
        </SlidingUpPanel>
    )
}

export default SlideUpPanel;