import React, {useState} from 'react'
import {View, Text, TouchableOpacity} from 'react-native'

const HistoryCard = (props) => {

    return (
        <TouchableOpacity
            onPress={props.onPress}
            style={{
            paddingHorizontal: 32,
            alignSelf: "center",
            marginTop: 20,
            backgroundColor: "#FFF",
            height: '32%',
            elevation: 1,
            width: '90%',
            borderRadius: 15
        }}>
            <View
                style={{
                flexDirection: "row",
                paddingTop: 20,
                alignSelf: "center"
            }}>
                <Text
                    style={{
                    color: "#4b3ca7",
                    fontSize: 20
                }}>
                    NYC
                </Text>

                <Text
                    style={{
                    fontSize: 20,
                    color: "#a2a2db",
                    paddingHorizontal: 14
                }}>
                    {" "}
                    - - - - - - - - - - {" "}
                </Text>
                <Text
                    style={{
                    color: "#4b3ca7",
                    fontSize: 20
                }}>
                    IDN
                </Text>
            </View>

            <View
                style={{
                flexDirection: "row",
                marginTop: -5,
                alignItems: "center",
                alignSelf: "center"
            }}>
                <Text
                    style={{
                    color: "#a2a2db",
                    fontSize: 11
                }}>
                    New York
                </Text>
                <Text
                    style={{
                    fontSize: 11,
                    color: "#a2a2db",
                    paddingLeft: '44%'
                }}>
                    Washington
                </Text>
            </View>

            <View
                style={{
                flexDirection: "row",
                marginTop: 10,
                alignItems: "center",
                justifyContent: "center"
            }}>
                <Text
                    style={{
                    color: "#522289",
                    fontSize: 16
                }}>
                    09:00 AM
                </Text>

                <Text
                    style={{
                    color: "#a2a2db",
                    fontSize: 12,
                    paddingLeft: '44%'
                }}>
                    20 June, 2021
                </Text>
            </View>

            <Text
                style={{
                fontSize: 17,
                marginRight: -5,
                marginVertical: 8,
                color: "#a2a2db",
                alignSelf: "center"
            }}>
                - - - - - - - - - - - - - - - - - - - - - - -
            </Text>

            <View
                style={{
                flexDirection: "row",
                marginTop: -8,
                alignItems: "center",
                justifyContent: "center"
            }}>
                <Text
                    style={{
                    color: "#522289",
                    fontSize: 16
                }}>
                    Total Amount
                </Text>
                <Text
                    style={{
                    color: "#4b3ca7",
                    paddingLeft: "40%",
                    fontSize: 16
                }}>
                    $400
                </Text>
            </View>
        </TouchableOpacity>
    )
}

export default HistoryCard