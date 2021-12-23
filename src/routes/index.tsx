import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import ExerciseSession from "../components/pages/exercise-session";
import ExerciseSetup from "../components/pages/exercise-setup";
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
                <Stack.Screen name="ExerciseSetup" component={ExerciseSetup}/>
                <Stack.Screen name="ExerciseSession" component={ExerciseSession}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default Routes;