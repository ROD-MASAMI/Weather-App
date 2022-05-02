import { StatusBar } from 'expo-status-bar';
import {StyleSheet, Text, View,Button, TextInput, TouchableWithoutFeedback, Keyboard } from 'react-native';
import React, {useEffect, useState} from 'react';
import { TouchableOpacity } from 'react-native';
import axios, { Axios } from 'axios';
import {BASE_URL} from '@env'
 function RegisterScreen({navigation}) {

  const [loading, setLoading] = useState(false);
  const [name, setName] = useState('');
  const [type, setType] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

const onRegister = (name, type, phone, email, password) => {
if(!email && !name)
alert(email)
else{
  axios.post('https://349c-197-250-194-228.eu.ngrok.io/api/register',{name:name, type:type, phone:phone, email:email, password:password}).then(response =>{
    console.log(response.message)
  }).catch(error => console.log(error))
  
}


}

  return (
    <TouchableWithoutFeedback onPress={()=>{
      Keyboard.dismiss();
    }}>
     <View style={styles.container}>
        <TouchableOpacity  onPress={() => navigation.popToTop()}>
            <Text style={styles.registerText}>HOME</Text>
            </TouchableOpacity>
     <Text style={[styles.title, styles.leftTitle]}>Sign In</Text>

     <View style={styles.InputContainer}>
       <TextInput
         style={styles.body}
         placeholder="Full-Name "
         onChangeText={setName}
         value={name}
         placeholderTextColor={"black"}
         underlineColorAndroid="transparent"
       />
     </View>

     <View style={styles.InputContainer}>
       <TextInput
         style={styles.body}
         placeholder="Landlord or Tenant "
         onChangeText={setType}
         value={type}
         placeholderTextColor={"grey"}
         underlineColorAndroid="transparent"
       />
     </View>

     <View style={styles.InputContainer}>
       <TextInput
         style={styles.body}
         keyboardType='phone-pad'
         placeholder="Phone_No "
         onChangeText={setPhone}
         value={phone}
         placeholderTextColor={"grey"}
         underlineColorAndroid="transparent"
       />
     </View>

     <View style={styles.InputContainer}>
       <TextInput
         style={styles.body}
         placeholder="E-mail "
         keyboardType='email-address'
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
     <Button
       
       style={styles.loginText}
       onPress={() =>onRegister(name, type, phone, email, password)}
       title="Register"
       >
     </Button>

     <Text>Already registered?</Text>
     <TouchableOpacity onPress={()=> navigation.navigate('LoginScreen')}>
      <Text style={styles.registerText}>LOGIN HERE</Text>
      </TouchableOpacity>

   </View>
   </TouchableWithoutFeedback>

 );
}



const styles = StyleSheet.create({
 container: {
   flex: 1,
   alignItems: 'center',
   paddingTop: 20,
   
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
 },
 registerText:{
   color: '#4ecdc4',
 },
 placeholder: {
   color: 'red',
 },
 InputContainer: {
   width: "80%",
   marginTop: 30,
   borderWidth: 1,
   borderStyle: 'solid',
   borderColor: "grey",
   borderRadius: 25,
 },
 body: {
   height: 42,
   paddingLeft: 20,
   paddingRight: 20,
   color: "black",
 },

});

export default RegisterScreen;
