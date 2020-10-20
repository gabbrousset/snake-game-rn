import React, { Component } from "react";
import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
} from "react-native";
import { GameEngine, dispatch } from "react-native-game-engine";
import { getData, setData } from './storageHelpers';
import { GameLoop } from "./systems";
import { ThemeContext } from './theme/ThemeContext';
import config from "./config";
import { Head } from "./head";
import { Tail } from "./tail";
import { Food } from "./food";
import GameMenu from './gameMenu';


export default class SnakeApp extends Component {
    static contextType = ThemeContext;
    constructor(props) {
        super(props);
        this.engine = null;
        this.state = {
            running: true,
            score: 0,
            highScore: 0,
        };

        this.head = {
            position: [2, 2],
            xSpeed: 1,
            ySpeed: 0,
            nextMove: 42,
            updateFrequency: 42,
            size: config.CELL_SIZE,
            renderer: <Head />,
        };
        this.food = {
            position: [
                this.randomBetween(0, config.GAME_WIDTH - 1),
                this.randomBetween(0, config.GAME_HEIGHT - 1),
            ],
            size: config.CELL_SIZE,
            renderer: <Food />,
        };
        this.tail = {
            number: 3,
            size: config.CELL_SIZE,
            elements: [],
            renderer: <Tail />,
        };
    }

    componentDidMount() {
        getData('highScoreLocal').then((res) => {
            if (res) {
                highScore = parseInt(res)
                if (!isNaN(highScore)) {
                    this.setState({
                        highScore,
                    })
                }
            }
        })
    }

    randomBetween = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1) + min);
    };

    onEvent = (e) => {
        switch (e.type) {
            case "game-over":
                this.setState({
                    running: false,
                });
                if (this.state.score > this.state.highScore) {
                    this.setState({
                        highScore: this.state.score
                    })
                    setData('highScoreLocal', this.state.score.toString());
                }
                break;

            case "eating":
                this.setState({
                    score: this.state.score + 1,
                });
                break;
        }
    };

    restart = async () => {
        this.engine.swap({
            head: {
                ...this.head,
                position: [2, 2],
                xSpeed: 1,
                ySpeed: 0,
                nextMove: 42,
            },
            food: {
                ...this.food,
                position: [
                    this.randomBetween(0, config.GAME_WIDTH - 1),
                    this.randomBetween(0, config.GAME_HEIGHT - 1),
                ],
            },
            tail: { ...this.tail, elements: [], number: 3 },
        });
        this.setState({
            running: true,
            score: 0,
        });
    };

    render() {
        return (
            <View style={styles.container}>
                <GameEngine
                    ref={(ref) => {
                        this.engine = ref;
                    }}
                    style={[
                        {
                            width: config.MAX_WIDTH,
                            height: config.MAX_HEIGHT,
                            flex: null,
                        },
                    ]}
                    systems={[GameLoop]}
                    entities={{
                        head: this.head,
                        food: this.food,
                        tail: this.tail,
                    }}
                    running={this.state.running}
                    onEvent={this.onEvent}
                ></GameEngine>
                {!this.state.running && <GameMenu restart={this.restart} score={this.state.score} highScore={this.state.highScore} />}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
});
