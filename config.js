import { Dimensions } from 'react-native';
import Constants from 'expo-constants';
import { Appearance } from 'react-native-appearance';


const cell = Math.ceil(Dimensions.get('window').height / 40);
const game_width = Math.floor(Dimensions.get('window').width / cell);
const game_height = Math.floor((Dimensions.get('window').height - Constants.statusBarHeight) / cell);

const config = {
    MAX_WIDTH: game_width * cell,
    MAX_HEIGHT: game_height * cell,
    CELL_SIZE: cell,
    GAME_WIDTH: game_width,
    GAME_HEIGHT: game_height,
}

export default config;
