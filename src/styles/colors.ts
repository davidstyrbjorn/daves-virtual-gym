export namespace colors {
    type Neutral = 'white' | 'dave_blue_light' | 'dave_blue_dark';
    export const neutral: Record<Neutral, string> = {
        'white': '#ffffff',
        'dave_blue_light': '#1DC9FF',
        'dave_blue_dark': '#0046AE'
    }

    type Button = 'red1' | 'red2' | 'green1' | 'green2';
    export const button: Record<Button, string> = {
        'red1': '#FF0000',
        'red2': '#FF3D00',
        'green1': '#14FF00',
        'green2': '#00EB7A'
    }
}