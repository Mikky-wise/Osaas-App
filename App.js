// In App.js in a new project

import * as React from 'react';
import {View, Text, Button} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from './src/screens/HomeScreen';
import LoginScreen from './src/screens/LoginScreen';
import Dashboard from './src/screens/Dashboard';
import Navigator from './src/screens/Navigator';

function DetailsScreen() {
    return (
        <View
            style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center'
        }}>
            <Text>Details Screen</Text>
        </View>
    );
}

const Stack = createStackNavigator();

function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen name="Home" component={HomeScreen}/>
                <Stack.Screen name="Details" component={LoginScreen}/>
                <Stack.Screen name="Dashboard" component={Navigator}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}
export default App;