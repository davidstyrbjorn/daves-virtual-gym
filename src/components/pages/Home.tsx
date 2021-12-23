import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React from "react";
import { GestureResponderEvent, StyleSheet, View } from "react-native";
import { Text } from "react-native-elements";
import LinearGradient from "react-native-linear-gradient";
import { backgroundColors } from "../../styles/colors";
import { textStyle } from "../../styles/text-style";
import { RootStackParamList } from "../../types/props";
import NormalButton from "../atoms/button";
import Graphs from "../molecules/graphs";

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;

const Home : React.FC<Props> = ({navigation}: Props) => {

    const getTopSectionJSX = () => {
        return (
            <View style={[styles.topSection]}>
                <Text style={[styles.headerText, textStyle('white', 32).text]}>
                    Dave's Gym
                </Text>
                <NormalButton 
                    buttonColor1='red1' buttonColor2="red2" width="65%" height={80} textColor="white" title="Skapa övning" padding={0} borderRadius={10}
                    onPress={() => {
                        console.log("TJA");
                    }}
                />
                <NormalButton 
                    buttonColor1="green1" buttonColor2="green2" width="65%" height={80} textColor="white" title="Starta pass" padding={0} borderRadius={10}
                    onPress={() => {
                        navigation.navigate("ExerciseSetup");
                    }}
                />
            </View>
        );
    }

    return (
    <LinearGradient colors={[backgroundColors['blue1'], backgroundColors['blue2']]} style={styles.linearGradient}>
        {/* TOP SECTION INCLUDES NAVIGATION BUTTONS & TITLE */}
        {getTopSectionJSX()}
        {/* GRAPHS SECTION, BOTH STATS + PROGRESS */}
        <Graphs/>
    </LinearGradient>
    );
}

const styles = StyleSheet.create({
    linearGradient: {
        display: 'flex',
        flex: 1,
        flexDirection: 'column',
    },
    headerText: {
        textAlign: 'center',
        paddingVertical: 8,
    },
    topSection: {
        flex: 1,
    }, 
});

export default Home;