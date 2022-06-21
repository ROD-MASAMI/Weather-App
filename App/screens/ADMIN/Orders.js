import { StatusBar } from 'expo-status-bar';
import {StyleSheet, Text, SafeAreaView,ScrollView, FlatList, View,Button, TouchableOpacity, TextInput, TouchableWithoutFeedback, Keyboard, Image, Dimensions} from 'react-native';
import React, {useContext, useState, useCallback, useEffect} from 'react';
import COLORS from '../../consts/colors';
import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import baseURL from '../../consts/baseURL';
import axios, { Axios } from 'axios';
import { AuthContext } from '../../context/AuthContext';
const {width} = Dimensions.get('screen');
const ITEM_HEIGHT = 250;
const Orders = ({navigation, route}) =>{
    
    const [info, setInfo] = useContext(AuthContext);
    const [orders, setOrders] = useState({});
    
    
   
    const Card = ({item}) =>{
        return (
        <TouchableOpacity onPress={() => navigation.navigate('OrderDetail', item)}>
<View style={styles.card}>
                   <Image
                      style={styles.image}
                      source={require('../../assets/house3.jpg')}
                      resizeMode='contain'
                      contentContainerStyle={{padding:20}}
                      />
                      <View style={styles.wrapText}>
                          <Text style={styles.fontSize}>{item.title}</Text>
                          <Text style={styles.fontSize}>{item.Fullname}</Text>
                          <Text style={styles.fontSize}>0{item.phone_no}</Text>
                      </View>
                      <View style={{marginTop:22}}>
                          <Text style={[styles.fontsize, {marginBottom:15, fontWeight:'bold'}]}>STATUS</Text>
                          <Text style ={styles.fontsize}>{item.STATUS_}</Text>
                      </View>
               </View>
        </TouchableOpacity>
        
        );
    };




     useEffect(() =>{
        axios.get(`${baseURL}orders/${info.user.id}`).then(response =>{
            if(!(response == '')){
              setOrders(response.data);
            }
            
          }).catch(error => alert(error));
    }, []) 

 return(
    <TouchableWithoutFeedback onPress={()=>{
        Keyboard.dismiss();
      }}>
         
     <SafeAreaView style={{backgroundColor: '#778899', flex: 1,}}>
           <View style={styles.editText}>
           <Text style={{fontSize: 25,}}>MY ORDERS</Text>
           <Text  style={{fontSize: 25,}}>({orders.length})</Text>
               </View>    
     <FlatList
       contentContainerStyle={{padding:20}} 
       vertical={true} 
       data={orders.order}
       keyExtractor={(item) => item.REF_NO}
       renderItem={Card}           
       /> 

 </SafeAreaView>
 
 </TouchableWithoutFeedback>
 );
};


const styles = StyleSheet.create({
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
        borderRadius:10,
        backgroundColor:'#fff',
        shadowColor:'#000',
        shadowOffset:{
            width:0,
            height:10
        },
        shadowOpacity:.3,
        shadowRadius:20,
        padding:15
    },
});
export default Orders;











