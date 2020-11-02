import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Button } from 'react-native';
import { GameEngine, dispatch } from 'react-native-game-engine';
import * as Haptics from 'expo-haptics';
import { getData, setData } from './storageHelpers';
import { GameLoop } from './systems';
import { SettingsContext } from './settings/SettingsContext';
import config from './config';
import { Head } from './head';
import { Tail } from './tail';
import { Food } from './food';
import { Menu } from './menu';
import CustomText from './CustomText';
import { showInterstitialAd } from './gameOverAdMob';

export default class SnakeApp extends Component {
    static contextType = SettingsContext;
    constructor(props, context) {
        super(props);
        this.engine = null;
        this.state = {
            running: false,
            showFullMenu: true,
            score: 0,
            restartsCurrent: 0,
            restartsAd: context.gameMode.gamesBetweenAds,
            first: true,
        };

        this.head = {
            position: [2, 2],
            xSpeed: 1,
            ySpeed: 0,
            nextMove: 0,
            size: 0,
            speed: context.gameMode.speed,
            borders: context.gameMode.borders,
            moving: false,
            renderer: <Head />,
        };
        this.food = {
            position: [
                this.randomBetween(0, config.GAME_WIDTH - 1),
                this.randomBetween(0, config.GAME_HEIGHT - 1),
            ],
            size: 0,
            renderer: <Food />,
        };
        this.tail = {
            number: 3,
            size: config.CELL_SIZE,
            elements: [],
            renderer: <Tail />,
        };
    }

    randomBetween = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1) + min);
    };

    onEvent = (e) => {
        switch (e.type) {
            case 'game-over':
                Haptics.notificationAsync(Haptics.NotificationFeedbackType.Warning) 
                this.setState({
                    running: false,
                    first: false,
                });

                const highScores = this.context.highScores;
                if (this.state.score > parseInt(highScores[this.context.gameMode.id])) {
                    highScores[this.context.gameMode.id] = this.state.score.toString();
                    this.context.changeHighScores(highScores);
                }

                setTimeout(() => {
                    if (this.state.restartsCurrent >= this.state.restartsAd) {
                        showInterstitialAd()
                        this.setState({
                            restartsCurrent: 0
                        });
                    } else {
                        this.setState({
                            restartsCurrent: this.state.restartsCurrent + 1
                        });
                    };

                    this.setState({
                        showFullMenu: true,
                    });

                }, 1000);

                break;

            case 'eating':
                Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light) 
                this.setState({
                    score: this.state.score + 1,
                });
                break;
        }
    };

    restart = async () => {
        if (this.state.showFullMenu) {
            this.engine.swap({
                head: {
                    ...this.head,
                    position: [2, 2],
                    xSpeed: 1,
                    ySpeed: 0,
                    speed: this.context.gameMode.speed,
                    borders: this.context.gameMode.borders,
                    nextMove: 0,
                    size: config.CELL_SIZE,
                    moving: false,
                },
                food: {
                    ...this.food,
                    position: [
                        this.randomBetween(0, config.GAME_WIDTH - 1),
                        this.randomBetween(0, config.GAME_HEIGHT - 1),
                    ],
                    size: config.CELL_SIZE,
                },
                tail: { ...this.tail, elements: [], number: 3 },
            });
            this.setState({
                running: true,
                showFullMenu: false,
                score: 0,
                restartsAd: this.context.gameMode.gamesBetweenAds,
            });
        }
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
                />
                {this.state.running ? (
                    <View style={[styles.backgroundScore]}>
                        <CustomText style={[styles.backgroundScoreTxt, {
                            color: this.context.theme.primaryDark,
                        }]}>
                            {this.state.score}
                        </CustomText>
                    </View>
                ) : (
                    <Menu
                        showFullMenu={this.state.showFullMenu}
                        restart={this.restart}
                        score={this.state.score}
                        first={this.state.first}
                    />
                )}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    backgroundScore: {
        position: 'absolute',
        zIndex: -10,
    },
    backgroundScoreTxt: {
        fontSize: 300,
    },
});
