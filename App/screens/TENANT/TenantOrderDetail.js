import { StatusBar } from 'expo-status-bar';
import {StyleSheet, Text, SafeAreaView,ScrollView, FlatList, View,Button, TouchableOpacity, TextInput, TouchableWithoutFeedback, Keyboard, Image, Dimensions} from 'react-native';
import React, {useContext, useState, useCallback, useEffect} from 'react';
import COLORS from '../../consts/colors';
import { MaterialIcons } from '@expo/vector-icons';
import { EvilIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import baseURL from '../../consts/baseURL';
import axios, { Axios } from 'axios';
import { AuthContext } from '../../context/AuthContext';
const {width} = Dimensions.get('screen');
const ITEM_HEIGHT = 250;
const TenantOrderDetail = ({navigation, route}) =>{
    const order =route.params;
    const [info, setInfo] = useContext(AuthContext);
    const [payments, setPayments] = useState();
    const [contacts, setContacts] = useState({});
    
    
   
    const Card = ({item}) =>{
        return (
            <View style={styles.card}>
            <Text style={[styles.cardText,{paddingLeft:70}]}>PAYMENT DETAILS</Text>
            <View style={styles.cardHeader}>
                <View style={styles.cardHeaderLeft}>
                    <Text style={styles.cardHeaderLeftText}>House Name:</Text>
                    <Text style={[styles.cardHeaderLeftText]}>CRDB:</Text>
                    <Text style={styles.cardHeaderLeftText}>NMB:</Text>
                    <Text style={styles.cardHeaderLeftText}>NBC:</Text>
                    <Text style={styles.cardHeaderLeftText}>AIRTEL:</Text>
                    <Text style={styles.cardHeaderLeftText}>VODACOM:</Text>
                    <Text style={styles.cardHeaderLeftText}>TIGO:</Text>
                    <Text style={styles.cardHeaderLeftText}>HALOTEL:</Text>
                    <Text style={styles.cardHeaderLeftText}>TTCL:</Text>
                </View>
                <View style={[styles.cardHeaderRight,{flexWrap: 'wrap'}]}>
                    <Text style={styles.cardHeaderRightText}>{order.title}</Text>
                    <Text style={[styles.cardHeaderRightText,{flexWrap: 'wrap'}]}>{item.CRDB}</Text>
                    <Text style={styles.cardHeaderRightText}>{item.NMB}</Text>
                    <Text style={styles.cardHeaderRightText}>{item.NBC}</Text>
                    <Text style={styles.cardHeaderRightText}>{item.AIRTEL}</Text>
                    <Text style={styles.cardHeaderRightText}>{item.VODACOM}</Text>
                    <Text style={styles.cardHeaderRightText}>{item.TIGO}</Text>
                    <Text style={styles.cardHeaderRightText}>{item.HALOTEL}</Text>
                    <Text style={styles.cardHeaderRightText}>{item.TTCL}</Text>
                </View>
            </View>
         </View>
        
        );
    };

    const Card2 = ({item}) =>{
        return (
            <View style={styles.card2}>
                <Text style={[styles.cardText,{paddingLeft:70}]}>LANDLORD DETAILS</Text>
            <View style={styles.cardHeader}>
                <View style={styles.cardHeaderLeft}>
                    <Text style={styles.cardHeaderLeftText}>Name:</Text>
                    <Text style={[styles.cardHeaderLeftText]}>EMAIL:</Text>
                    <Text style={styles.cardHeaderLeftText}>PHONE_NO:</Text>
                </View>
                <View style={[styles.cardHeaderRight,{flexWrap: 'wrap'}]}>
                    <Text style={styles.cardHeaderRightText}>{item.Fullname}</Text>
                    <Text style={[styles.cardHeaderRightText,{flexWrap: 'wrap'}]}>{item.email}</Text>
                    <Text style={styles.cardHeaderRightText}>0{item.phone_no}</Text>
                </View>
            </View>
         </View>
        
        );
    };




     useEffect(() =>{
        axios.get(`${baseURL}payments/${order.house_id}`).then(response =>{
            if(!(response == '')){
              setPayments(response.data);
            }
            
          }).catch(error => alert(error));
    }, []) 

    useEffect(() =>{
        axios.get(`${baseURL}users/${order.landlord_id}`).then(response =>{
            if(!(response == '')){
              setContacts(response.data);
            }
            
          }).catch(error => alert(error));
    }, []) 

 return(
    <TouchableWithoutFeedback onPress={()=>{
        Keyboard.dismiss();
      }}>
         
     <SafeAreaView style={{backgroundColor: '#778899', flex: 1,}}>
           <View style={styles.editText}>
           <EvilIcons name="arrow-left" size={30} color="black"  onPress={navigation.goBack}/>
           <Text style={{fontSize: 25,}}>MY ORDER</Text>
               </View>    
        {order.STATUS_ == 'pending..' ? (
            <View>
                <Text>ORDER IS STILL PENDING WAITING FOR PROPERTY OWNER</Text>
            </View>

        ): order.STATUS_ == 'ACCEPTED' ?(
            <View>
                <Text style={styles.heading}> MR {order.Fullname} YOUR ORDER HAS BEEN  </Text>
                <Text style={[styles.heading,{paddingTop:10, paddingBottom:10}]}> ACCEPTED PLEASE MAKE NECCESSARY PAYMENTS  </Text>
                <Text style={styles.heading}>AND CONTACT YOUR LANDLORD</Text>
            <FlatList
            contentContainerStyle={{padding:20}} 
            vertical={true} 
            data={payments}
            keyExtractor={(item) => item.id}
            renderItem={Card}           
            />
            <Card2 item = {contacts} />
            </View>
        ):(
            <View>
                <Text>YOU HAVE BEEN REGISTERED AS A TENANT ALREADY PLEASE PROCEED TO VIEW YOUR INFO</Text>
            </View> 
        )}       
     

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
    heading:{
        color:'white',
        fontSize:18,
        paddingLeft:10,
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
    card: {
        
        backgroundColor: '#6CC775',
        padding: 10,
        marginHorizontal: 20,
        height:200,
        marginTop: 10,
        bottom: 10,
        borderRadius: 8,
    },
    card2: {
        backgroundColor: '#00b5ec',
        padding: 10,
        marginHorizontal: 40,
        height:100,
        marginTop: 10,
        bottom: 10,
        borderRadius: 8,
    },
    cardHeader: {
        flexDirection: 'row',
        padding: 10,
    },
    cardHeaderLeft: {
    
        justifyContent: 'flex-start',
        fontSize: 14,
        fontWeight: 'bold',
        color: '#344567',
        borderBottomWidth: 1,
        
    },
    cardHeaderLeftText: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#344567',
        borderBottomWidth: 1,
    },
    cardHeaderRightText: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#344567',
        borderBottomWidth: 1,
    },
    cardHeaderRight: {
        justifyContent: 'flex-start',
        borderColor: '#497FAF',
        left: 15,
    },
    cardi: {
        flex: 1,
        backgroundColor: 'lightgrey',
        padding: 10,
        marginHorizontal: 20,
        top: 100,
        marginTop: 10,
        bottom: 10,
        borderRadius: 8,
    },
    cardText: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#000',
        borderBottomWidth: 1,
        borderBottomColor: '#000',
        alignItems: 'center',
        left: 10,
    }
});
export default TenantOrderDetail;











