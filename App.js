import React from 'react';
import { AppRegistry } from 'react-native';
import { AppearanceProvider } from 'react-native-appearance';
import SettingsContextProvider from './settings/SettingsContext';
import FullView from './fullView';
import { interstitialAdSetUp } from './gameOverAdMob';

export default function App() {
    interstitialAdSetUp();
    return (
        <AppearanceProvider>
            <SettingsContextProvider>
                <FullView />
            </SettingsContextProvider>
        </AppearanceProvider>
    );
}


AppRegistry.registerComponent("Snake", () => App);
