import React, {  } from "react";
import { StyleSheet } from "react-native";
import { Button } from "react-native";
import { ButtonProps } from "../../types/props";

const MediumButton: React.FC<ButtonProps> = (props: ButtonProps) => {
    return (
        <Button title={props.title} onPress={props.onPress}/>
    );
}

const styles = StyleSheet.create({
    button: {
        width: 
    }
});

export default MediumButton;