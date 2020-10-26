import React, { useState, useContext } from 'react';
import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
} from 'react-native';
import * as WebBrowser from 'expo-web-browser';
import { SettingsContext } from './settings/SettingsContext';
import CustomText from './CustomText';
import ThemeChooser from './themeChooser';
import config from './config';
import themes from './settings/colorThemes';
import { DefaultMenu } from './defaultMenu';
import { SettingsMenu } from './settingsMenu';
import { GameModeMenu } from './gameModeMenu';
import { LeaderboardMenu } from './leaderboardMenu';


export const Menu = (props) => {
    const settingsContext = useContext(SettingsContext);
    const [menu, setMenu] = useState('default');
    const handleOpenPrivacyPolicy = async () => {
        WebBrowser.openBrowserAsync('https://trescool.io/privacy');
    }

    const MenuSwitch = () => {
        switch (menu) {
            default:
                return(
                    <DefaultMenu
                        restart={props.restart}
                        showFullMenu={props.showFullMenu}
                        first={props.first}
                        score={props.score}
                        setMenu={setMenu}
                    />
                );
            case 'gameMode':
                return(
                    <GameModeMenu setMenu={setMenu} />
                );
            case 'leaderboard':
                return(
                    <LeaderboardMenu setMenu={setMenu} />
                );
            case 'settings':
                return(
                    <SettingsMenu setMenu={setMenu} />
                );
        };
    }

    return(
        <View style={[styles.container, {
            backgroundColor: settingsContext.theme.opacity,
        }]}>
            <MenuSwitch/>
            <TouchableOpacity onPress={() => handleOpenPrivacyPolicy} style={styles.privacy}>
                <CustomText style={styles.privacyTxt}>Privacy Policy</CustomText>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        flex: 1,
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    privacy: {
        position: 'absolute',
        top: config.MAX_HEIGHT,
        textAlign: 'center',
    },
    privacyTxt: {
        fontSize: 20,
        fontFamily: 'Billy-Light',
    }
});
