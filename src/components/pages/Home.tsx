import React from "react"
import { Button, GestureResponderEvent, Text, View } from "react-native";
import { HomeProps } from "../../types/props";
import NormalButton from "../atoms/button";

const Home : React.FC<HomeProps> = (props: HomeProps) => {
    return (
        <View>
            <Text>
                This is my mexican home screen
            </Text>
            <NormalButton 
                    buttonColor="red2" height={64}  width={16} onPress={(event: GestureResponderEvent) => {
                        console.log("TJA");
                    }}
                textColor="black" title="WHORE"
            />
        </View>
    );
}

export default Home;