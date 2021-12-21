import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import Exercise from "../components/pages/exercise";
// Import all 'pages' and give them routes
import Home from "../components/pages/home";
import { RootStackParamList } from "../types/props";

const Stack = createNativeStackNavigator<RootStackParamList>();

const Routes : React.FC<{}> = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                {/* Main screens, some of these may have sub-stacks */}
                <Stack.Screen name="Home" component={Home}/>
                <Stack.Screen name="Exercise" component={Exercise}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default Routes;