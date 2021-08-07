import React from 'react';
import {Text, View, Image, TextInput} from 'react-native';
import Icon from '@expo/vector-icons/AntDesign';

export default function LoginScreen({navigation}) {
    return (
        <View
            style={{
            backgroundColor: "#FFF",
            height: "100%"
        }}>
            <Image
                source
                ={require('../images/login.png')}
                style={{
                width: "100%",
                height: "43%"
            }}/>
            <Text
                style={{
                fontSize: 30,
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
                flexDirection: "row",
                alignItems: "center",
                marginHorizontal: 55,
                borderWidth: 2,
                marginTop: 50,
                paddingHorizontal: 10,
                borderColor: "#6C63FF",
                borderRadius: 23,
                paddingVertical: 2
            }}>
                <Icon name="mail" color="#6C63FF" size={24}/>
                <TextInput
                    placeholder="Email"
                    style={{
                    paddingHorizontal: 10,
                    width: "90%"
                }}/>

            </View>
            <View
                style={{
                flexDirection: "row",
                alignItems: "center",
                marginHorizontal: 55,
                borderWidth: 2,
                marginTop: 15,
                paddingHorizontal: 10,
                borderColor: "#6C63FF",
                borderRadius: 23,
                paddingVertical: 2
            }}>
                <Icon name="form" color="#6C63FF" size={24}/>
                <TextInput
                    placeholder="Password"
                    style={{
                    paddingHorizontal: 10,
                    width: "90%"
                }}/>

            </View>

            <View
                style={{
                marginHorizontal: 55,
                alignItems: "center",
                justifyContent: "center",
                marginTop: 30,
                backgroundColor: "#6C63FF",
                paddingVertical: 10,
                borderRadius: 23
            }}>
                <Text style={{
                    color: "white"
                }}>Login</Text>
            </View>

            <Text
                onPress={() => navigation.navigate('Dashboard')}
                style={{
                alignSelf: "center",
                color: "#6C63FF",
                paddingVertical: 30
            }}>Dashboard</Text>
        </View>
    )
}
