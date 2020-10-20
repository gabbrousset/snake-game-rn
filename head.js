import React, { Component, PureComponent } from 'react';
import { StyleSheet, View } from 'react-native';
import { SettingsContext } from './settings/SettingsContext';

class Head extends PureComponent {
    static contextType = SettingsContext;
    constructor(props) {
        super(props);
    }

    render() {
        const x = this.props.position[0];
        const y = this.props.position[1];

        return (
            <View
                style={[
                    styles.head,
                    {
                        width: this.props.size,
                        height: this.props.size,
                        left: x * this.props.size,
                        top: y * this.props.size,
                        backgroundColor: this.context.theme.complementary,
                        borderColor: this.context.theme.primary,
                    },
                ]}
            />
        );
    }
}

const styles = StyleSheet.create({
    head: {
        position: 'absolute',
        borderWidth: 1,
    },
});

export { Head };
