import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React, { useEffect, useRef, useState } from "react";
import { Animated, ScrollView, StyleSheet, View } from "react-native";
import { Text } from "react-native-elements";
import LinearGradient from "react-native-linear-gradient";
import { useRecoilState } from "recoil";
import { sessionState } from "../../recoil/atoms";
import { backgroundColors } from "../../styles/colors";
import { textStyle } from "../../styles/text-style";
import { RootStackParamList } from "../../types/props";
import NormalButton from "../atoms/button";

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;

const Home : React.FC<Props> = ({navigation}: Props) => {
    const [session, setSession] = useRecoilState(sessionState);

    // Standard buttons, train, create exercise and log
    const getButtons = () => {
        const topButtonString = session.selected_exercises_indices.length !== 0 ? 'Fortsätt' : 'Starta pass'
        const topButtonNavigation = session.selected_exercises_indices.length !== 0 ?  'ExerciseSession' : 'ExerciseSetup'
        return (
            <View>
                {/* This can be either start workout or continue if we have one in session */}
                <NormalButton 
                    buttonColor1="green1" buttonColor2="green2" width="65%" height={50} textColor="white" title={topButtonString} padding={0} borderRadius={10}
                    onPress={() => {
                        navigation.navigate(topButtonNavigation);
                    }}
                />
                <NormalButton 
                    buttonColor1='red1' buttonColor2="red2" width="65%" height={50} textColor="white" title="Skapa övning" padding={0} borderRadius={10}
                    onPress={() => {
                        navigation.navigate('ExerciseCreate');
                    }}
                />
                <NormalButton 
                    buttonColor1="lilac1" buttonColor2="lilac2" width="65%" height={50} textColor="white" title="LogN" padding={0} borderRadius={10}
                    onPress={() => {
                        navigation.navigate("Log");
                    }}
                />
            </View>
        );
    }

    return (
    <LinearGradient colors={[backgroundColors['blue2'], backgroundColors['blue1']]} style={styles.linearGradient}>
        {/* Hack to get the footer to the bottom and keep the rest in the middle, empty view with flex = 1 */}
        <View style={{flex: 1}}></View>
        <Text style={[styles.headerText, textStyle('white', 32).text]}>
            Dave's Gym
        </Text>
        {getButtons()}
        <View style={styles.footer}>
            <Text style={[textStyle('dark-gray', 14).text, styles.footerText]}> 
                Av David Styrbjörn
            </Text>
        </View>
    </LinearGradient>
    );
}

const styles = StyleSheet.create({
    linearGradient: {
        display: 'flex',
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
    },
    headerText: {
        textAlign: 'center',
        paddingVertical: 8,
    },
    footer: {
        flex: 1,
        justifyContent: 'flex-end',
        alignContent: 'flex-end'
    },
    footerText: {
        textAlign: 'center'
    }
});

export default Home;