import React from 'react';
import { ImageBackground, StyleSheet, View, Text, SafeAreaView,Image } from 'react-native';
import { TouchableOpacity } from 'react-native';
import { backgroundColor } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';



function Welcome({navigation}){
   
    return(
        <SafeAreaView style={{flex:1, backgroundColor: 'lightgrey'}}>
             
             <Image
               source={require("../assets/rent4.jpg")}
               style={styles.image}
             />
             <View style={{paddingHorizontal: 20, paddingTop: 35}}>
                  <View>
                      <Text style={styles.title}>HOUSE RENTAL</Text>
                      <Text style={styles.title}> SYSTEM</Text>
                  </View>
                  <View style={{marginTop:10}}>
                      <Text style={styles.info}>Bringing all houses at your finger tips</Text>
                  </View>
             </View>
        <View style={{flex: 1, justifyContent: 'flex-end', paddingBottom: 20}}>
           <TouchableOpacity onPress={() => navigation.navigate('LoginScreen')}>
           <View style={styles.btn}>
               <Text style={{color: 'white'}}>GET STARTED</Text>
           </View>
           </TouchableOpacity>
           
        </View>
        

        </SafeAreaView>
    
    );
}
 
const styles = StyleSheet.create({
     image:{
         height: '60%',
         width: '100%',
         borderBottomLeftRadius: 100,
     },
     title:{
          fontSize: 32,
          fontWeight: 'bold',
     },
     info:{
         fontSize: 16,
         color: 'grey'
     },
     btn:{
         height: 60,
         marginHorizontal: 20,
         backgroundColor: 'black',
         borderRadius: 15,
         justifyContent: 'center',
         alignItems: 'center',

     }
    
});
export default Welcome;