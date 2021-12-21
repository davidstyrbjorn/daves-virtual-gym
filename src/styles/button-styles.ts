import { StyleProp, StyleSheet, TextStyle, ViewStyle } from "react-native";
import { ButtonProps } from "../types/props";
import { buttonColors, neutralColors, textColors } from "./colors";

/*
Define styles as function so we can pass button props to them and style accordingly
*/

const buttonContainerStyle = (props: ButtonProps): StyleProp<ViewStyle> => {
    return {
        alignSelf: 'center',
    }
};

const buttonStyle = (props: ButtonProps): StyleProp<ViewStyle> => {
    return {
        backgroundColor: buttonColors[props.buttonColor],
        width: props.width,
        height: props.height,
        alignContent: 'center',
        borderRadius: props.borderRadius
    }
}

const buttonTitleStyle = (props: ButtonProps): StyleProp<TextStyle> => {
    return {    
        color: textColors[props.textColor],
        width: '100%'
    }
}

export { buttonContainerStyle, buttonStyle, buttonTitleStyle };