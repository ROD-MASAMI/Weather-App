import { StatusBar } from 'expo-status-bar';
import {StyleSheet, Text, ImageBackground, View, TouchableOpacity, Image, Dimensions} from 'react-native';
import React, {useState, useEffect} from 'react';

import { MaterialIcons, Entypo, Fontisto, Feather} from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import baseURL from '../consts/baseURL';
import key from '../consts/key';
import axios, { Axios } from 'axios';
const {width} = Dimensions.get('screen');
const ITEM_HEIGHT = 250;

const now = new Date();
const days =['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',];

const Dashboard = ({navigation, route}) =>{
   
   const [Weather, setWeather] = useState({});
   const [Load, setLoad] = useState(true);
   const city = 'London';
   
    useEffect(() =>{
        axios.get(`${baseURL}weather?q=${city}&appid=${key}&units=metric`).then(response =>{
            if(!(response == '')){
              setWeather(response.data);
              setLoad(false);
            }
            
          }).catch(error => alert(error));
    }, [])


       return(
      <ImageBackground 
      source={require('../assets/background.png')}
      style={{ flex: 1,}}>
      {Load ? (
         <></>
      ): 
      (
      <>
 <View style={styles.editText}>
            <Text style={{fontSize: 30, color:'white',}}>Hewa</Text>
            <View style={styles.dot}></View>
                </View>
 <View
 style={{flexDirection:'row', marginTop:25, marginLeft:90}}
 >
 <Entypo name="location-pin" size={30} color="#FFB200" />
 <Text
 style={{color:'white', fontSize:30, marginLeft:8}}
 >{Weather.name}</Text>
 </View>
 <View
 style={{
     marginLeft: 200,
     width: 400,
     marginTop: 5,
 }}
 >
     <Image
     style={{width: '50%', height: '50%'}}
     source={{uri: `http://openweathermap.org/img/wn/${Weather.weather[0].icon}@2x.png`}}
     ></Image>
 </View>
 
  <View
  style={{
     marginTop:-180,
     marginLeft: 60,
     flexDirection: 'row',
 
  }}
  >
     <Text
     style={{fontSize: 100 , color:'white'}}
     >{Weather.main.temp}</Text>
     <View 
     style={{flexDirection: 'row', marginTop: 70, marginLeft: 30 }}>
     <Text style={{ lineHeight: 18 , fontSize:20 , color:'white'}}>o</Text>
     <Text style={{lineHeight: 30, fontSize:30 , color:'white'}}>C</Text>
     </View>
  </View>
  <View
  style={{
     flexDirection: 'row',
     marginLeft: 120,
  }}>
     <Text style={{ lineHeight:25, fontSize: 18, color:'white' }}>Feels like </Text>
     <Text style={{ lineHeight:25 , color:'#FFC540', fontSize: 18}}>{Weather.main.feels_like} </Text>
     <Text style={{ lineHeight:12 , color:'#FFC540' }}>o </Text>
     <Text style={{ lineHeight:25, marginLeft: -3 , color:'#FFC540', fontSize: 18}}>C</Text>
  </View>
  <View
  style={{
     flexDirection: 'row',
     marginLeft: 150,
     marginTop: 8,
  }}
  >
     <Text style={{color:'white'}}>{Weather.weather[0].main}</Text>
  </View>
 
   <View
    style={{
     flexDirection: 'row',
     marginLeft: 15,
     marginTop: 60,
     justifyContent: 'space-between',
     paddingHorizontal: 20
  }}
   >
     <View
     style={{flexDirection: 'row'}}
     >
   <Fontisto name="cloudy-gusts" size={24} color="white" />
     <Text style={{marginTop: 5, marginLeft: 18, fontSize: 18, color: 'white'}}>Wind speed</Text>
     </View>
     <Text style={{marginTop: 5, fontSize: 18, color: 'white'}}>{Math.round(Weather.wind.speed * 3.6)} Km/hr</Text>
   </View>
 
   <View
    style={{
     flexDirection: 'row',
     marginLeft: 15,
     marginTop: 20,
     justifyContent: 'space-between',
     paddingHorizontal: 20
  }}
   >
     <View
     style={{flexDirection: 'row'}}
     >
   <FontAwesome name="calendar" size={24} color="white" />
     <Text style={{marginTop: 5, marginLeft: 30, fontSize: 18, color: 'white'}}>
       {days[now.getDay()]}{' '}
       {now.getDate() < 10 ? '0' : ''}{now.getDate()}{' '}
       {months[now.getMonth()]}
     </Text>
     </View>
     <Text style={{marginTop: 5, fontSize: 18, color: 'white'}}>
       {now.getHours() < 10 ? '0' : ''}{now.getHours()}{':'}
       {now.getMinutes() < 10 ? '0' : ''}{now.getMinutes()} {now.getHours() > 11 ? 'PM' : 'AM'}
     </Text>
   </View>
 
   <View
    style={{
     flexDirection: 'row',
     marginLeft: 15,
     marginTop: 20,
     justifyContent: 'space-between',
     paddingHorizontal: 20
  }}
   >
     <View
     style={{flexDirection: 'row'}}
     >
   <Feather name="cloud-rain" size={24} color="white" />
     <Text style={{marginTop: 5, marginLeft: 30, fontSize: 18, color: 'white'}}>Humidity</Text>
     </View>
     <Text style={{marginTop: 5, fontSize: 18, color: 'white'}}>{Weather.main.humidity}%</Text>
   </View>
   </>
      )
}
 </ImageBackground>
      );

 
};


const styles = StyleSheet.create({
    header:{
        paddingVertical: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        flex: 1
       // borderWidth: 0.5,
        
    },
    fontSize:{
        fontSize:18
    },
    editText:{
        flexDirection: 'row',
       marginLeft:150,
        marginTop:40,
        marginBottom: 10,
        alignItems: 'center',
        
      },
      dot:{
        height: 10,
        width: 10,
        marginTop: 10,
        marginLeft:3,
        borderRadius: 25,
        backgroundColor: '#FFB200'
    },
});
export default Dashboard;











