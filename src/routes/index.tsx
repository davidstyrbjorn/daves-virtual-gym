import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// Import all 'pages' and give them routes
import Home from "../components/pages/Home";

const Stack = createNativeStackNavigator();

const Routes : React.FC<{}> = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                {/* Main screens, some of these may have sub-stacks */}
                <Stack.Screen name="Home" component={Home}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default Routes;