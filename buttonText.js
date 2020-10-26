import React, { useState } from 'react';
import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
} from 'react-native';
import Constants from 'expo-constants'
import CustomText from './CustomText';
import ThemeChooser from './themeChooser';


export const ButtonText = ({text, callback}) => (
    <View style={styles.container}>
        <TouchableOpacity onPress={callback}>
            <CustomText style={styles.backTxt}>
                {text}
            </CustomText>
        </TouchableOpacity>
    </View>
);

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        bottom: Constants.statusBarHeight + 50,
    },
    backTxt: {
        fontSize: 30,
        fontFamily: 'Billy-Light',
    },
});
