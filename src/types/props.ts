import { FlexStyle, GestureResponderEvent } from "react-native";

/* Used for all buton components */
export type ButtonProps = {
    title: string;
    onPress: (event: GestureResponderEvent) => void;
    width: string | null;
}