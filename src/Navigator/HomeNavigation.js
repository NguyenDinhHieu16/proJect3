import React from 'react' 
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Home from "../Screen/HomeScreen/Home"

const HomeNavigation = () => { 
    const Tab = createBottomTabNavigator();

    return(
        <Tab.Navigator>
            <Tab.Screen
                name="Home"
                component={Home}
            />
        </Tab.Navigator>
    )
}