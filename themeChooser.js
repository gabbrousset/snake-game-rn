import React, { useContext, useState } from 'react';
import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    FlatList,
} from 'react-native';
import { SettingsContext } from './settings/SettingsContext';
import { themesInfo } from './settings/colorThemes';
import CustomText from './CustomText';


export default function ThemeChooser() {

    const settingsContext = useContext(SettingsContext);

    const [selectedId, setSelectedId] = useState(settingsContext.theme.id);

    const handleThemeChange = (id) => {
        setSelectedId(id)
        settingsContext.changeTheme(id)
    }

    const renderItem = ({ item }) => {

        const backgroundColor = item.id === selectedId ? settingsContext.theme.complementary2 : settingsContext.theme.primary;
        const color = item.id === selectedId ? settingsContext.theme.complementary : settingsContext.theme.complementary;

        return(
            <TouchableOpacity onPress={() => handleThemeChange(item.id)} style={[styles.themeItem, {
                backgroundColor,
            }]}>
                <CustomText style={[styles.themeTxt, {
                    color,
                }]}>
                    {item.name}
                </CustomText>
            </TouchableOpacity>
        )
    };

    return (
        <FlatList
            data={themesInfo}
            renderItem={renderItem}
            keyExtractor={item => item.id}
            extraData={selectedId}
            style={[styles.list]}
            // numColumns={themesInfo.length / 2}
            scrollEnabled={false}
        />
    )
};



const styles = StyleSheet.create({
    themeItem: {
        flexGrow: 1,
        paddingVertical: 10,
        marginHorizontal: 15,
        paddingHorizontal: 15,
    },
    themeTxt: {
        fontSize: 32,
    },
    list: {
        width: '100%',
    }
});
