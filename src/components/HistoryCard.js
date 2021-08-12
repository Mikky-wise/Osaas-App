import React from "react";
import {View, Text, TouchableOpacity} from "react-native";
import {FontAwesome5} from '@expo/vector-icons';

export default function HistoryCard(props) {
    return (
        <TouchableOpacity
            style={{
            paddingHorizontal: 32,
            alignSelf: "center",
            marginTop: 20,
            backgroundColor: "#FFF",
            paddingBottom: 15,
            elevation: 1,
            width: '85%',
            borderRadius: 15,
            shadowColor: "#000000",
            shadowOpacity: 0.4,
            shadowRadius: 2,
            shadowOffset: {
                height: 1,
                width: 1
            }
        }}
            onPress={props.onPress}>

            

            <View
                style={{
                flexDirection: 'row',
                flexWrap: 'wrap',
                alignItems: 'flex-start',
                marginTop: 8
            }}>
                
                <View style={{
                    width: '50%'
                }}>
                    <Text
                        style={{
                        color: "#4b3ca7",
                        fontSize: 20
                    }}>
                        New York
                    </Text>
                </View>
                <View style={{
                    width: '50%'
                }}>
                    <Text
                        style={{
                        color: "#4b3ca7",
                        fontSize: 20
                    }}>
                        Washington
                    </Text>
                </View>
            </View>

            <View
                style={{
                flexDirection: 'row',
                flexWrap: 'wrap',
                alignItems: 'flex-start'
            }}>
                <View style={{
                    width: '50%'
                }}>
                    <Text
                        style={{
                        color: "#a2a2db",
                        fontSize: 12
                    }}>
                        12:00 PM
                    </Text>
                </View>
                <View style={{
                    width: '50%'
                }}>
                    <Text
                        style={{
                        color: "#a2a2db",
                        fontSize: 12
                    }}>
                        ETA: 50 mins
                    </Text>
                </View>
            </View>

            <View
                style={{
                flexDirection: 'row',
                flexWrap: 'wrap',
                alignItems: 'flex-start',
                marginTop: 8
            }}>
                <View style={{
                    width: '50%'
                }}>
                    <Text
                        style={{
                        color: "#4b3ca7",
                        fontSize: 16
                    }}>
                        Name :
                    </Text>
                </View>
                <View style={{
                    width: '50%'
                }}>
                    <Text
                        style={{
                        color: "#4b3ca7",
                        fontSize: 16
                    }}>
                        John Doe
                    </Text>
                </View>
            </View>

            <View
                style={{
                flexDirection: 'row',
                flexWrap: 'wrap',
                alignItems: 'flex-start',
                marginTop: 8
            }}>
                <View style={{
                    width: '50%'
                }}>
                    <Text
                        style={{
                        color: "#4b3ca7",
                        fontSize: 16
                    }}>
                        Contact :
                    </Text>
                </View>
                <View style={{
                    width: '50%'
                }}>
                    <Text
                        style={{
                        color: "#4b3ca7",
                        fontSize: 16
                    }}>
                        XXX XXXX XXX
                    </Text>
                </View>
            </View>

            <View style={{}}>
                <Text
                    style={{
                    fontSize: 17,
                    marginRight: -5,
                    color: "#a2a2db"
                }}>
                    - - - - - - - - - - - - - - - - - - - - - - -
                </Text>
            </View>
            <View
                style={{
                flexDirection: 'row',
                flexWrap: 'wrap',
                alignItems: 'flex-start'
            }}>
                <View style={{
                    width: '50%'
                }}>
                    <Text
                        style={{
                        color: "#4b3ca7",
                        fontSize: 16
                    }}>
                        Total Fare :
                    </Text>
                </View>
                <View style={{
                    width: '50%'
                }}>
                    <Text
                        style={{
                        color: "#4b3ca7",
                        fontSize: 16
                    }}>
                        $ 400
                    </Text>
                </View>
            </View>

        </TouchableOpacity>
    )
}
