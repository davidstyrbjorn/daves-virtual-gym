export type NeutralColors = 'white' | 'dave_blue_light' | 'dave_blue_dark';
export const neutralColors: Record<NeutralColors, string> = {
    'white': '#ffffff',
    'dave_blue_light': '#1DC9FF',
    'dave_blue_dark': '#0046AE'
}

export type TextColors = 'black' | 'white' | 'dark-gray';
export const textColors: Record<TextColors, string> = {
    'white': '#ffffff',
    'black': '#000000',
    'dark-gray': '#9B9B9B'
}

export type ButtonColors = 'red1' | 'red2' | 'green1' | 'green2' | 'blue1' | 'blue2' | 'lilac1' | 'lilac2' ;
export const buttonColors: Record<ButtonColors, string> = {
    'red1': '#FF0000',
    'red2': '#FF3D00',
    'green1': '#14FF00',
    'green2': '#00EB7A',
    'blue1': '#00E0FF',
    'blue2': '#006CEB',
    'lilac1': '#FF0099',
    'lilac2': '#6700EB'
}

export type BackgroundColors = 'blue1' | 'blue2' | 'lilac1' | 'lilac2';
export const backgroundColors: Record<BackgroundColors, string> = {
    'blue1': '#1DC9FF',
    'blue2': '#0046AE',
    'lilac1': '#4D00AE',
    'lilac2': '#FF1D89'
}

export const selectedExercise: string = '#4AFF46';