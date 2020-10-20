// Define application themes
const dark = {
    id: 'dark',
    type: 'dark',
    primary: '#000000',
    primaryDark: '#121212',
    secondary: '#1167b1',
    complementary: '#ffffff',
    complementary2: '#969696',
}

const light = {
    id: 'light',
    type: 'light',
    primary: '#ffffff',
    primaryDark: '#f9f9f9',
    secondary: '#2a9df4',
    complementary: '#000000',
    complementary2: '#969696',
}

const themes = {
    dark,
    light
}

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
];

export default themes;
