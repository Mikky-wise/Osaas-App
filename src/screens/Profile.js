import React from 'react'
import {ImageBackground, View, Image, Text, TextInput} from 'react-native'

import Icon from "@expo/vector-icons/MaterialCommunityIcons";

const Profile = () => {
    return (
        <ImageBackground
            source={require("../images/back2.png")}
            style={{
            height: "100%",
            width: "100%"
        }}>
            <View
                style={{
                width: "100%",
                marginTop: 50,
                marginBottom: 20,
                justifyContent: "center",
                alignItems: "center"
            }}>
                <View
                    style={{
                    width: 80,
                    height: 80,
                    borderRadius: 50,
                    backgroundColor: "#5facdb",
                    justifyContent: "center",
                    alignItems: "center"
                }}>
                    <Icon
                        name="account-circle-outline"
                        size={32}
                        color="#fff"
                        style={{
                        height: 33,
                        width: 33
                    }}/>

                </View>
            </View>
            <View style={{
                height: "100%"
            }}>

                <Text
                    style={{
                    fontSize: 30,
                    color: "#fff",
                    alignSelf: "center"
                }}>Agent Name</Text>

                <Text
                    style={{
                    marginHorizontal: 55,
                    color: "#fff",
                    textAlign: 'center',
                    marginTop: 5,
                    opacity: 0.9
                }}>
                    OSAAS - The best way to deliver.
                </Text>
                <Text
                    style={{
                    marginHorizontal: 55,
                    textAlign: 'center',
                    marginTop: 15,
                    color: "#fff",
                    opacity: 0.8
                }}>
                    A breif tagline choosen by Agent about themselves, or some placeholder text.
                </Text>
                <View
                    style={{
                    flexDirection: "row",
                    alignItems: "center",
                    marginHorizontal: 55,
                    borderWidth: 2,
                    marginTop: '28%',
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
                    marginHorizontal: 55,
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
                    marginHorizontal: 55,
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
                    marginHorizontal: 55,
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
                    marginHorizontal: 55,
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
                    }}>Update Profile</Text>
                </View>

            </View>
        </ImageBackground>
    )
}

export default Profile
