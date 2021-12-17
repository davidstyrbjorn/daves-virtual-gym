import React from "react"
import { Button, Text, View } from "react-native";
import { HomeProps } from "../../types/props";

const Home : React.FC<HomeProps> = (props: HomeProps) => {
    return (
        <View>
            <Text>
                This is my mexican home screen
            </Text>
            <Button title="To mexico" onPress={() => props.navigation.navigate(
                'Test'
            )}/>

        </View>
    );
}

export default Home;