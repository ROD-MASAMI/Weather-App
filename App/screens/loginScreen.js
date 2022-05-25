import { StatusBar } from 'expo-status-bar';
import React, {useEffect, useState, useContext} from 'react';
import {StyleSheet, Text, View,Button, TextInput, TouchableWithoutFeedback, Keyboard, ActivityIndicator,} from 'react-native';
import { TouchableOpacity } from 'react-native';
import { AuthContext } from '../context/AuthContext';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';


 function LoginScreen ({navigation}) {
  
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState('');
  const[info, setInfo] = useContext(AuthContext);
  const [password, setPassword] = useState('');
  const [successMessage, setSuccess] = useState('');

 const onLogin =  (email, password) =>{
   
  setLoading(true);
  
    if(!email || !password){
        alert("Please enter all  fields")
        
        setLoading(false);
        
      }
      else{
       axios.post('https://7254-197-250-230-61.eu.ngrok.io/api/login',{email:email, password:password}).then(response =>{
         if(response.data.status){
           setInfo(response.data);
          setLoading(false);
          
         }
         else{
           setLoading(false);
           
           alert(response.data.message)
         }
         
       }).catch(error => alert(error));
        setLoading(false);
        
      }

 }
  
  return (
    <TouchableWithoutFeedback onPress={()=>{
      Keyboard.dismiss();
    }}>
       
            <View style={styles.container}>
           
      <Text style={[styles.title, styles.leftTitle]}>Sign In</Text>
    
      <View style={styles.InputContainer}>
      
        <TextInput
          style={styles.body}
          keyboardType='email-address'
          placeholder="E-mail "
          onChangeText={setEmail}
          value={email}
          placeholderTextColor={"grey"}
          underlineColorAndroid="transparent"
        />
      </View>
      <View style={styles.InputContainer}>
        <TextInput
          style={styles.body}
          secureTextEntry={true}
          placeholder="Password"
          onChangeText={setPassword}
          value={password}
          placeholderTextColor={"grey"}
          underlineColorAndroid="transparent"
        />
      </View>
      {loading ? (
         
          <ActivityIndicator
             size={'large'}
             
          />) : (
            <TouchableOpacity style={[styles.buttonContainer, styles.loginButton]} onPress={() => onLogin(email, password)}>
            <Text style={styles.loginText}>LOGIN</Text>
          </TouchableOpacity>
          )}
     
      
      <Text>Don't Have An Account?</Text>
      <TouchableOpacity onPress={()=> navigation.navigate('RegisterScreen')}>
       <Text style={styles.registerText}>REGISTER HERE</Text>
       </TouchableOpacity>
      
      
    </View>
            
    

 </TouchableWithoutFeedback>



  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 66,
    
  },
  or: {
    color: 'black',
    marginTop: 40,
    marginBottom: 10,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: "#ff5a66",
    marginTop: 20,
    marginBottom: 20,
  },
  leftTitle: {
    alignSelf: 'stretch',
    textAlign: 'center',
    marginLeft: 20,
  },
  content: {
    paddingLeft: 50,
    paddingRight: 50,
    textAlign: 'center',
    fontSize: 20,
    color: "#696969",
  },
  loginContainer: {
    width: "70%",
    backgroundColor: "#ff5a66",
    borderRadius: 25,
    padding: 10,
    marginTop: 30,
  },
  loginText: {
    color: "white",
    fontWeight: 'bold',

  },
  registerText:{
    color: '#4ecdc4',
  },
  placeholder: {
    color: 'red',
  },
  InputContainer: {
    width: "80%",
    marginBottom: 25,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: "grey",
    borderRadius: 25,
  },
  body: {
    height: 42,
    paddingLeft: 20,
    paddingRight: 20,
    color: "#696969",
  },
  buttonContainer: {
    height:45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:20,
    width:300,
    borderRadius:30,
    backgroundColor:'transparent'
  },
  loginButton: {
    backgroundColor: "#00b5ec",
    shadowColor: "#808080",
    shadowOffset: {
      width: 0,
      height: 9,
    }
  }

});

export default LoginScreen;
