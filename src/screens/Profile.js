import React, {useState} from 'react'
import {ImageBackground, View, Modal, Text, TouchableOpacity} from 'react-native'

import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import {ScrollView} from 'react-native-gesture-handler';
import ProfileUpdate from '../components/ProfileUpdate';

const Profile = () => {
    const [modal,
        setmodal] = useState(false)
    return (
        <ImageBackground
            source={require("../images/back2.png")}
            style={{
            height: "100%",
            width: "100%"
        }}>
            <ScrollView style={modal
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

                    <TouchableOpacity
                        style={{
                        paddingHorizontal: 32,
                        alignSelf: "center",
                        marginTop: 20,
                        backgroundColor: "#FFF",
                        paddingBottom: 15,
                        elevation: 1,
                        width: '85%',
                        height: '52%',
                        borderRadius: 15,
                        shadowColor: "#000000",
                        shadowOpacity: 0.4,
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
                            <View
                                style={{
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
                            <View
                                style={{
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
                            flexDirection: 'row',
                            flexWrap: 'wrap',
                            alignItems: 'flex-start',
                            marginTop: 8
                        }}>
                            <View
                                style={{
                                width: '50%'
                            }}>
                                <Text
                                    style={{
                                    color: "#4b3ca7",
                                    fontSize: 16
                                }}>
                                    Email :
                                </Text>
                            </View>
                            <View
                                style={{
                                width: '50%'
                            }}>
                                <Text
                                    style={{
                                    color: "#4b3ca7",
                                    fontSize: 16
                                }}>
                                    email@email.com
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
                            <View
                                style={{
                                width: '50%'
                            }}>
                                <Text
                                    style={{
                                    color: "#4b3ca7",
                                    fontSize: 16
                                }}>
                                    DOB :
                                </Text>
                            </View>
                            <View
                                style={{
                                width: '50%'
                            }}>
                                <Text
                                    style={{
                                    color: "#4b3ca7",
                                    fontSize: 16
                                }}>
                                    XX/XX/XXXX
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
                            <View
                                style={{
                                width: '50%'
                            }}>
                                <Text
                                    style={{
                                    color: "#4b3ca7",
                                    fontSize: 16
                                }}>
                                    Gender :
                                </Text>
                            </View>
                            <View
                                style={{
                                width: '50%'
                            }}>
                                <Text
                                    style={{
                                    color: "#4b3ca7",
                                    fontSize: 16
                                }}>
                                    Male
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
                            <View
                                style={{
                                width: '50%'
                            }}>
                                <Text
                                    style={{
                                    color: "#4b3ca7",
                                    fontSize: 16
                                }}>
                                    Total Earned :
                                </Text>
                            </View>
                            <View
                                style={{
                                width: '50%'
                            }}>
                                <Text
                                    style={{
                                    color: "#4b3ca7",
                                    fontSize: 16
                                }}>
                                    $ 1000
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
                            <View
                                style={{
                                width: '50%'
                            }}>
                                <Text
                                    style={{
                                    color: "#4b3ca7",
                                    fontSize: 16
                                }}>
                                    Month's earning :
                                </Text>
                            </View>
                            <View
                                style={{
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

                        <View
                            style={{
                            flexDirection: 'row',
                            flexWrap: 'wrap',
                            alignItems: 'flex-start',
                            marginTop: 8
                        }}>
                            <View
                                style={{
                                width: '50%'
                            }}>
                                <Text
                                    style={{
                                    color: "#4b3ca7",
                                    fontSize: 16
                                }}>
                                    Total Trips :
                                </Text>
                            </View>
                            <View
                                style={{
                                width: '50%'
                            }}>
                                <Text
                                    style={{
                                    color: "#4b3ca7",
                                    fontSize: 16
                                }}>
                                    16
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
                            <View
                                style={{
                                width: '50%'
                            }}>
                                <Text
                                    style={{
                                    color: "#4b3ca7",
                                    fontSize: 16
                                }}>
                                    Trips this month :
                                </Text>
                            </View>
                            <View
                                style={{
                                width: '50%'
                            }}>
                                <Text
                                    style={{
                                    color: "#4b3ca7",
                                    fontSize: 16
                                }}>
                                    8
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
                                Address
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
                    </TouchableOpacity>

                    <TouchableOpacity
                        underlayColor="#6C63FF"
                        onPress={() => {
                            setmodal(!modal);
                        }}
                        style={{
                        width: 200,
                        marginLeft: 5,
                        elevation: 2,
                        marginTop: 8,
                        backgroundColor: "#6C63FF",
                        paddingVertical: 10,
                        borderRadius: 25,
                        alignSelf: "center"
                    }}>
                        <Text
                            style={{
                            color: "#FFF",
                            textAlign: "center",
                            fontSize: 18
                        }}>
                            Update Profile
                        </Text>
                    </TouchableOpacity>

                </View>
            </ScrollView>
            <View>
                    <Modal animationType="slide" transparent={true} visible={modal}>
                        <ProfileUpdate
                            onPress={() => {
                            setmodal(!modal);
                        }}/>
                    </Modal>
                </View>
        </ImageBackground>
    )
}

export default Profile
