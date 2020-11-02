import React, { useState } from 'react';
import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
} from 'react-native';
import CustomText from './CustomText';
import GameModeChooser from './gameModeChooser';
import { ButtonText } from './buttonText'


export const GameModeMenu = () => {
    return(
        <View style={styles.container}>
            <CustomText style={styles.changeGameModeTxt}>Change{'\n'}GameMode:</CustomText>
            <View style={styles.gameModeChooser}>
                <GameModeChooser />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        height:'100%',
    },
    changeGameModeTxt: {
        fontSize: 38,
        fontFamily: 'Billy-Bold',
        paddingVertical: 30,
    },
    gameModeChooser: {
        width: '80%',
        flex: 1,
    }
});
