import React from "react";
import { Button, Text, TouchableHighlight, View } from "react-native";
import { normalButton } from "../../styles/button-styles";
import { ButtonProps } from "../../types/props";

const NormalButton: React.FC<ButtonProps> = (props: ButtonProps) => {
    const style = normalButton(props);
    return (
        <View style={style.container}>
            <TouchableHighlight style={style.button} onPress={props.onPress}>
                <Text style={style.text}>{props.title}</Text>
            </TouchableHighlight>
        </View>
    );
}

export default NormalButton;