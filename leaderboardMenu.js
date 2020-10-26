import React, { useState } from 'react';
import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
} from 'react-native';
import { SettingsContext } from './settings/SettingsContext';
import CustomText from './CustomText';
import { ButtonText } from './buttonText'


export const LeaderboardMenu = (props) => {
    const returnMenu = () => {
        props.setMenu();
    }

    return(
        <View style={styles.container}>
            <ButtonText text={'Return'} callback={returnMenu} />
            <CustomText style={styles.titleTxt}>Leaderboards:</CustomText>
            <CustomText style={styles.subtitleTxt}>Coming Soon!</CustomText>
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
    titleTxt: {
        fontSize: 40,
        fontFamily: 'Billy-Bold',
        textAlign: 'center',
        paddingVertical: 30,
    },
    subtitleTxt: {
        fontSize: 38,
        fontFamily: 'Billy',
        textAlign: 'center',
    },
});
