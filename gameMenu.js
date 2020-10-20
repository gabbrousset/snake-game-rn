import React, { Component } from 'react';
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

export default class SnakeApp extends Component {
    static contextType = SettingsContext;

    constructor(props) {
        super(props);
        this.state = {
            showSettings: false,
        }
    }

    restart = () => {
        this.setState({
            showSettings: false,
        })
        this.props.restart();
    }

    toggleSettings = () => {
        this.setState({
            showSettings: !this.state.showSettings,
        })
    }

    handleOpenPrivacyPolicy = async () => {
        WebBrowser.openBrowserAsync('https://trescool.io/privacy');
    }

    render() {

        if (!this.state.showSettings) {
            return (
                <View style={[styles.menu]}>
                    <TouchableOpacity
                        style={styles.restartButton}
                        onPress={this.toggleSettings}
                    >
                        <CustomText style={[styles.settingsTxt, {
                            color: this.context.theme.complementary,
                        }]}>Settings</CustomText>
                    </TouchableOpacity>
                    
                    {this.props.highScore != 0 && (
                        <View style={styles.score}>
                            <CustomText style={[styles.scoreTxt, {
                                color: this.context.theme.complementary,
                            }]}>
                                High Score: {this.props.highScore}
                            </CustomText>
                        </View>
                    )}
    
                    <View style={styles.score}>
                        <CustomText style={[styles.scoreTxt, {
                            color: this.context.theme.complementary,
                        }]}>
                            Score: {this.props.score}
                        </CustomText>
                    </View>
    
                    <TouchableOpacity
                        style={styles.restartButton}
                        onPress={this.restart}
                    >
                        <CustomText style={[styles.restartTxt, {
                            color: this.context.theme.complementary,
                        }]}>Restart</CustomText>
                    </TouchableOpacity>
    
                </View>
            )
        }

        return (
            <>
            <View style={[styles.menu]}>
                <TouchableOpacity
                    style={styles.restartButton}
                    onPress={this.toggleSettings}
                >
                    <CustomText style={[styles.settingsTxt, {
                        color: this.context.theme.complementary,
                    }]}>x</CustomText>
                </TouchableOpacity>
                
                <CustomText style={[styles.chooseThemeTxt, {
                    color: this.context.theme.complementary,
                }]}>Choose Theme:</CustomText>
                
                <ThemeChooser />
            </View>
            <TouchableOpacity
                style={[styles.privacyPolicy]}
                onPress={this.handleOpenPrivacyPolicy}
            >
                <CustomText style={[styles.privacyPolicyTxt, {
                    color: this.context.theme.complementary,
                }]}>
                    Privacy Policy
                </CustomText>
            </TouchableOpacity>
            </>
        )
    }
}



const styles = StyleSheet.create({
    menu: {
        position: 'absolute',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'center',
        paddingVertical: 50,
        opacity: 0.8,
        borderRadius: 4,
    },
    score: {
        marginBottom: 20,
        textAlign: 'left',
        alignSelf: 'flex-start',
        paddingHorizontal: 30,
    },
    scoreTxt: {
        fontSize: 38,
    },
    restartButton: {
        width: '100%',
        paddingVertical: 20,

    },
    restartTxt: {
        fontSize: 48,
        textAlign: 'center',
    },
    settingsTxt: {
        fontSize: 40, 
        textAlign: 'center',
        paddingBottom: 38,
    },
    chooseThemeTxt: {
        fontSize: 40,
        textAlign: 'center',
        paddingVertical: 20,
        paddingHorizontal: 30,
    },
    privacyPolicy: {
        textAlign: 'center',
        position: 'absolute',
        bottom: 0,
    },
    privacyPolicyTxt: {
        fontSize: 20,
    },
});
