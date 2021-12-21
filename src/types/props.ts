import { GestureResponderEvent } from "react-native";
import { ButtonColors, NeutralColors, TextColors } from "../styles/colors";

export type RootStackParamList = {
    Home: undefined;
    Exercise: undefined;
}

/* Used for all buton components */
export type ButtonProps = {
    title: string;
    onPress: (event: GestureResponderEvent) => void;
    width: number | string;
    height: number | string;
    buttonColor: ButtonColors;
    textColor: TextColors;
    padding: number;
    borderRadius: number;
}