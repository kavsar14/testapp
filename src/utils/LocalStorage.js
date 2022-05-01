import AsyncStorage from '@react-native-async-storage/async-storage';

export const setValue = async (key, value) => {
    try {
        const jsonValue = JSON.stringify(value)
        await AsyncStorage.setItem(key, jsonValue)
    } catch (e) {
        // error saving value
        console.log(e)
    }
}

export const getValue = async (key) => {
    try {
        const jsonValue = await AsyncStorage.getItem(key)
        return jsonValue != null ? JSON.parse(jsonValue) : null
    } catch (e) {
        // error reading value
        console.log(e)
    }
}

export const removeValue = async (key) => {
    try {
        await AsyncStorage.removeItem(key)
    } catch (e) {
        // error reading value
        console.log(e)
    }
}

export const clearAllValue = async () => {
    try {
        await AsyncStorage.clear()
    } catch (e) {
        // clear error
        console.log(e)
    }
}
