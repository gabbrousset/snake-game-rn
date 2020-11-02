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
            let backgroundColor;
            let color;
        if (item.id === selectedId) {
            backgroundColor = settingsContext.theme.complementary2;
            color = settingsContext.theme.complementary;
        } else {
            backgroundColor = null;
            color = settingsContext.theme.complementary;
        }

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
        <View style={styles.container}>
            <FlatList
                data={themesInfo}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                extraData={selectedId}
                // scrollEnabled={false}
            />
        </View>
    )
};



const styles = StyleSheet.create({
    container: {
        // height: '100%',
        // width: '100%',
    },
    themeItem: {
        paddingVertical: 10,
        paddingHorizontal: 15,
    },
    themeTxt: {
        fontSize: 35,
    },
});
