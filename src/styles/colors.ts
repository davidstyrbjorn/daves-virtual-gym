export type NeutralColors = 'white' | 'dave_blue_light' | 'dave_blue_dark';
export const neutralColors: Record<NeutralColors, string> = {
    'white': '#ffffff',
    'dave_blue_light': '#1DC9FF',
    'dave_blue_dark': '#0046AE'
}

export type TextColors = 'black' | 'white';
export const textColors: Record<TextColors, string> = {
    'white': '#ffffff',
    'black': '#000000'
}

export type ButtonColors = 'red1' | 'red2' | 'green1' | 'green2';
export const buttonColors: Record<ButtonColors, string> = {
    'red1': '#FF0000',
    'red2': '#FF3D00',
    'green1': '#14FF00',
    'green2': '#00EB7A'
}