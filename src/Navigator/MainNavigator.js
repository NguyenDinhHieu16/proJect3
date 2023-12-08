import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from 'react';
import LoginScreen from "../Screen/Register/LoginScreen";
import SignUpScreen from "../Screen/Register/SignUpScreen";
import Home from "../Screen/HomeScreen/Home";
import FlashScreen from "../Screen/Register/FlashScreen";

const Stack = createNativeStackNavigator();

const MainNavigator = () => {
    return(
        <Stack.Navigator>
            <Stack.Screen
                name='Flash'
                component={FlashScreen}
                options={{headerShown: false}}
            />
            <Stack.Screen
                name='Login'
                component={LoginScreen}
                options={{headerShown: false}}
            />
            <Stack.Screen
                name='SignUp'
                component={SignUpScreen}
                // options={{headerShown: false}}
            />
            <Stack.Screen
                name='Home'
                component={Home}
                options={{headerShown: false}}
            />
        </Stack.Navigator>
    )
}

export default MainNavigator;
