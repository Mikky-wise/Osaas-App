import React, {useState} from 'react'
import {View, Text, TouchableHighlight} from 'react-native';

export default function OrderDetails(props) {

    const [counter,
        setcounter] = useState(0)
    return (
        <View
            style={{
            paddingHorizontal: 32,
            alignSelf: "center",
            marginTop: '50%',
            backgroundColor: "#FFF",
            height: '37%',
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
                        20'June, 2021
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
                    Pickup Address
                </Text>

            </View>

            <View
                style={{
                flexDirection: "row",
                alignItems: "center"
            }}>
                <Text
                    style={{
                    color: "#4b3ca7",
                    fontSize: 16
                }}>
                    Address Line 1,{"\n"}
                    Address Line 2,{"\n"}
                    City Name, Pin Code
                </Text>

            </View>

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
                    Delivery Address
                </Text>

            </View>

            <View
                style={{
                flexDirection: "row",
                alignItems: "center"
            }}>
                <Text
                    style={{
                    color: "#4b3ca7",
                    fontSize: 16
                }}>
                    Address Line 1,{"\n"}
                    Address Line 2,{"\n"}
                    City Name, Pin Code
                </Text>

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

            <TouchableHighlight
                underlayColor="#6C63FF"
                onPress={() => setcounter(counter + 1)}
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
                    {(() => {
                        if (counter % 4 == 0) {
                            return ("Go to pickup")
                        } else if (counter % 4 == 1) {
                            return ("Item(s) Picked Up")
                        } else if (counter % 4 == 2) {
                            return ("Head to delivery")
                        } else if(counter % 4 == 3){
                            return ("Mark as delivered")
                        }
                    })()}

                </Text>
            </TouchableHighlight>

            <TouchableHighlight
                underlayColor="#6C63FF"
                onPress={props.onPress}
                style={{
                width: 200,
                marginLeft: 5,
                elevation: 2,
                marginTop: 5,
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
                    Close
                </Text>
            </TouchableHighlight>

        </View>
    )
}
