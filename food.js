import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { ThemeContext } from './theme/ThemeContext';

class Food extends Component {
    static contextType = ThemeContext;
    constructor(props) {
        super(props);
    }

    render() {
        const x = this.props.position[0];
        const y = this.props.position[1];

        return (
            <View
                style={[
                    styles.food,
                    {
                        width: this.props.size,
                        height: this.props.size,
                        left: x * this.props.size,
                        top: y * this.props.size,
                        backgroundColor: this.context.theme.secondary,
                        borderColor: this.context.theme.primary,
                    },
                ]}
            />
        );
    }
}

const styles = StyleSheet.create({
    food: {
        position: 'absolute',
        borderWidth: 1,
    },
});

export { Food };
