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


export const GameModeMenu = (props) => {
    const returnMenu = () => {
        props.setMenu();
    }

    return(
        <View style={styles.container}>
            <ButtonText text={'Return'} callback={returnMenu} />
            <CustomText style={styles.changeGameModeTxt}>Change{'\n'}GameMode:</CustomText>
            <View style={styles.gameModeChooser}>
                <GameModeChooser />
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
    changeGameModeTxt: {
        fontSize: 38,
        fontFamily: 'Billy-Bold',
    },
    gameModeChooser: {
        paddingVertical: 30,
        width: '80%',
    }
});
