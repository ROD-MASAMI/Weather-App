import React, {useState, useContext}from "react";
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView, Image, TextInput, ScrollView, Button } from "react-native";
import { MaterialIcons } from '@expo/vector-icons';
import { EvilIcons } from '@expo/vector-icons';
import axios from "axios";
import baseURL from "../../consts/baseURL";
import { AuthContext } from '../../context/AuthContext';

// Contract form
const Complaints = ({ navigation, route }) => {
    
    const orders = route.params;
    const [info, setInfo] = useContext(AuthContext);
    const[title, setTitle] = useState(orders.title);
  const[LID, setLID] = useState(orders.landlord_id);
  const[uID, setUID] = useState(info.user.id);
    const [name, setName] = useState('');
    const [details, setDetails] = useState('');
    
    


    //post data to database house model
    const postData = async (name, details, lID, uID, title) => {
        try {
            const response = await axios.post(`${baseURL}comment`, { name:name, details:details, LID:LID, uID:uID, title:title});
            if(response.data.status){
                alert(response.data.message);
              }
              else{
                alert(response.data.message)
              }
        
        } catch (error) {
            alert(error);
        }

    
                
    }


    return (
        <ScrollView>
        <View style={styles.container}>
            <SafeAreaView>
                    <View style={styles.headerWrapper}>
                        <View style={styles.header}>
                        
                            <EvilIcons name="arrow-left" size={30} color="black"  onPress={navigation.goBack}/>
                            
                        </View>
                        <Text style={styles.headerText}>ADD COMPLAINTS</Text>
                    </View>
            </SafeAreaView>
                <View style={styles.bodyWrapper}>
                <TextInput style={styles.input} 
                    placeholder=" Name"
                    value={name}
                    onChangeText={setName}
                    placeholderTextColor = {"black"}
                />
                <TextInput style={styles.input} 
                    placeholder="DETAILS" 
                    value={details}
                    onChangeText={setDetails} 
                    placeholderTextColor = {"black"}   
                />
                </View>
                <View style={styles.buttonWrapper} >
                <Button 
                    title="POST" 
                    color= '#075e54'
                    accessibilityLabel="Add House"
                    onPress={() => postData(name, details, LID, uID, title)}
                />
                </View>
    
        </View>
        </ScrollView>
    );

}



const styles = StyleSheet.create({
    container: {
        flex: 1,
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

export default Complaints;