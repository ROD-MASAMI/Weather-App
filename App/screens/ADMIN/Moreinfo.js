import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, SafeAreaView, ScrollView, FlatList, View, Button, TouchableOpacity, TextInput, TouchableWithoutFeedback, Keyboard, Image, Dimensions } from 'react-native';
import React, { useContext, useState, useCallback, useEffect } from 'react';
import COLORS from '../../consts/colors';
import { MaterialIcons, EvilIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import baseURL from '../../consts/baseURL';
import axios, { Axios } from 'axios';
import { AuthContext } from '../../context/AuthContext';
const { width } = Dimensions.get('screen');
const ITEM_HEIGHT = 250;
const Moreinfo = ({ navigation, route }) => {

    const [info, setInfo] = useContext(AuthContext);
    const [uID, setUID] = useState(info.user.id);
    const [technician, setTechnician] = useState();
    const [dawasa, setDawasa] = useState();
    const [luku, setLuku] = useState();
    const {lID, otherParam} = route.params;
    const [nmb, setNmb] = useState();
    const [nbc, setNbc] = useState();
    const [crdb, setCrdb] = useState();
    const [airtel, setAirtel] = useState();
    const [vodacom, setVodacom] = useState();
    const [ttcl, setTtcl] = useState();
    const [halotel, setHalotel] = useState();
    const [tigo, setTigo] = useState();
    const [show, setShow] = useState();


    const postPayment = async (uID, lID, nmb, nbc, crdb, airtel, vodacom, ttcl, halotel, tigo) => {
        try {
            const response = await axios.post(`${baseURL}addPayment`, { uID: uID, lID: lID, nmb: nmb, nbc: nbc, crdb: crdb, airtel: airtel, vodacom: vodacom, ttcl: ttcl, halotel: halotel, tigo: tigo });
            if (response.data.status) {
                alert(response.data.message);
            }
            else {
                alert(response.data.message)
            }
        } catch (error) {
            alert(error);
        }
    }
    const postUtility = async (technician, dawasa, luku, uID, lID) => {
        try {
            const response = await axios.post(`${baseURL}addUtility`, { technician: technician, dawasa: dawasa, luku: luku, uID: uID, lID: lID });
            if (response.data.status) {
                alert(response.data.message);
            }
            else {
                alert(response.data.message)
            }
        } catch (error) {
            alert(error);
        }
    }
    const payments = () => {
        setShow('payment');
    }

    const utility = () => {
        setShow('utility');
    }

    return (
        <ScrollView>
        <TouchableWithoutFeedback onPress={() => {
            Keyboard.dismiss();
        }}>
            <View>
                <View style={styles.headerWrapper}>
                    <View style={styles.header}>
                        <TouchableOpacity >
                            <EvilIcons name="arrow-left" size={30} color="black" onPress={navigation.goBack} />
                        </TouchableOpacity>
                    </View>
                    <Text style={styles.headerText}>
                        PAYMENT AND UTILITIES
                    </Text>
                </View>
                
                <View>
                    
                            <View>
                                <Text style={styles.headerText}>
                                    ADD PAYMENTS
                                </Text>
                            </View>
                            <View style={styles.bodyWrapper}>
                                <TextInput style={styles.input}
                                    placeholder="CRDB ACCOUNT"
                                    value={crdb}
                                    onChangeText={setCrdb}
                                    placeholderTextColor={"black"}
                                />
                                <TextInput style={styles.input}
                                    placeholder="NMB ACCOUNT"
                                    value={nmb}
                                    onChangeText={setNmb}
                                    placeholderTextColor={"black"}
                                />
                                <TextInput style={styles.input}
                                    placeholder="NBC ACCOUNT"
                                    value={nbc}
                                    onChangeText={setNbc}
                                    placeholderTextColor={"black"}
                                />
                                <TextInput style={styles.input}
                                    placeholder="AIRTEL NUMBER"
                                    value={airtel}
                                    onChangeText={setAirtel}
                                    placeholderTextColor={"black"}
                                />
                                <TextInput style={styles.input}
                                    placeholder="TIGO NUMBER"
                                    value={tigo}
                                    onChangeText={setTigo}
                                    placeholderTextColor={"black"}
                                />
                                <TextInput style={styles.input}
                                    placeholder="HALOTEL NUMBER"
                                    value={halotel}
                                    onChangeText={setHalotel}
                                    placeholderTextColor={"black"}
                                />
                                <TextInput style={styles.input}

                                    placeholder="VODACOM NUMBER"
                                    value={vodacom}
                                    onChangeText={setVodacom}
                                    placeholderTextColor={"black"}
                                />
                                <TextInput style={styles.input}
                                    placeholder="TTCL NUMBER"
                                    value={ttcl}
                                    onChangeText={setTtcl}
                                    placeholderTextColor={"black"}
                                />
                            </View>
                            <View style={styles.buttonWrapper} >
                                <Button
                                    title="Add payments"
                                    color='#075e54'
                                    accessibilityLabel="Add House"
                                    onPress={() => postPayment(uID, lID, nmb, nbc, crdb, airtel, vodacom, ttcl, halotel, tigo)}
                                />
                            </View>
                    
                            <View>
                                <Text style={styles.headerText}>
                                    ADD UTILITIES{JSON.stringify(lID)}
                                </Text>
                            </View>
                            <View style={styles.bodyWrapper}>
                                <TextInput style={styles.input}
                                    placeholder="LUKU METER_NO"
                                    value={luku}
                                    onChangeText={setLuku}
                                    placeholderTextColor={"black"}
                                />
                                <TextInput style={styles.input}
                                    placeholder="DAWASA METER_NO"
                                    value={dawasa}
                                    onChangeText={setDawasa}
                                    placeholderTextColor={"black"}
                                />
                                <TextInput style={styles.input}
                                    placeholder="TECHNICIAN PHONE_NO"
                                    value={technician}
                                    onChangeText={setTechnician}
                                    placeholderTextColor={"black"}
                                />
                            </View>
                            <View style={styles.buttonWrapper} >
                                <Button
                                    title="Add utilities"
                                    color='#075e54'
                                    accessibilityLabel="Add House"
                                    onPress={() => postUtility(technician, dawasa, luku, uID, lID)}
                                />
                            </View>
                     
                     </View>


            </View>
        </TouchableWithoutFeedback>
        </ScrollView>
    );
};


const styles = StyleSheet.create({
    wrapText: {
        flex: 1,
        marginLeft: 10,
        justifyContent: 'center'
    },
    fontSize: {
        fontSize: 18
    },
    editText: {
        flexDirection: 'row',
        paddingLeft: 120,
        paddingTop: 20,
        marginBottom: 10,
        alignItems: 'center',

    },
    headerWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10,
        backgroundColor: 'white',
        top: 0,
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 10,
        marginRight: 10,
    },
    headerText: {
        fontSize: 20,
        fontWeight: '600',
        color: '#075e54',
    },
    image: {
        width: 100,
        height: 100,
    },
    card: {
        flexDirection: 'row',
        marginBottom: 20,
        borderRadius: 10,
        backgroundColor: '#fff',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 10
        },
        shadowOpacity: .3,
        shadowRadius: 20,
        padding: 15
    },
    headerWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10,
        backgroundColor: 'white',
        top: 0,
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 10,
        marginRight: 10,
    },
    headerText: {
        fontSize: 20,
        fontWeight: '600',
        color: '#075e54',
    },
    bodyWrapper: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 10,
        marginLeft: 10,
        marginRight: 10,
        marginTop: 10,
        alignContent: 'center',
        justifyContent: 'center',
    },
    image: {
        width: 200,
        height: 150,
        alignSelf: 'center',
        marginTop: 20,
    },
    imageIcon: {
        alignSelf: 'center',
        alignContent: 'center',
        alignItems: 'center',
        justifyContent: 'center',

    },
    text: {
        fontSize: 15,
        fontWeight: '400',
        color: '#075e54',
        alignSelf: 'center',
    },
    input: {
        borderWidth: 1,
        borderColor: '#075e54',
        borderRadius: 5,
        padding: 10,
        marginTop: 10,
        marginBottom: 10,
        marginLeft: 10,
        marginRight: 10,
        textDecorationColor: '#075e54',

    },
    footer: {
        height: 70,
        backgroundColor: COLORS.light,
        borderRadius: 10,
        paddingHorizontal: 20,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 10,
    },
    bookNowBtn: {
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: COLORS.dark,
        borderRadius: 10,
        paddingHorizontal: 20,
    },
    buttonWrapper: {
        marginTop: 10,
        marginBottom: 10,
        marginLeft: 10,
        marginRight: 10,
        color: '#075e54',
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',

    }
});
export default Moreinfo;











