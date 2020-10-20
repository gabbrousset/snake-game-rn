import React, { useContext, useState } from "react";
import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    FlatList,
} from "react-native";
import { ThemeContext } from './theme/ThemeContext';
import { themesInfo } from "./theme/colorThemes";
import CustomText from "./CustomText";


export default function ThemeChooser() {

    const themeContext = useContext(ThemeContext);

    const [selectedId, setSelectedId] = useState(themeContext.theme.id);

    const handleThemeChange = (id) => {
        setSelectedId(id)
        themeContext.changeTheme(id)
    }

    const renderItem = ({ item }) => {

        const backgroundColor = item.id === selectedId ? themeContext.theme.complementary2 : themeContext.theme.primary;
        const color = item.id === selectedId ? themeContext.theme.complementary : themeContext.theme.complementary;

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
