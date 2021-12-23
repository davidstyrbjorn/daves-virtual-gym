import { ButtonColors, TextColors } from "../styles/colors";

export type RootStackParamList = {
    Home: undefined;
    ExerciseSetup: undefined;
    ExerciseSession: undefined;
}

/* Used for all buton components */
export type ButtonProps = {
    title: string;
    onPress: () => void;
    width: number | string;
    height: number | string;
    buttonColor1: ButtonColors;
    buttonColor2: ButtonColors;
    textColor: TextColors;
    padding: number;
    borderRadius: number;
}