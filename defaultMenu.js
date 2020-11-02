import React, { useState, useContext } from 'react';
import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    Image,
} from 'react-native';
import * as Haptics from 'expo-haptics';
import { SettingsContext } from './settings/SettingsContext';
import CustomText from './CustomText';
import SettingsSVG from './assets/settings.svg';
import TrophySVG from './assets/trophy.svg';


{/* <TouchableOpacity onPress = { ()=> { 
     Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success)
     or
     Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light) 
     or
     Haptics.selectionAsync()
 } } > </TouchableOpacity> */}


export const DefaultMenu = ({ restart, showFullMenu, first, score, setMenu }) => {
    const settingsContext = useContext(SettingsContext);
    return(
        <View style={styles.container}>
            <TouchableOpacity onPress={() => {
                showFullMenu && setMenu('gameMode')
                Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium) 
            }}>
                <CustomText style={styles.gameModeTxt} hide={!showFullMenu}>Change{'\n'}Game Mode{'\n\n'}{settingsContext.gameMode.name}</CustomText>
            </TouchableOpacity>
            <View style={styles.scores}>
                <CustomText style={styles.scoreTxt}>Best: {parseInt(settingsContext.highScores?.[settingsContext.gameMode.id])}</CustomText>
                <CustomText style={styles.scoreTxt} hide={first}>Score: {score}</CustomText>
            </View>
            <TouchableOpacity onPress={() => {
                restart()
                Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light)
            }}>
                <CustomText style={styles.startTxt} hide={!showFullMenu}>Play</CustomText>
            </TouchableOpacity>
            <View style={styles.iconsContainer}>
                <TouchableOpacity onPress={() => {
                    showFullMenu && setMenu('leaderboard')
                    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium) 
                }} style={[styles.icon, {
                    opacity: showFullMenu ? 1 : 0,
                }]}>
                    <TrophySVG width={'100%'} height={'100%'} fill={settingsContext.theme.complementary} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {
                    showFullMenu && setMenu('settings')
                    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium) 
                }} style={[styles.icon, {
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
        height: '100%',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    startTxt: {
        fontSize: 48,
        fontFamily: 'Billy-Bold',
        textAlign: 'center',
    },
    scores: {
        // paddingVertical: 20,
    },
    scoreTxt: {
        fontSize: 32,
        textAlign: 'center',
        // paddingVertical: 5,
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
    },
    icon: {
        width: 40,
        height: 40,
    },
});
