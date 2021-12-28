import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import ExerciseCreate from "../components/pages/exercise-create";
import ExerciseSession from "../components/pages/exercise-session";
import ExerciseSetup from "../components/pages/exercise-setup";

// Import all 'pages' and give them routes
import Home from "../components/pages/home";
import Log from "../components/pages/log";
import PostExercise from "../components/pages/post-exercise";
import { RootStackParamList } from "../types/props";

const Stack = createNativeStackNavigator<RootStackParamList>();

const Routes : React.FC<{}> = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                {/* Main screens, some of these may have sub-stacks */}
                <Stack.Screen name="Home" component={Home} options={{ headerShown: false }}/>
                <Stack.Screen name='ExerciseCreate' component={ExerciseCreate} options={{headerShown: false}} />
                <Stack.Screen name="ExerciseSetup" component={ExerciseSetup} options={{ headerShown: false }}/>
                <Stack.Screen name="ExerciseSession" component={ExerciseSession} options={{ headerShown: false }}/>
                <Stack.Screen name="PostExercise" component={PostExercise} options={{ headerShown: false }} />
                <Stack.Screen name="Log" component={Log} options={{ headerShown: false }} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default Routes;