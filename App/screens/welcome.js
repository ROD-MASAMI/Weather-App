import React from 'react';
import { ImageBackground, StyleSheet, View, Text } from 'react-native';
import { TouchableOpacity } from 'react-native';


function Welcome({navigation}){
   
    return(
        <ImageBackground
        style={styles.background}
        source={require("../assets/rent4.jpg")}
        >
            
        <View style={styles.login}>
            <TouchableOpacity  onPress={() => navigation.navigate('LoginScreen')}>
            <Text style={styles.loginText}>LOGIN</Text>
            </TouchableOpacity>
        </View>
        <View style={styles.register}>
            <TouchableOpacity onPress={() => navigation.navigate('RegisterScreen')} >
        <Text style={styles.registerText}>REGISTER</Text> 
        </TouchableOpacity>
        </View>
        </ImageBackground>
    
    );
}
 
const styles = StyleSheet.create({
    background:{
        width: 480,
        height: 510,
        flex: 1,
        justifyContent: 'flex-end',
        backgroundColor: '#fff',
    
    },
    login:{
        width: '100%',
        height: 80,
        backgroundColor: '#fc5c65',
        alignItems: 'center',
    },
    register:{
        width: '100%',
        height: 80,
        backgroundColor: '#4ecdc4',
    },
    text:{
        fontWeight: 'bold',
        fontSize: 30,
    },
    loginText:{
        color: '#fff',
        fontSize: 45,
        paddingRight: 110,
        paddingTop: 16,
        
        
    },
    registerText:{
        color: '#fff',
        fontSize: 45,
        paddingRight: 60,
        paddingTop: 19,
        paddingLeft: 90,
        
        
    }
  

})

export default Welcome;