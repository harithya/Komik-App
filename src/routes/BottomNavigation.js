import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Home, Gendre, Favorit, More } from '../pages';

const Tab = createBottomTabNavigator();
const BottomNavigation = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="Gendre" component={Gendre} />
            <Tab.Screen name="Favorit" component={Favorit} />
            <Tab.Screen name="More" component={More} />
        </Tab.Navigator>
    )
}

export default BottomNavigation;