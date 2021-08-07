import React from 'react'
import {View, Text, ImageBackground} from "react-native";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import ListCard from '../components/ListCard';

export default function Dashboard({navigation}) {
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
                        name="bike"
                        size={25}
                        color="#fff"
                        style={{
                        height: 26,
                        width: 26
                    }}/>

                </View>
            </View>

            <View
                style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                paddingHorizontal: 40
            }}>
                <Text
                    style={{
                    fontSize: 24,
                    color: "#FFF"
                }}>
                    NYC
                </Text>
                <Text
                    style={{
                    fontSize: 20,
                    color: "#a2a2db",
                    paddingHorizontal: 15
                }}>
                    - - - - - - - - - - - - - - - -
                </Text>
                <Text
                    style={{
                    fontSize: 24,
                    color: "#FFF"
                }}>
                    WA
                </Text>
            </View>

            <View
                style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                paddingHorizontal: 40
            }}>
                <Text style={{
                    color: "#a2a2db"
                }}>
                    New York
                </Text>
                <Text
                    style={{
                    color: "#a2a2db",
                    paddingLeft: "40%"
                }}>
                    Washington
                </Text>

            </View>

            <View
                style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                paddingHorizontal: 40
            }}>
                <Text
                    style={{
                    paddingHorizontal: 40,
                    fontSize: 20,
                    color: "#FFF",
                    alignItems: "center",
                    justifyContent: "center"
                }}>
                    20 June, 2021
                </Text>

            </View>

            <ListCard/>

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
                }}>Start Ride</Text>
            </View>
        </ImageBackground>
    )
}
