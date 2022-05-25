import React, { Component, useContext } from 'react';
import COLORS from '../consts/colors';
import { FontAwesome } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { EvilIcons } from '@expo/vector-icons';
import { AuthContext } from "../context/AuthContext";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity
} from 'react-native';

function UserProfile({navigation}) {
  const log = {
    status: '',
       token: '',
       user: {
         id:'',
         Fullname: '',
         email:'',
         role: '',
         phone_no: '',
         created_at: '',
         updated_at: ''
       },
       message: '',
  }
    const [info, setInfo] = useContext(AuthContext);

    const Logout =() =>{
      setInfo(log);
    }
    return (
      <View style={styles.container}>
          <View style={styles.header}>
          <View style={styles.headerBtn}>
              <EvilIcons name="arrow-left" size={30} color="black"  onPress={navigation.goBack}/>
              </View>
            <View style={styles.headerContent}>
                <Image style={styles.avatar}
                 source={require('../assets/person.jpeg')}/>

                <Text style={styles.name}>{info.user.Fullname}</Text>
                <Text style={styles.userInfo}>{info.user.email} </Text>
                <Text style={styles.userInfo}>DAR ES SALAAM </Text>
            </View>
          </View>

          <View style={styles.body}>
            <View style={styles.item}>           
              <FontAwesome name="phone" size={24} color="black" />       
                <Text style={{color: "#FFFFFF", paddingLeft: 15, paddingTop: 5, fontSize: 18}}>{info.user.phone_no}</Text>
            </View>

            <View style={styles.item}>
              <Fontisto name="email" size={24} color="black" />     
                <Text style={{color: "#FFFFFF", paddingLeft: 15, paddingTop: 4, fontSize: 18}}>{info.user.email}</Text>  
            </View>

            <View style={styles.item}>
            <FontAwesome5 name="user-tie" size={24} color="black" />
              {info.user.role == 1 ?(
                  <Text style={{color: "#FFFFFF", paddingLeft: 15, paddingTop: 4, fontSize: 18}}>TENANT</Text>
              ):(<Text style={{color: "#FFFFFF", paddingLeft: 15, paddingTop: 4, fontSize: 18}}>LANDLORD</Text>) }     
                  
            </View>
            <TouchableOpacity onPress={() =>Logout()}>
            <View style={styles.btn}>
               <Text style={{color: 'black', fontWeight: 'bold'}}>LOGOUT</Text>
           </View>
           </TouchableOpacity>
          </View>
          
      </View>
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

  }
});

export default UserProfile;