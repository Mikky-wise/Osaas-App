import React from 'react'
import {View, Text, TouchableHighlight} from 'react-native';

export default function ModalCard(props) {
    return (
        <View
            style={{
            paddingHorizontal: 32,
            alignSelf: "center",
            marginTop: '50%',
            backgroundColor: "#FFF",
            height: '36%',
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
                paddingTop: 20,
                alignItems: "center"
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
                    paddingHorizontal: 12
                }}>
                    - - - - - - - - - - -
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
                alignItems: "center"
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
                    color: "#a2a2db",
                    paddingLeft: '52%',
                    fontSize: 12
                }}>
                    Washington
                </Text>
            </View>

            <View
                style={{
                flexDirection: "row",
                marginTop: 10,
                alignItems: "center"
            }}>
                <Text
                    style={{
                    fontSize: 16,
                    color: "#522289"
                }}>
                    09:00 AM
                </Text>
                <Text
                    style={{
                    color: "#522289",
                    paddingLeft: 70,
                    fontSize: 16
                }}>
                    21:00 PM
                </Text>

            </View>
            <Text
                style={{
                color: "#a2a2db",
                fontSize: 12
            }}>
                20June, 2021
            </Text>

            <View
                style={{
                flexDirection: "row",
                marginTop: 15,
                alignItems: "center"
            }}>
                <Text
                    style={{
                    color: "#a2a2db",
                    fontSize: 12
                }}>
                    Name
                </Text>
                
            </View>

            <View
                style={{
                flexDirection: "row",
                alignItems: "center"
            }}>
                <Text
                    style={{
                    color: "#522289",
                    fontSize: 16
                }}>
                    Alexson The Great
                </Text>

                
            </View>

            <Text
                style={{
                fontSize: 17,
                marginTop: -5,
                marginVertical: 16,
                color: "#a2a2db"
            }}>
                - - - - - - - - - - - - - - - - - - - - -
            </Text>
            <View
                style={{
                flexDirection: "row",
                marginTop: -20,
                alignItems: "center"
            }}>
                <Text
                    style={{
                    color: "#a2a2db",
                    fontSize: 12
                }}>
                    Order
                </Text>
                
            </View>

            <View
                style={{
                flexDirection: "row",
                alignItems: "center"
            }}>
                <Text
                    style={{
                    fontSize: 16,
                    color: "#522289"
                }}>
                    Total Price
                </Text>
                <Text
                    style={{
                    fontSize: 16,
                    color: "#4b3ca7",
                    paddingLeft: '52%'
                }}>
                    $400
                </Text>
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
                    Check Out
                </Text>
            </TouchableHighlight>

            <Text
                style={{
                color: "#a2a2db",
                alignSelf: "center",
                paddingLeft: 32,
                fontSize: 12,
                marginVertical: 16
            }}>
                Lorem ipsum dolor sit amet, consectetuer adipscing elit,
            </Text>
        </View>
    )
}
