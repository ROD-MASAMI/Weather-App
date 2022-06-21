import React, { Component, useContext, useState } from 'react';
import COLORS from '../../consts/colors';
import baseURL from '../../consts/baseURL';
import { FontAwesome } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { EvilIcons } from '@expo/vector-icons';
import axios from 'axios';
import { AuthContext } from '../../context/AuthContext';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
  View,
  Alert,
  Image,
  TouchableOpacity
} from 'react-native';

function EditUser({navigation}) {
    const [info, setInfo] = useContext(AuthContext);  
    const [name, setName] = useState(info.user.Fullname);
    const [id, setId] = useState(info.user.id);
    const [location, setLocation] = useState('');
    const [phone, setPhone] = useState(info.user.phone_no);
    const [mail, setMail] = useState(info.user.email);

    const onEdit = (name, location, phone, mail, id) => {
    
        axios.put(`${baseURL}editUser`,{name:name, location:location, phone:phone, email:mail, id:id}).then(response =>{
          if(response.data.status){
            Alert.alert('ALERT', response.data.message, [
              {text: 'OK', onPress: () => navigation.navigate('userProfile')},
            ]);
          } 
          else{
               alert(response.data.message)
          }
        }).catch(error => console.log(error))
        
      
      
      
      }

    
    return (
      <TouchableWithoutFeedback onPress={()=>{
        Keyboard.dismiss();
      }}>
      <View style={styles.container}>
          <View style={styles.header}>
          <View style={styles.headerBtn}>
              <EvilIcons name="arrow-left" size={30} color="black"  onPress={navigation.goBack}/>
              </View>
            <View style={styles.headerContent}>
                <Image style={styles.avatar}
                 source={require('../../assets/person.jpeg')}/>

            </View>
          </View>

          <View style={styles.body}>

          <View style={styles.item}>
            <FontAwesome5 name="user-tie" size={24} color="black" />
            <View style={styles.InputContainer}>
       <TextInput
       style={{marginTop:10, marginLeft:10}}
         placeholder="full name"
         onChangeText={setName}
         value={name}
         placeholderTextColor={"lightgrey"}
         underlineColorAndroid="transparent"
       />
     </View>    
            </View>
            <View style={styles.item}>           
              <FontAwesome name="phone" size={24} color="black" />       
              <View style={styles.InputContainer}>
       <TextInput
       style={{marginTop:10, marginLeft:10}}
         placeholder="phone number"
         onChangeText={setPhone}
         value={phone.toString()}
         placeholderTextColor={"lightgrey"}
         underlineColorAndroid="transparent"
       />
     </View>
            </View>

            <View style={styles.item}>
              <Fontisto name="email" size={24} color="black" />     
              <View style={styles.InputContainer}>
       <TextInput
       style={{marginTop:10, marginLeft:10}}
         placeholder="email"
         onChangeText={setMail}
         value={mail}
         placeholderTextColor={"lightgrey"}
         underlineColorAndroid="transparent"
       />
     </View>  
            </View>

            <View style={styles.item}>
            <Entypo name="location" size={24} color="black" />     
            <View style={styles.InputContainer}>
       <TextInput
       style={{marginTop:10, marginLeft:10}}
         placeholder="location"
         onChangeText={setLocation}
         value={location}
         placeholderTextColor={"lightgrey"}
         underlineColorAndroid="transparent"
       />
     </View>  
            </View>

            <TouchableOpacity onPress={() =>onEdit(name, location, phone, mail, id)}>
            <View style={styles.btn}>
               <Text style={{color: 'black', fontWeight: 'bold'}}>SAVE AND UPDATE</Text>
           </View>
           </TouchableOpacity>
           
          </View>
          
      </View>
      </TouchableWithoutFeedback>
    );
  
}

const styles = StyleSheet.create({
  header:{
    backgroundColor: "#DCDCDC",
  },
  headerBtn: {
    height: 50,
    width: 50,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 30
  },
  headerContent:{
    padding:30,
    alignItems: 'center',
  },
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: "white",
    marginBottom:10,
  },
  name:{
    fontSize:22,
    color:"#000000",
    fontWeight:'600',
  },
  userInfo:{
    fontSize:16,
    color:"#778899",
    fontWeight:'600',
  },
  body:{
    backgroundColor: "#778899",
    height:500,
    paddingTop: 15,
    paddingLeft: 15
  },
  item:{
    flexDirection : 'row',
    paddingBottom: 25,
  },
  infoContent:{
    flex:1,
    alignItems:'flex-start',
    paddingLeft:15,
    paddingTop: 10
  },
  iconContent:{
    flex:1,
    alignItems:'flex-end',
    paddingRight:5,
    marginTop: 12,
  },
  icon:{
    width:30,
    height:30,
    marginTop:15,
  },
  info:{
    fontSize:18,
    marginTop:15,
    color: "#FFFFFF",
  },
  btn:{
      height: 60,
      marginHorizontal: 20,
      backgroundColor: '#ff5a66',
      borderRadius: 15,
      justifyContent: 'center',
      alignItems: 'center',

  },
  InputContainer: {
    height: 40,
    alignItems: 'flex-start',
    width: 200,
    marginLeft: 10,
    marginBottom: 5,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: "black",
  },
 
});

export default EditUser;