import React from "react"
import { GestureResponderEvent, StyleSheet, View } from "react-native";
import { HomeProps } from "../../types/props";
import NormalButton from "../atoms/button";
import LinearGradient from "react-native-linear-gradient";
import { Text } from "react-native-elements";

const Home : React.FC<HomeProps> = (props: HomeProps) => {
    return (
    <LinearGradient colors={['#1DC9FF', '#0046AE']}
            style={styles.linearGradient}>
        <View style={styles.topSection}>
            <Text h3 style={styles.headerText}>
                Dave's Gym
            </Text>
            <NormalButton 
                buttonColor="red1" width="50%" height={45} textColor="white" title="Skapa pass" padding={6} borderRadius={10}
                onPress={(event: GestureResponderEvent) => {
                    console.log("TJA");
                }}
            />
            <NormalButton 
                buttonColor="green1" width="50%" height={45} textColor="white" title="Starta pass" padding={6} borderRadius={10}
                onPress={(event: GestureResponderEvent) => {
                    console.log("TJA");
                }}
            />
        </View>
            
        <View style={styles.graphSection}>

        </View>

        <View style={styles.progressSection}>

        </View>
    </LinearGradient>
    );
}

const styles = StyleSheet.create({
    linearGradient: {
        flex: 1,
        flexDirection: 'column',
    },
    headerText: {
        textAlign: 'center',
        paddingVertical: 8,
        color: 'white'
    },
    topSection: {
        flex: 1,
        color: 'red',
    }, 
    graphSection: {
        flex: 2,
    },
    progressSection: {
        flex: 3,
    },
    buttonContainer: {
        width: '50%',
        alignSelf: 'center',
        
    },
});

export default Home;