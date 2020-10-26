import React, { useContext } from 'react';
import { Text, StyleSheet } from 'react-native';
import { SettingsContext } from './settings/SettingsContext';

export default function CustomText(props) {
    const context = useContext(SettingsContext);
    return (
        <Text style={[styles.defaultStyle, {
            color: context.theme.complementary,
            opacity: props.hide ? 0 : 1,
        }, props.style]}>
            {props.children}
        </Text>
    );
}

const styles = StyleSheet.create({
    defaultStyle: {
        fontFamily: 'Billy',
    },
});
