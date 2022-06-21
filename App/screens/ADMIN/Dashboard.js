import { StatusBar } from 'expo-status-bar';
import {StyleSheet, Text, SafeAreaView,ScrollView, FlatList, View,Button, TouchableOpacity, TextInput, TouchableWithoutFeedback, Keyboard, Image, Dimensions} from 'react-native';
import React, {useContext, useState, useCallback, useEffect} from 'react';
import COLORS from '../../consts/colors';
import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import baseURL from '../../consts/baseURL';
import SearchDrop from '../SHARED/SearchDrop';
import axios, { Axios } from 'axios';
import { AuthContext } from '../../context/AuthContext';
const {width} = Dimensions.get('screen');
const ITEM_HEIGHT = 250;
const Dashboard = ({navigation, route}) =>{
    
    const [info, setInfo] = useContext(AuthContext);
    const [Tenants, setTenants] = useState({
        title: 'Tenants',
        figure: '10',
        color: 'lightgreen'
    }); 
    const [complaints, setComplaints] = useState({
        title: 'complaints',
        figure: '10',
        color: '#5f82e6',
    });
    const [maintenance, setMaintenance] = useState({
        title: 'maintenance',
        figure: '10',
        color: 'red',
    });
    const [crib, setCrib] = useState();
    const [searching, setSearching] = useState(false);
    const onSearch = (text) => {
        if(text){
        setSearching(true)
        const temp =text.toLowerCase()
        const tempList = crib.filter(item =>{
            if(item.title.match(temp))
            return item
        })
        setFiltered(tempList);
        } else{
            setSearching(false)
            
        }
    }

    const Card = ({item}) =>{
        return (
        <TouchableOpacity>
<View style={[styles.card,{backgroundColor:item.color}]}>
                      <View style={styles.wrapText}>
                          <Text style={styles.fontSize}>{item.title}</Text>
                          <Text style={styles.fontSize}>{item.figure}</Text>
                          
                      </View>
               </View>
        </TouchableOpacity>
        
        );
    };    



    
   /*  useEffect(() =>{
        axios.get(`${baseURL}Houses/${info.user.id}`).then(response =>{
            if(!(response == '')){
              setCrib(response.data);
            }
            
          }).catch(error => alert(error));
    }, [])*/

 return(
    <TouchableWithoutFeedback onPress={()=>{
        Keyboard.dismiss();
      }}>
         
     <SafeAreaView style={{backgroundColor: '#778899', flex: 1,}}>

<View style={styles.header}>
<View>
    <Text style={{color:'black', fontSize: 20, fontWeight: 'bold'}}>WELCOME</Text>
    <Text style={{color:'black', fontSize: 20, fontWeight: 'bold'}}>MR {info.user.Fullname}</Text>
</View>
<TouchableOpacity onPress={()=> navigation.navigate('UserProfile')}>
<Image source={require('../../assets/person.jpeg')} style={styles.profile}/>
<Text>PROFILE

</Text>
</TouchableOpacity>
</View>
<ScrollView style={{marginTop: 10, flexDirection:'row'}} horizontal={true}>
    <Card item = {Tenants}/>
    <Card item = {complaints}/>
    <Card item = {maintenance}/>
         
</ScrollView>
 
     
    


 </SafeAreaView>
 
 </TouchableWithoutFeedback>
 );
};


const styles = StyleSheet.create({
    header:{
        paddingVertical: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
       // borderWidth: 0.5,
       
        
        
    },
    profile:{
        height: 50,
        width: 50,
        borderRadius: 25,
    },
    listText:{
        fontSize: 16,
        fontWeight: 'bold',
        paddingBottom: 5,
        color: COLORS.grey,
    },
    activeList:{
        color: COLORS.dark,
        borderBottomWidth: 1,
        paddingBottom: 5,
    },
    wrapText:{
        flex:1,
        marginLeft:10,
        justifyContent:'center'
    },
    fontSize:{
        fontSize:18
    },
    editText:{
        flexDirection: 'row',
        paddingLeft: 120,
        paddingTop:20,
        marginBottom: 10,
        alignItems: 'center',
        
      },
    image:{
        width:100,
        height:100,
    },
    card:{
        flexDirection:'row',
        marginBottom:20,
        marginLeft:10,
        borderRadius:10,
        width: 150,
        height:150,
        shadowColor:'#000',
        shadowOffset:{
            width:0,
            height:10
        },
        shadowOpacity:.3,
        shadowRadius:20,
        padding:15
    },
    cardImage:{
        width: "100%",
        height: 120,
        borderRadius: 15,
    },
    facility:{
        flexDirection: 'row',
        marginRight: 15, 
    },
    facilityText:{
        marginLeft: 5,
        color: 'grey',

    }
});
export default Dashboard;











