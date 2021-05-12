import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Home, Gendre, Favorit, More } from '../pages';
import Icon from 'react-native-vector-icons/Feather';
import { Color } from '../utils';

const Tab = createBottomTabNavigator();
const BottomNavigation = () => {
    return (
        <Tab.Navigator
            initialRouteName="Home"
            tabBarOptions={{
                activeTintColor: Color.primary,
                inactiveTintColor: Color.font,
                style: {
                    height: 65,
                    paddingBottom: 5
                },
                labelStyle: {
                    fontSize: 12,
                    marginTop: 0,
                    marginBottom: 5,
                    fontFamily: 'Nunito-Regular'
                }
            }}>
            <Tab.Screen name="Home" component={Home}
                options={{
                    tabBarIcon: ({ color }) => {
                        return (<Icon name="layout" style={{ marginTop: 5 }} size={20} color={color} />)
                    }
                }} />
            <Tab.Screen name="Gendre" component={Gendre}
                options={{
                    tabBarIcon: ({ color }) => {
                        return (<Icon name="gitlab" style={{ marginTop: 5 }} size={20} color={color} />)
                    }
                }} />
            <Tab.Screen name="Favorit" component={Favorit}
                options={{
                    tabBarIcon: ({ color }) => {
                        return (<Icon name="heart" style={{ marginTop: 5 }} size={20} color={color} />)
                    }
                }} />
            <Tab.Screen name="More" component={More}
                options={{
                    tabBarIcon: ({ color }) => {
                        return (<Icon name="more-horizontal" style={{ marginTop: 5 }} size={20} color={color} />)
                    }
                }} />
        </Tab.Navigator>
    )
}

export default BottomNavigation;