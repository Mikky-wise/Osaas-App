import React, {useState} from 'react'
import {View, Text, TouchableHighlight, TextInput} from 'react-native';
import Icon from "@expo/vector-icons/MaterialCommunityIcons";

export default function ProfileUpdate(props) {

    const [counter,
        setcounter] = useState(0)
    return (
        <View
            style={{
            paddingHorizontal: 32,
            alignSelf: "center",
            marginTop: '50%',
            backgroundColor: "#FFF",
            height: '40%',
            elevation: 1,
            width: '80%',
            borderRadius: 15,
            shadowColor: "#000000",
            shadowOpacity: 0.8,
            shadowRadius: 2,
            shadowOffset: {
                height: 1,
                width: 1
            }
        }}>

            <View
                style={{
                flexDirection: "row",
                alignItems: "center",
                borderWidth: 2,
                marginTop: '5%',
                paddingHorizontal: 10,
                borderColor: "#6C63FF",
                borderRadius: 23,
                paddingVertical: 2
            }}>
                <Icon name="pencil-outline" color="#6C63FF" size={24}/>
                <TextInput
                    placeholder="Agent Name"
                    style={{
                    paddingHorizontal: 10,
                    width: "90%"
                }}/>
            </View>

            <View
                style={{
                flexDirection: "row",
                alignItems: "center",
                borderWidth: 2,
                marginTop: '2%',
                paddingHorizontal: 10,
                borderColor: "#6C63FF",
                borderRadius: 23,
                paddingVertical: 2
            }}>
                <Icon name="cellphone-iphone" color="#6C63FF" size={24}/>
                <TextInput
                    placeholder="Contact Number"
                    style={{
                    paddingHorizontal: 10,
                    width: "90%"
                }}/>
            </View>

            <View
                style={{
                flexDirection: "row",
                alignItems: "center",
                borderWidth: 2,
                marginTop: '2%',
                paddingHorizontal: 10,
                borderColor: "#6C63FF",
                borderRadius: 23,
                paddingVertical: 2
            }}>
                <Icon name="cake" color="#6C63FF" size={24}/>
                <TextInput
                    placeholder="Data of birth"
                    style={{
                    paddingHorizontal: 10,
                    width: "90%"
                }}/>
            </View>

            <View
                style={{
                flexDirection: "row",
                alignItems: "center",
                borderWidth: 2,
                marginTop: '2%',
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
                borderWidth: 2,
                marginTop: '2%',
                paddingHorizontal: 10,
                borderColor: "#6C63FF",
                borderRadius: 23,
                paddingVertical: 2
            }}>
                <Icon name="nature-people" color="#6C63FF" size={24}/>
                <TextInput
                    placeholder="Gender"
                    style={{
                    paddingHorizontal: 10,
                    width: "90%"
                }}/>
            </View>

            <View
                style={{
                flexDirection: "row",
                alignItems: "center",
                borderWidth: 2,
                marginTop: '2%',
                paddingHorizontal: 10,
                borderColor: "#6C63FF",
                borderRadius: 23,
                paddingVertical: 2,
                height: "10%"
            }}>
                <Icon name="google-maps" color="#6C63FF" size={24}/>
                <TextInput
                    multiline={true}
                    numberOfLines={4}
                    placeholder="Address"
                    style={{
                    paddingHorizontal: 10,
                    width: "90%"
                }}/>
            </View>

            <TouchableHighlight
                underlayColor="#6C63FF"
                onPress={props.onPress}
                style={{
                width: 200,
                marginLeft: 5,
                elevation: 2,
                marginTop: 25,
                backgroundColor: "#6C63FF",
                paddingVertical: 13,
                borderRadius: 25,
                alignSelf: "center"
            }}>
                <Text
                    style={{
                    color: "#FFF",
                    textAlign: "center",
                    fontSize: 18
                }}>
                    Save
                </Text>
            </TouchableHighlight>

        </View>
    )
}
