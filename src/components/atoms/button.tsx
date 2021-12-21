import React from "react";
import { View } from "react-native";
import { Button } from "react-native-elements";
import { buttonContainerStyle, buttonStyle, buttonTitleStyle } from "../../styles/button-styles";
import { buttonColors } from "../../styles/colors";
import { ButtonProps } from "../../types/props";

const NormalButton: React.FC<ButtonProps> = (props: ButtonProps) => {
    const container = buttonContainerStyle(props);
    const title = buttonTitleStyle(props);
    const button = buttonStyle(props);
    return (
        <View style={{padding: props.padding}}>
            <Button title={props.title} containerStyle={container} titleStyle={title} buttonStyle={button} onPress={props.onPress}/>
        </View>
    );
}

export default NormalButton;