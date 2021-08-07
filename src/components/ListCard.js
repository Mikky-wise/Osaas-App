import React from "react";
import {View, Text, TouchableOpacity} from "react-native";

export default function ListCard({navigation}) {
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
            borderRadius: 15
        }}>
            <View
                style={{
                flexDirection: "row",
                paddingTop: 20
            }}>
                <Text
                    style={{
                    color: "#4b3ca7",
                    fontSize: 20
                }}>
                    Things to Pickup
                </Text>

            </View>

            <Text
                style={{
                color: "#a2a2db",
                fontSize: 12
            }}>
                20'June, 2021
            </Text>

            <View
                style={{
                flexDirection: "row",
                marginTop: 10,
                alignItems: "center"
            }}>
                <Text
                    style={{
                    color: "#522289",
                    fontSize: 16
                }}>
                    Item - 1
                </Text>

                <Text
                    style={{
                    color: "#522289",
                    paddingLeft: "60%",
                    fontSize: 16
                }}>
                    x 3
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
                    color: "#522289",
                    fontSize: 16
                }}>
                    Item - 2
                </Text>

                <Text
                    style={{
                    color: "#522289",
                    paddingLeft: "60%",
                    fontSize: 16
                }}>
                    x 6
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
                    color: "#522289",
                    fontSize: 16
                }}>
                    Item - 3
                </Text>

                <Text
                    style={{
                    color: "#522289",
                    paddingLeft: "60%",
                    fontSize: 16
                }}>
                    x 6
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
                    color: "#522289",
                    fontSize: 16
                }}>
                    Item - 4
                </Text>

                <Text
                    style={{
                    color: "#522289",
                    paddingLeft: "60%",
                    fontSize: 16
                }}>
                    x 6
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
                    color: "#522289",
                    fontSize: 16
                }}>
                    Item - 5
                </Text>

                <Text
                    style={{
                    color: "#522289",
                    paddingLeft: "60%",
                    fontSize: 16
                }}>
                    x 6
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
                    color: "#522289",
                    fontSize: 16
                }}>
                    Item - 6
                </Text>

                <Text
                    style={{
                    color: "#522289",
                    paddingLeft: "60%",
                    fontSize: 16
                }}>
                    x 6
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
                    color: "#522289",
                    fontSize: 16
                }}>
                    Item - 7
                </Text>

                <Text
                    style={{
                    color: "#522289",
                    paddingLeft: "60%",
                    fontSize: 16
                }}>
                    x 6
                </Text>
            </View>

            <View style={{}}>
                <Text
                    style={{
                    fontSize: 17,
                    marginRight: -5,
                    marginVertical: 8,
                    color: "#a2a2db"
                }}>
                    - - - - - - - - - - - - - - - - - - - - - - -
                </Text>
            </View>

            <View
                style={{
                flexDirection: "row",
                marginTop: -8,
                alignItems: "center"
            }}>
                <Text
                    style={{
                    color: "#522289",
                    fontSize: 16
                }}>
                    Total Cost
                </Text>
                <Text
                    style={{
                    color: "#4b3ca7",
                    paddingLeft: "50%",
                    fontSize: 16
                }}>
                    $400
                </Text>
            </View>
        </TouchableOpacity>
    )
}
