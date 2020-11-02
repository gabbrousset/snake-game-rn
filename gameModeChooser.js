import React, { useContext, useState } from 'react';
import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    FlatList,
} from 'react-native';
import { SettingsContext } from './settings/SettingsContext';
import { gameModesInfo } from './settings/gameModes';
import CustomText from './CustomText';


export default function gameModeChooser() {

    const settingsContext = useContext(SettingsContext);

    const [selectedId, setSelectedId] = useState(settingsContext.gameMode.id);

    const handleGameModeChange = (id) => {
        setSelectedId(id)
        settingsContext.changeGameMode(id)
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
            <TouchableOpacity onPress={() => handleGameModeChange(item.id)} style={[styles.themeItem, {
                backgroundColor,
            }]}>
                <CustomText style={[styles.themeTxt, {
                    color,
                }]}>
                    {item.name}
                </CustomText>
                <CustomText style={[styles.themeDescTxt, {
                    color,
                }]}>
                    {item.desc}
                </CustomText>
            </TouchableOpacity>
        )
    };

    return (
        <View style={styles.container}>
            <FlatList
                data={gameModesInfo}
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
    themeDescTxt: {
        fontSize: 25,
        fontFamily: 'Billy-Light',
    },
});
