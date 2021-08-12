import React, {useState} from 'react'
import {
    View,
    Text,
    ImageBackground,
    Modal,
    TouchableHighlight,
    ScrollView
} from "react-native";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import ListCard from '../components/ListCard';

import OrderDetails from '../components/OrderDetails';

export default function Dashboard({navigation}) {
    const [modal,
        setmodal] = useState(false)

    return (
        <ImageBackground
            style={{
            height: "100%",
            width: "100%"
        }}
            source={require("../images/back2.png")}>
            <ScrollView
                style={modal
                ? {
                    height: "100%",
                    width: "100%",
                    opacity: 0.2
                }
                : {
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
                        paddingHorizontal: 40,
                        fontSize: 20,
                        color: "#FFF",
                        alignItems: "center",
                        justifyContent: "center"
                    }}>
                        Orders for 20 June, 2021
                    </Text>

                </View>

                <ListCard onPress={() => {
                    setmodal(!modal);
                }}/>
                <ListCard onPress={() => {
                    setmodal(!modal);
                }}/>
                <ListCard onPress={() => {
                    setmodal(!modal);
                }}/> 

                <View>
                    <Modal animationType="slide" transparent={true} visible={modal}>
                        <OrderDetails
                            onPress={() => {
                            setmodal(!modal);
                        }}/>
                    </Modal>
                </View>
            </ScrollView>
        </ImageBackground>
    )
}
