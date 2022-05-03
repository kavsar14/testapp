import React  from 'react'
import { View, SafeAreaView } from 'react-native'
 
import Label from '../../components/Label'

import styles from './styles'

const Payments = ({ navigation, route }) => {
    return (
        <SafeAreaView style={styles.container}>
            <View
                style={styles.content}>

                <Label>
                     Payments Screen
                </Label>

            </View>

        </SafeAreaView>
    )
}

export default Payments;