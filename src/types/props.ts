import { GestureResponderEvent } from "react-native";
import { ButtonColors, NeutralColors, TextColors } from "../styles/colors";

export type HomeProps = {

}

/* Used for all buton components */
export type ButtonProps = {
    title: string;
    onPress: (event: GestureResponderEvent) => void;
    width: number | string;
    height: number | string;
    buttonColor: ButtonColors;
    textColor: TextColors;
}