import React, { Component } from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import { AppLoading } from 'expo';
import { StatusBar } from 'expo-status-bar';
import { SettingsContext } from './settings/SettingsContext';
import SnakeApp from './index.js';
import * as Font from 'expo-font';

export default class FullView extends Component {
    static contextType = SettingsContext;
    state = {
        isReady: false,
    }

    render() {
        if (!this.state.isReady) {
            return (
                <AppLoading
                    startAsync={this.cacheResourcesAsync}
                    onFinish={() => this.setState({ isReady: true })}
                    onError={console.warn}
                />
            );
        }

        return (
            <View
                style={[styles.container, {
                        backgroundColor: this.context.theme.primary
                    },
                ]}
            >
                <SnakeApp />
                <StatusBar
                    style={this.context.theme.type === 'dark' ? 'light' : 'dark'}
                />
            </View>
        );
    }

    async cacheResourcesAsync() {
        return Font.loadAsync({
            Billy: require('./assets/fonts/Billy/Billy-Regular.ttf'),
            'Billy-Bold': require('./assets/fonts/Billy/Billy-Bold.ttf'),
            'Billy-Light': require('./assets/fonts/Billy/Billy-Light.ttf'),
        })
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});
