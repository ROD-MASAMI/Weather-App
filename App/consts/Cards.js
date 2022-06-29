import { StatusBar } from 'expo-status-bar';
import {StyleSheet, Text, SafeAreaView,ScrollView, FlatList, View,Button, TouchableOpacity, TextInput, TouchableWithoutFeedback, Keyboard, Image, Dimensions} from 'react-native';
import React, {useContext, useState, useCallback, useEffect} from 'react';
import COLORS from './colors';
import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import baseURL from './baseURL';
import axios, { Axios } from 'axios';
import { AuthContext } from '../context/AuthContext';
const {width} = Dimensions.get('screen');
const ITEM_HEIGHT = 250;
const Compcards = ({navigation, route}) =>{
    
    const [info, setInfo] = useContext(AuthContext);
    const[listComplaints, setListComplaints] = useState({});
       
    
    const Tenant = () =>{
        return(
            <View style={{ flexDirection: 'row', marginLeft:10, marginTop:1}}>
<View style={{ width: 100, backgroundColor: 'white'}}>
<Text style={{ fontSize: 16, fontWeight: 'bold', textAlign: 'center'}}>NAME</Text>
</View>
<View style={{ width: 100, backgroundColor: 'white'}}>
<Text style={{ fontSize: 16, fontWeight: 'bold' , textAlign: 'center'}}>HOUSE</Text>
</View>
<View style={{ width: 100, backgroundColor: 'white'}}>
<Text style={{ fontSize: 16, fontWeight: 'bold' , textAlign: 'center'}}>COMPLAINT</Text>
</View>
</View>
        );
    }
    const tenantCard = ({item}) =>{
        return(
            <View style={{ flexDirection: 'row', marginLeft:10, marginTop:1}}>
<View style={{ width: 100, backgroundColor: 'white'}}>
<Text style={{ fontSize: 16, fontWeight: 'bold', textAlign: 'center'}}>{item.NAME}</Text>
</View>
<View style={{ width: 100, backgroundColor: 'white'}}>
<Text style={{ fontSize: 16, fontWeight: 'bold' , textAlign: 'center'}}>{item.HOUSE_NAME}</Text>
</View>
<View style={{ width: 100, backgroundColor: 'white'}}>
<Text style={{ fontSize: 16, fontWeight: 'bold' , textAlign: 'center'}}>{item.COMPLAINTS}</Text>
</View>
</View>
        );
    }



    
     useEffect(() =>{
        axios.get(`${baseURL}complaints/${info.user.id}`).then(response =>{
            if(!(response == '')){
                setListComplaints(response.data);
                
            }
            
          }).catch(error => alert(error));
    }, [])

 return(
    <>
 <Text style = {{fontWeight:'bold', fontSize:25, paddingLeft:100 }}>COMPLAINTS</Text>
<Tenant/>
<FlatList
       vertical={true} 
       data={listComplaints}
       keyExtractor={(item) => item.REF}
       renderItem={tenantCard}           
       /> 
</>

 );
};


const styles = StyleSheet.create({
    header:{
        paddingVertical: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
       // borderWidth: 0.5,
       
        
        
    },
    profile:{
        height: 50,
        width: 50,
        borderRadius: 25,
    },
    listText:{
        fontSize: 16,
        fontWeight: 'bold',
        paddingBottom: 5,
        color: COLORS.grey,
    },
    activeList:{
        color: COLORS.dark,
        borderBottomWidth: 1,
        paddingBottom: 5,
    },
    wrapText:{
        flex:1,
        marginLeft:10,
        justifyContent:'center'
    },
    fontSize:{
        fontSize:18
    },
    editText:{
        flexDirection: 'row',
        paddingLeft: 120,
        paddingTop:20,
        marginBottom: 10,
        alignItems: 'center',
        
      },
    image:{
        width:100,
        height:100,
    },
    card:{
        flexDirection:'row',
        marginBottom:20,
        marginLeft:10,
        borderRadius:10,
        width: 150,
        height:150,
        shadowColor:'#000',
        shadowOffset:{
            width:0,
            height:10
        },
        shadowOpacity:.3,
        shadowRadius:20,
        padding:15
    },
    cardImage:{
        width: "100%",
        height: 120,
        borderRadius: 15,
    },
    facility:{
        flexDirection: 'row',
        marginRight: 15, 
    },
    facilityText:{
        marginLeft: 5,
        color: 'grey',

    }
});
export default Compcards;











