import React from 'react'
import {View, Text, Button, Image} from 'react-native';

export default function HomeScreen({navigation}) {
    return (
        <View
            style={{
            alignItems: 'center',
            height: '100%',
            backgroundColor: '#FFF'
        }}>
            <Image
                source
                ={require('../images/home.png')}
                style={{
                width: "100%",
                height: "53%"
            }}/>
            <Text
                style={{
                fontSize: 30,
                marginTop: 5,
                alignSelf: "center"
            }}>OSAAS Delivery</Text>

            <Text
                style={{
                marginHorizontal: 55,
                textAlign: 'center',
                marginTop: 5,
                opacity: 0.4
            }}>
                The best way to deliver.
            </Text>
            <Text
                style={{
                marginHorizontal: 55,
                textAlign: 'center',
                marginTop: 5,
                opacity: 0.8
            }}>
                We provide convinient, superior quality delivery service for your parcels.
            </Text>

            <View
                style={{
                alignItems: "center",
                justifyContent: "center",
                marginTop: 55,
                padding: 15,
                backgroundColor: "#6C63FF",
                width: "90%",
                borderRadius: 23
            }}>
                <Text
                    style={{
                    fontSize: 16,
                    color: "white"
                }}
                    onPress={() => navigation.navigate('Details')}>Get Started?</Text>
            </View>

        </View>
    )
}
