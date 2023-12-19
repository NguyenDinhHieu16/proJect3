import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from 'react';
import LoginScreen from "../Screen/Register/LoginScreen";
import SignUpScreen from "../Screen/Register/SignUpScreen";
import Home from "../Screen/HomeScreen/Home";
import FlashScreen from "../Screen/Register/FlashScreen";
import SignUpScreenPW from "../Screen/Register/SignUpScreenPW";
import SignUpScreenName from "../Screen/Register/SignUpScreenName";

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
                name='SignUpEmail'
                component={SignUpScreen}
                options={{headerShown: false}}
            />
            <Stack.Screen
                name='Home'
                component={Home}
                options={{headerShown: false}}
            />
            <Stack.Screen
                name='SignUpPW'
                component={SignUpScreenPW}
                options={{headerShown: false}}
            />
            <Stack.Screen
                name='SignUpName'
                component={SignUpScreenName}
                options={{headerShown: false}}
            />
        </Stack.Navigator>
    )
}

export default MainNavigator;
