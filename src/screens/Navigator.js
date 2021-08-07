import * as React from 'react';
import {Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {MaterialCommunityIcons} from '@expo/vector-icons';
import Dashboard from './Dashboard';
import History from './History';
import Profile from './Profile';




const Tab = createMaterialBottomTabNavigator();

function MyTabs() {
    return (
        <Tab.Navigator
            initialRouteName="Feed"
            activeColor="#fff"
            labelStyle={{
            fontSize: 12
        }}
            barStyle={{
            backgroundColor: '#6C63FF'
        }}>
            <Tab.Screen
                name="Home"
                component={Dashboard}
                options={{
                tabBarLabel: 'Home',
                tabBarIcon: ({color}) => (<MaterialCommunityIcons name="home" color={color} size={26}/>)
            }}/>
            <Tab.Screen
                name="History"
                component={History}
                options={{
                tabBarLabel: 'History',
                tabBarIcon: ({color}) => (<MaterialCommunityIcons name="clock" color={color} size={26}/>)
            }}/>
            <Tab.Screen
                name="Profile"
                component={Profile}
                options={{
                tabBarLabel: 'Profile',
                tabBarIcon: ({color}) => (<MaterialCommunityIcons name="account" color={color} size={26}/>)
            }}/>
        </Tab.Navigator>
    );
}

export default function Navigator() {
    return (
        <NavigationContainer independent={true}>
            <MyTabs/>
        </NavigationContainer>
    );
}
