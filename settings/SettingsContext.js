import React, { createContext, useState, useEffect } from 'react';
import { useColorScheme } from 'react-native-appearance';
import { getData, setData } from '../storageHelpers';
import themes from './colorThemes';
import gameModes, { gameModesInfo } from './gameModes'

export const SettingsContext = createContext();

export default function SettingsContextProvider(props) {
    const [theme, setTheme] = useState(themes['dark']);
    const [gameMode, setGameMode] = useState(gameModes['normal']);
    const [highScores, setHighScores] = useState()

    const automaticTheme = useColorScheme();


    useEffect(() => {
        getData('userTheme').then((res) => {
            changeTheme(res);
        });
    }, [automaticTheme]);

    useEffect(() => {
        getData('userGameMode').then((res) => {
            changeGameMode(res);
        });
        getData('userHighScores').then((res) => {
            retrieveHighScores(res);
        });
    }, []);
    
    function changeTheme(value) {
        // If theme exist and isn't the one already in use
        if (themes[value]) {
            setTheme(themes[value]);
            setData('userTheme', value);
        // If theme is authomatic
        } else if ((automaticTheme === 'dark' || automaticTheme === 'light')){
            setTheme({
                ...themes[automaticTheme],
                id: 'automatic',
            });
            setData('userTheme', 'automatic');
        // Other
        } else {
            setTheme(themes['dark']);
            setData('userTheme', 'dark');
        }
    };

    function changeGameMode(value) {
        // If theme exist and isn't the one already in use
        if (gameModes[value]) {
            setGameMode(gameModes[value]);
            setData('userGameMode', value);
        // Other
        } else {
            setGameMode(gameModes['normal']);
            setData('userGameMode', 'normal');
        }
    };

    function retrieveHighScores(value) {
        if (value) {
            setHighScores(JSON.parse(value));
        } else {
            changeHighScores(null)
        }
    }

    function changeHighScores(value) {
        // If values were found in Async storage
        if (value) {
            console.log('user');
            setHighScores(value);
            setData('userHighScores', JSON.stringify(value));
        // If the values are corrupted or dont exist
        } else {
            const highScores = {}
            gameModesInfo.forEach(gameMode => {
                highScores[gameMode.id] = 0;
            });
            setHighScores(highScores);
            setData('userHighScores', JSON.stringify(highScores));
        }
    };

    return (
        <SettingsContext.Provider value={{theme, changeTheme, gameMode, changeGameMode, highScores, changeHighScores }}>
            {props.children}
        </SettingsContext.Provider>
    );
}
