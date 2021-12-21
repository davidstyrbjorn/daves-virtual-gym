import { useNavigation } from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React from "react";
import { GestureResponderEvent, StyleSheet, View } from "react-native";
import { Text } from "react-native-elements";
import LinearGradient from "react-native-linear-gradient";
import { RootStackParamList } from "../../types/props";
import NormalButton from "../atoms/button";
import Graphs from "../molecules/graphs";

const Home : React.FC<{}> = () => {

    const navigation = useNavigation();

    const getTopSectionJSX = () => {
        return (
            <View style={styles.topSection}>
                <Text h3 style={styles.headerText}>
                    Dave's Gym
                </Text>
                <NormalButton 
                    buttonColor="red1" width="50%" height={45} textColor="white" title="Skapa övning" padding={6} borderRadius={10}
                    onPress={(event: GestureResponderEvent) => {
                        console.log("TJA");
                    }}
                />
                <NormalButton 
                    buttonColor="green1" width="50%" height={45} textColor="white" title="Starta pass" padding={6} borderRadius={10}
                    onPress={(event: GestureResponderEvent) => {
                        navigation.navigate({key: "Exercise"});
                    }}
                />
            </View>
        );
    }

    return (
    <LinearGradient colors={['#1DC9FF', '#0046AE']} style={styles.linearGradient}>
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
        color: 'white',
        fontWeight: 'normal'
    },
    topSection: {
        flex: 1,
    }, 
});

export default Home;