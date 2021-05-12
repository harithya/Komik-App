import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import BottomNavigation from '../routes/BottomNavigation';

const Stack = createStackNavigator();
const PageNavigation = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={BottomNavigation} />
        </Stack.Navigator>
    )
}

export default PageNavigation;