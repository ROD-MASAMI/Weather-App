
import {StyleSheet, Text, ImageBackground, Modal, TouchableOpacity, View} from 'react-native';
import React, {useState, useEffect, useContext} from 'react';
import { SearchContext } from '../Context';


const Reloader = ({navigation, route}) =>{
    
    
    const [info, setInfo] = useContext(SearchContext);
    const [modalVisible, setModalVisible] = useState(!info);
    
const Reload = () => {
    setInfo(true);
    navigation.navigate('search');
}

const Reload2 = () => {
    navigation.navigate('search');
}
    

    return(
    
         
        <ImageBackground
        source={require('../assets/background.png')}
        style={{ flex: 1,}}>
     
        
    

         <View style={styles.searchBtn}>
            <Modal
            transparent={true}
            visible = {!info}
            
            >
                <TouchableOpacity
                style={styles.modalView}
                onPress={()=> Reload()}
                >
                    <View style={{marginTop: -10}}>
                    <Text style={{fontSize:20}}>SEARCH CACHE CLEARED</Text>
                    </View>

                    <View
                    style={{paddingTop:10,  }}
                    >
                        <View
                        
                        style={{
                            borderRadius: 2,
                            marginLeft: 100,
                            
                        }}
                        >
                        <Text style={{fontSize:20}}>!!!!</Text>

                        </View>

                        <View
                        style={{marginLeft:30, marginTop:9}}>
                        <Text style={{fontSize:20}}>PRESS TO GO BACK</Text>
                        </View>
                    </View>
                </TouchableOpacity>
                
            </Modal>
         
     
              </View>
    
    
    </ImageBackground>
    
    
    );
   };
   
   
   const styles = StyleSheet.create({
    
       searchBtn:{
           marginTop:26,
           marginLeft:20,
           
       },
       modalView: {
        marginTop: 250,
        marginLeft:50,
        width: 250,
        backgroundColor: 'white',
        borderRadius: 20,
        paddingTop:30,
        paddingBottom:25,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
      },
   });
export default Reloader;











