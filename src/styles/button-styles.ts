import { StyleSheet } from "react-native";
import { ButtonProps } from "../types/props";
import { buttonColors, neutralColors, textColors } from "./colors";

/*
Define styles as function so we can pass button props to them and style accordingly
*/

const normalButton = (props: ButtonProps) => StyleSheet.create({
    container: {
        alignSelf: 'center',
        width: props.width,
        height: props.height
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 4,
        elevation: 3,
        backgroundColor: buttonColors[props.buttonColor],
        alignSelf: 'stretch'
    },
    text: {
        fontSize: 12,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: textColors[props.textColor],
      },
});

export { normalButton };