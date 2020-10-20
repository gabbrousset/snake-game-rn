import React, { Component } from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { SettingsContext } from './settings/SettingsContext';
import SnakeApp from './index.js';

export default class FullView extends Component {
    static contextType = SettingsContext;

    render() {
        return (
            <SafeAreaView
                style={[styles.container, {
                        backgroundColor: this.context.theme.primary
                    },
                ]}
            >
                <SnakeApp />
                <StatusBar
                    style={this.context.theme.type === 'dark' ? 'light' : 'dark'}
                />
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});
