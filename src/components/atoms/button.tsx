import React from "react";
import { StyleProp, TextStyle, View, ViewStyle } from "react-native";
import { Button } from "react-native-elements";
import { buttonColors, textColors } from "../../styles/colors";
import { ButtonProps } from "../../types/props";
import LinearGradient from 'react-native-linear-gradient';


const NormalButton: React.FC<ButtonProps> = (props: ButtonProps) => {
    const label = buttonTitleStyle(props);
    const container = buttonContainerStyle(props);
    return (
        <Button 
            ViewComponent={LinearGradient} 
            linearGradientProps={{
                colors: [buttonColors[props.buttonColor1], buttonColors[props.buttonColor2]],
                start: {x: 0, y: 0},
                end: {x: 0.5, y: 0.5}
            }}
            title={props.title} 
            containerStyle={container} 
            titleStyle={label} 
            onPress={props.onPress}
        />
    );
}

const buttonContainerStyle = (props: ButtonProps): StyleProp<ViewStyle> => {
    return {
        alignSelf: 'center',
        justifyContent: 'center',
        width: props.width,
        height: props.height,
        borderRadius: props.borderRadius,
        padding: props.padding,
    }
};

const buttonTitleStyle = (props: ButtonProps): StyleProp<TextStyle> => {
    return {    
        color: textColors[props.textColor],
        width: '100%'
    }
}

export default NormalButton;