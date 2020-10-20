import React from 'react';
import { AppRegistry } from 'react-native';
import { AppearanceProvider } from 'react-native-appearance';
import ThemeContextProvider from './theme/ThemeContext';
import FullView from './fullView';

export default function App() {
    return (
        <AppearanceProvider>
            <ThemeContextProvider>
                <FullView />
            </ThemeContextProvider>
        </AppearanceProvider>
    );
}


AppRegistry.registerComponent("Snake", () => App);
