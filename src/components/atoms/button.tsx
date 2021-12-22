import React from "react";
import { StyleProp, TextStyle, View, ViewStyle } from "react-native";
import { Button } from "react-native-paper";
import { Text } from "react-native-paper/lib/typescript/components/Avatar/Avatar";
import { buttonColors, textColors } from "../../styles/colors";
import { ButtonProps } from "../../types/props";

const NormalButton: React.FC<ButtonProps> = (props: ButtonProps) => {
    const label = buttonTitleStyle(props);
    const button = buttonStyle(props);
    const container = buttonContainerStyle(props);
    return (
        <View style={container}>
            <Button 
                mode="contained" 
                color={buttonColors[props.buttonColor]} 
                onPress={props.onPress} 
                labelStyle={label}
            >
                {props.title}
            </Button>
        </View>
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

const buttonStyle = (props: ButtonProps): StyleProp<ViewStyle> => {
    return {
    }
}

const buttonTitleStyle = (props: ButtonProps): StyleProp<TextStyle> => {
    return {    
        color: textColors[props.textColor],
        width: '100%'
    }
}

export default NormalButton;