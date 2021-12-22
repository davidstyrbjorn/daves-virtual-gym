import { StyleSheet } from "react-native";
import { textColors, TextColors } from './colors'

const textStyle = (color: TextColors, fontSize: number = 16) => StyleSheet.create({
    text: {
        fontFamily: 'Roboto',
        color: textColors[color],
        fontSize: fontSize
    }
});

export { textStyle };