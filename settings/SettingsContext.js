import React, { createContext, useState, useEffect } from 'react';
import { useColorScheme } from 'react-native-appearance';
import { getData, setData } from '../storageHelpers';
import themes from './colorThemes';

export const SettingsContext = createContext();

export default function SettingsContextProvider(props) {
    const [theme, setTheme] = useState(themes['dark']);

    const automaticTheme = useColorScheme();


    useEffect(() => {
        getData('userTheme').then((res) => {
            changeTheme(res);
        })
    }, [automaticTheme]);
    
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
    }

    return (
        <SettingsContext.Provider value={{theme, changeTheme }}>
            {props.children}
        </SettingsContext.Provider>
    )
}
