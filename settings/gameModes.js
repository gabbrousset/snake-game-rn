// Define GameModes
const easy = {
    id: 'easy',
    name: 'Easy',
    speed: 63,
    borders: false,
    gamesBetweenAds: 0,
};

const normal = {
    id: 'normal',
    name: 'Normal',
    speed: 63,
    borders: true,
    gamesBetweenAds: 1,
};

const hard = {
    id: 'hard',
    name: 'Hard',
    speed: 42,
    borders: false,
    gamesBetweenAds: 2,
};

const insane = {
    id: 'insane',
    name: 'Insane',
    speed: 42,
    borders: true,
    gamesBetweenAds: 2,
};

const gameModes = {
    easy,
    normal,
    hard,
    insane,
};

export const gameModesInfo = [
    {
        id: 'easy',
        name: 'Easy',
        desc: 'Slow, Borderless'
    },
    {
        id: 'normal',
        name: 'Normal',
        desc: 'Slow'
    },
    {
        id: 'hard',
        name: 'Hard',
        desc: 'Fast, Borderless'
    },
    {
        name: 'Insane',
        id: 'insane',
        desc: 'Fast'
    },
];

export default gameModes;
