import React from "react"
import { Button, Text, View } from "react-native";
import { TestProps } from "../../types/props";

const Test : React.FC<TestProps> = (props: TestProps) => {
    return (
        <View>
            <Text>
                Welcome to mexico
            </Text>
            <Button title="Back to mexico" onPress={() => console.log("Hello im in mexico")}>

            </Button>
        </View>
    );
}

export default Test;