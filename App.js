import React from 'react';
import { AppRegistry } from 'react-native';
import { AppearanceProvider } from 'react-native-appearance';
import SettingsContextProvider from './settings/SettingsContext';
import FullView from './fullView';

export default function App() {
    return (
        <AppearanceProvider>
            <SettingsContextProvider>
                <FullView />
            </SettingsContextProvider>
        </AppearanceProvider>
    );
}


AppRegistry.registerComponent("Snake", () => App);
