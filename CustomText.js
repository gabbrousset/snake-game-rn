import React from 'react';
import { Text, StyleSheet } from 'react-native';
import * as Font from 'expo-font';

export default function CustomText(props) {
    const [loaded] = Font.useFonts({
        Billy: require('./assets/fonts/Billy/Billy-Regular.ttf'),
    });

    if (!loaded) {
        return null;
    }

    return (
        <Text style={[styles.defaultStyle, props.style]}>{props.children}</Text>
    );
}

const styles = StyleSheet.create({
    defaultStyle: {
        fontFamily: 'Billy',
    },
});
