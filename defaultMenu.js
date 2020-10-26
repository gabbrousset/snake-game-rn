import React, { useState, useContext } from 'react';
import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    Image,
} from 'react-native';
import { SettingsContext } from './settings/SettingsContext';
import CustomText from './CustomText';
import SettingsSVG from './assets/settings.svg';
import TrophySVG from './assets/trophy.svg';


export const DefaultMenu = ({ restart, showFullMenu, first, score, setMenu }) => {
    const settingsContext = useContext(SettingsContext);
    return(
        <View style={styles.container}>
            <TouchableOpacity onPress={() => showFullMenu && setMenu('gameMode')}>
                <CustomText style={styles.gameModeTxt} hide={!showFullMenu}>GameMode:{'\n'}{settingsContext.gameMode.name}</CustomText>
            </TouchableOpacity>
            <View style={styles.scores}>
                <CustomText style={styles.scoreTxt}>Best: {parseInt(settingsContext.highScores?.[settingsContext.gameMode.id])}</CustomText>
                <CustomText style={styles.scoreTxt} hide={first}>Score: {score}</CustomText>
            </View>
            <TouchableOpacity onPress={restart}>
                <CustomText style={styles.startTxt} hide={!showFullMenu}>Play</CustomText>
            </TouchableOpacity>
            <View style={styles.iconsContainer}>
                <TouchableOpacity onPress={() => showFullMenu && setMenu('leaderboard')} style={[styles.icon, {
                    opacity: showFullMenu ? 1 : 0,
                }]}>
                    <TrophySVG width={'100%'} height={'100%'} fill={settingsContext.theme.complementary} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => showFullMenu && setMenu('settings')} style={[styles.icon, {
                    opacity: showFullMenu ? 1 : 0,
                }]}>
                    <SettingsSVG width={'100%'} height={'100%'} fill={settingsContext.theme.complementary} />
                </TouchableOpacity>            
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
    startTxt: {
        fontSize: 48,
        fontFamily: 'Billy-Bold',
        textAlign: 'center',
    },
    scores: {
        paddingVertical: 20,
    },
    scoreTxt: {
        fontSize: 32,
        textAlign: 'center',
        paddingVertical: 5,
    },
    gameModeTxt: {
        fontFamily: 'Billy-Bold',
        textAlign: 'center',
        fontSize: 32,
    },
    iconsContainer: {
        width: '50%',
        flexDirection: 'row',
        justifyContent: 'space-around',
        position: 'absolute',
        bottom: 150,
    },
    icon: {
        width: 40,
        height: 40,
    },
});
