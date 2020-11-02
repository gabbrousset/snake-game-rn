import React, { useState } from 'react';
import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
} from 'react-native';
import CustomText from './CustomText';
import ThemeChooser from './themeChooser';
import { ButtonText } from './buttonText'


export const SettingsMenu = () => {
    return(
        <View style={styles.container}>
            <CustomText style={styles.changeThemeTxt}>Change Theme:</CustomText>
            <View style={styles.themeChooser}>
                <ThemeChooser />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        height:'100%',
    },
    changeThemeTxt: {
        fontSize: 38,
        fontFamily: 'Billy-Bold',
        paddingVertical: 30,
    },
    themeChooser: {
        width: '80%',
        flex: 1,
    }
});
