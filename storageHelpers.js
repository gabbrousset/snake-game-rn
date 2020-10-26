import AsyncStorage from '@react-native-community/async-storage';

export const getData = async (key) => {
    try {
        const value = await AsyncStorage.getItem(key);
        if (value !== null) {
            return value;
        }
        return null;
    } catch (err) {
        console.warn(err);
        return false
    }
};

export const setData = async (key, value) => {
    try {
        await AsyncStorage.setItem(key, value);
        return true
    } catch (err) {
        console.warn(err);
        return false
    }
};
