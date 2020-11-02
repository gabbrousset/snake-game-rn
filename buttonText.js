import React, { useState } from 'react';
import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
} from 'react-native';
import * as Haptics from 'expo-haptics';
import Constants from 'expo-constants'
import CustomText from './CustomText';
import ThemeChooser from './themeChooser';


export const ButtonText = ({text, callback}) => (
    <View style={styles.container}>
        <TouchableOpacity onPress={() => {
            callback()
            Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium)
        }}>
            <CustomText style={styles.backTxt}>
                {text}
            </CustomText>
        </TouchableOpacity>
    </View>
);

const styles = StyleSheet.create({
    container: {
        // position: 'absolute',
        // bottom: Constants.statusBarHeight + 50,
        alignContent: 'center',
        justifyContent: 'center',
    },
    backTxt: {
        fontSize: 30,
        fontFamily: 'Billy-Light',
    },
});
