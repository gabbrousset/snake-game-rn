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


export const SettingsMenu = (props) => {
    const returnMenu = () => {
        props.setMenu();
    }

    return(
        <View style={styles.container}>
            <ButtonText text={'Return'} callback={returnMenu} />
            <CustomText style={styles.changeThemeTxt}>Change Theme:</CustomText>
            <View style={styles.themeChooser}>
                <ThemeChooser />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    changeThemeTxt: {
        fontSize: 38,
        fontFamily: 'Billy-Bold',
    },
    themeChooser: {
        paddingVertical: 30,
        width: '80%',
    }
});
