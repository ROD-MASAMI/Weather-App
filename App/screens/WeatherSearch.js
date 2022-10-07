
import {StyleSheet, Text, ImageBackground,  View, TouchableOpacity, TextInput, TouchableWithoutFeedback, Keyboard, ActivityIndicator} from 'react-native';
import React, {useState, useEffect, useContext} from 'react';
import { SearchContext } from '../Context';
import COLORS from '../consts/colors';
import { MaterialIcons, AntDesign } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import Display from './display';
import baseURL from '../consts/baseURL';
import key from '../consts/key';
import axios, { Axios } from 'axios';
const WeatherSearch = ({navigation, route}) =>{
    
    const [info, setInfo] = useContext(SearchContext);
    const [Load, setLoad] = useState(false);
    const [city, setCity] = useState();
    const [disp, setdisp] = useState(false);
    const [Weather, setWeather] = useState({});

    

    const Search = async () => {
        if (!city){
            alert("Enter a city to search")
        }
        else{
            try{
        setLoad(true);
        const response = await axios.get(`${baseURL}weather?q=${city}&appid=${key}&units=metric`);
        if(!(response == '')){
            setWeather(response.data);
            setLoad(false);
            setdisp(true);
            setInfo(false);
          }
          else{
            setLoad(false);
            alert("No results found for" + {city})
          }
            }catch(error) 
            {
         setLoad(false);
        alert(`No results found for ${city}`);
        };
        }
    }
  

if(disp && !(info)){
    return(
        <Display Weather ={Weather} />
    );
}
else{
 return(
    <TouchableWithoutFeedback onPress={()=>{
        Keyboard.dismiss();
      }}>
         
     <ImageBackground
     source={require('../assets/background.png')}
     style={{ flex: 1,}}>
        {Load ? (
        <>
        <View style={styles.loader}>
              <ActivityIndicator 
              size={'large'}
              color='green'
              />
              </View>
        </>) 
        : (
            <>
            <View style={styles.editText}>
           <Text style={{fontSize: 30, color:'white',}}>Hewa</Text>
           <View style={styles.dot}></View>
               </View>
<View style={{marginTop: 65,}}>
    <View 
       style={{
           flexDirection: 'column',
           paddingLeft: 35,
           paddingTop: 95,
           justifyContent: 'space-between',
           paddingHorizontal: 20,
       }}>
        
           <View style={styles.search}>
           <TextInput style={{paddingBottom:15, paddingLeft:50, color:'white'}} 
           placeholder='Enter city name to search'
           onChangeText={setCity}
           value={city}
           />
           </View>
           <TouchableOpacity 
           onPress={() => Search()}
           style={styles.searchBtn}>
           <MaterialIcons name="search" size={24} color='white' style={{marginLeft:4}}/>
           <Text
           style={{
            fontWeight: '700',
            fontSize: 18,
            color: 'white',
            marginLeft: 5
           }}
           >Search</Text>
           </TouchableOpacity>
       </View>
         
</View>
            </>
        )}
     
 
 </ImageBackground>
 
 </TouchableWithoutFeedback>
 );
        }
};


const styles = StyleSheet.create({
    
    search:{
        height: 42,
        width: 300,
        paddingTop: 10,
        borderColor: 'white',
        borderWidth: 2,
        borderRadius: 10,
    },
    searchBtn:{
        height: 42,
        flexDirection:'row',
        width: 109,
        paddingTop: 8,
        marginTop:40,
        marginLeft:100,
        borderColor: 'white',
        backgroundColor: '#FFB200',
        borderWidth: 2,
        borderRadius: 10,
    },
    editText:{
        flexDirection: 'row',
       marginLeft:150,
        marginTop:50,
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
    loader:{
        marginTop:260,
        marginLeft:20,
        
    },
});
export default WeatherSearch;











