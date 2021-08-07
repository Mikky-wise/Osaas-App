import React, {useState} from 'react'
import {View, Alert, Modal, ImageBackground} from "react-native";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import {ScrollView} from "react-native-gesture-handler";
import ListCard from '../components/ListCard';
import HistoryCard from '../components/HistoryCard';
import ModalCard from '../components/ModalCard';

export default function History() {
    const [modal,
        setmodal] = useState(false)

    return (
        <ImageBackground
            source={require("../images/back2.png")}
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
            <ScrollView
                showsVerticalScrollIndicator={false}
                style={{
                marginVertical: 5
            }}>
                <HistoryCard
                    onPress={() => {
                    setmodal(!modal);
                }}/>
                <HistoryCard
                    onPress={() => {
                    setmodal(!modal);
                }}/>
                <HistoryCard
                    onPress={() => {
                    setmodal(!modal);
                }}/>

            </ScrollView>
            <View>
                <Modal animationType="slide" transparent={true} visible={modal}>
                    <ModalCard
                        onPress={() => {
                        setmodal(!modal);
                    }}/>
                </Modal>
            </View>
        </ImageBackground>
    )
}
