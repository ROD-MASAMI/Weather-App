
import {StyleSheet, ActivityIndicator, ImageBackground,  View} from 'react-native';
import React from 'react';

const LoadingScreen = ({navigation, route}) =>{
    
    return(
    
         
        <ImageBackground
        source={require('../assets/background.png')}
        style={{ flex: 1,}}>
   
         <View style={styles.searchBtn}>
              <ActivityIndicator 
              size={'large'}
              color='green'
              />
              </View>
    
    
    </ImageBackground>
    
    
    );
   };
   
   
   const styles = StyleSheet.create({
    
       searchBtn:{
           marginTop:260,
           marginLeft:20,
           
       },
   });
export default LoadingScreen;











