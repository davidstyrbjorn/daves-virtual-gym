import React from "react"
import { Button, GestureResponderEvent, StyleSheet, Text, View } from "react-native";
import { HomeProps } from "../../types/props";
import NormalButton from "../atoms/button";

const Home : React.FC<HomeProps> = (props: HomeProps) => {
    return (
        <View style={styles.container}>
            <View style={styles.topSection}>
                <Text>
                    Dave's Gym
                </Text>
                    {/* <Button onPress={() => {}} title='tja' ></Button> */}
                <NormalButton 
                    buttonColor="red1" width="50%" height="100%" textColor="white" title="Skapa pass" 
                    onPress={(event: GestureResponderEvent) => {
                        console.log("TJA");
                    }}
                />
            {/* <NormalButton 
                    buttonColor="green1" height={64}  width={16} onPress={(event: GestureResponderEvent) => {
                        console.log("TJA");
                    }}
                    textColor="white" title="Starta pass" 
                    /> */}
            </View>
            
            <View style={styles.graphSection}>

            </View>

            <View style={styles.progressSection}>

            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        padding: 10
    },
    topSection: {
        flex: 2,
    }, 
    graphSection: {
        flex: 2,
        backgroundColor: 'red',
    },
    progressSection: {
        flex: 3,
        backgroundColor: 'green'
    },
    buttonContainer: {
        width: '50%',
        alignSelf: 'center',
        
    }
});

export default Home;