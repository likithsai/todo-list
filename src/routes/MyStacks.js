import React from 'react';
import Home from '../screens/Home';
import Settings from '../screens/Settings';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const MyStacks = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Settings" component={Settings} />
        </Stack.Navigator>
    )
}

export default MyStacks