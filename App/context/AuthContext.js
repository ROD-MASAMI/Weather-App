import { StatusBar } from 'expo-status-bar';
import React, {useEffect, useState, createContext} from 'react';
import {StyleSheet, Text, View,Button, TextInput, TouchableWithoutFeedback, Keyboard} from 'react-native';
import { TouchableOpacity } from 'react-native';
import axios from 'axios';

 export const AuthContext = createContext();

 export const AuthProvider = props =>{
     const [info, setInfo] = useState({
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
     })
    

  return(
     <AuthContext.Provider value={[info, setInfo]}>
       {props.children}
     </AuthContext.Provider>
  );
 }


 