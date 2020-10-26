// Define application themes
const dark = {
    id: 'dark',
    type: 'dark',
    primary: '#000000',
    primaryDark: '#121212',
    secondary: '#1167b1',
    complementary: '#ffffff',
    complementary2: '#969696',
    opacity: 'rgba(00, 00, 00, 0.6)'
};

const light = {
    id: 'light',
    type: 'light',
    primary: '#ffffff',
    primaryDark: '#f9f9f9',
    secondary: '#2a9df4',
    complementary: '#000000',
    complementary2: '#969696',
    opacity: 'rgba(255, 255, 255, 0.6)'
};

const blue = {
    id: 'blue',
    type: 'dark',
    primary: '#253845',
    primaryDark: '#2c4252',
    secondary: '#9aa6a9',
    complementary: '#cccccc',
    complementary2: '#a6a6a6',
    opacity: 'rgba(37, 56, 69, 0.6)'
};

const pastel = {
    id: 'pastel',
    type: 'light',
    primary: '#f3e9df',
    primaryDark: '#f8f3ed',
    secondary: '#f6d1bd',
    complementary: '#f0b290',
    complementary2: '#f6d1bd',
    opacity: 'rgba(243, 233, 223, 0.6)'
};

const themes = {
    dark,
    light,
    blue,
    pastel,
};

export const themesInfo = [
    {
        name: 'Automatic',
        id: 'automatic',
    },
    {
        name: 'Dark',
        id: 'dark',
    },
    {
        name: 'Light',
        id: 'light',
    },
    {
        name: 'Blue',
        id: 'blue',
    },
    {
        name: 'Pastel',
        id: 'pastel',
    },
];

export default themes;
