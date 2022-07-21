import React, {useContext, useState, useEffect} from 'react';
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView, Image, TextInput, ScrollView, Button } from "react-native";
import * as ImagePicker from 'expo-image-picker';
import { MaterialIcons, EvilIcons } from '@expo/vector-icons';
import axios from "axios";
import baseURL from "../../consts/baseURL";
import { AuthContext } from "../../context/AuthContext";
// Contract form
const AddHouse = ({ navigation }) => {
    const [info, setInfo] = useContext(AuthContext);
    const [MainImage, setMainImage] = useState();
    const [image, setImage] = useState();
    const [title, setTitle] = useState();
    const [price, setPrice] = useState();
    const [size, setSize] = useState();
    const [id, setId] = useState(info.user.id);
    const [details, setDetails] = useState('');
    const [location, setLocation] = useState('');
    const [kitchen, setKitchen] = useState();
    const [bathroom, setBathroom] = useState();
    const [rooms, setRooms] = useState();
    
    //maintain state of user
    // const { user } = React.useContext(AuthContext);
    // const userId = user.id;

    //image picker
    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1
        });

        if (!result.cancelled) {
            setMainImage(result.uri);
            setImage(result.uri);
        }
    };

    //post data to database house model
    const postData = async (title, size, location, kitchen, rooms, bathroom, details, id, price, ) => {
        try {
            const response = await axios.post(`${baseURL}addHouse`, {title:title, size:size, location:location, kitchen:kitchen, rooms:rooms, bathroom:bathroom, details:details, id:id, price:price,} );
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
                            <TouchableOpacity >
                            <EvilIcons name="arrow-left" size={30} color="black"  onPress={navigation.goBack}/>
                            </TouchableOpacity>
                        </View>
                        <Text style={styles.headerText}>ADD HOUSE</Text>
                    </View>
            </SafeAreaView>
                {/**Image input style */}
                <View style={styles.bodyWrapper}>
                <TextInput style={styles.input} 
                    placeholder="House Name"
                    value={title}
                    onChangeText={setTitle}
                    placeholderTextColor = {"black"}
                />
                <TextInput style={styles.input} 
                    placeholder="Rent per month" 
                    value={price}
                    onChangeText={setPrice} 
                    placeholderTextColor = {"black"}   
                />
                <TextInput style={styles.input} 
                    placeholder="Location"  
                    value={location}
                    onChangeText={setLocation}
                    placeholderTextColor = {"black"}   
                />
                <TextInput style={styles.input} 
                    placeholder="HOUSE SIZE" 
                    value={size}
                    onChangeText={setSize} 
                    placeholderTextColor = {"black"}   
                />
                <TextInput style={styles.input}
                    placeholder="BEDROOMS"
                    value={rooms}
                    onChangeText={setRooms}
                    placeholderTextColor = {"black"}
                />
                <TextInput style={styles.input} 
                    placeholder="Details"
                    value={details}
                    onChangeText={setDetails}
                    placeholderTextColor = {"black"}   
                />
                <TextInput style={styles.input} 
                    placeholder="number of kitchens"
                    value={kitchen}
                    onChangeText={setKitchen}
                    placeholderTextColor = {"black"}   
                />
                <TextInput style={styles.input} 
                    placeholder="bathrooms"
                    value={bathroom.toString()}
                    onChangeText={setBathroom}
                    placeholderTextColor = {"black"}   
                />
                </View>
                <View style={styles.buttonWrapper} >
                <Button 
                    title="Add House" 
                    color= '#075e54'
                    accessibilityLabel="Add House"
                    onPress={() => postData(title, size, location, kitchen, rooms, bathroom, details, id, price, image)}
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

export default AddHouse;