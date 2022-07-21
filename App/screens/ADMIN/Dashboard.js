import { StatusBar } from 'expo-status-bar';
import {StyleSheet, Text, SafeAreaView,ScrollView, FlatList, View,Button, TouchableOpacity, TextInput, TouchableWithoutFeedback, Keyboard, Image, Dimensions} from 'react-native';
import React, {useContext, useState, useCallback, useEffect} from 'react';
import COLORS from '../../consts/colors';
import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import baseURL from '../../consts/baseURL';
import SearchDrop from '../SHARED/SearchDrop';
import Contcard from '../../consts/ContCard';
import Compcards from '../../consts/Cards';
import axios, { Axios } from 'axios';
import { AuthContext } from '../../context/AuthContext';
const {width} = Dimensions.get('screen');
const ITEM_HEIGHT = 250;
const Dashboard = ({navigation, route}) =>{
    
    const [info, setInfo] = useContext(AuthContext);
    const[listTenants, setListTenants] = useState({});
    const [showTenant, setShowTenant] = useState('tenant');
    const [Tenants, setTenants] = useState({
        title: 'Tenants',
        figure: '',
        color: 'lavender'
    }); 
    const [complaints, setComplaints] = useState({
        title: 'complaints',
        figure: '',
        color: 'lightblue',
    });
    const [maintenance, setMaintenance] = useState({
        title: 'contracts',
        figure: '',
        color: 'lightyellow',
    });
    
const ShowTenant = () =>{
    setShowTenant('tenant');
}
const ShowComplaint = () =>{
    setShowTenant('complaints');
}
const ShowContract = () =>{
    setShowTenant('contracts');
}

    const Card = ({item}) =>{
        return (
        <TouchableOpacity onPress={() => ShowTenant()}>
<View style={[styles.card,{backgroundColor:item.color}]}>
                      <View style={styles.wrapText}>
                          <Text style={styles.fontSize}>{item.title}</Text>
                          <Text style={styles.fontSize}>{item.figure}</Text>
                          
                      </View>
               </View>
        </TouchableOpacity>
        
        );
    };
    const Card2 = ({item}) =>{
        return (
        <TouchableOpacity onPress={() => ShowComplaint()}>
<View style={[styles.card,{backgroundColor:item.color}]}>
                      <View style={styles.wrapText}>
                          <Text style={styles.fontSize}>{item.title}</Text>
                          <Text style={styles.fontSize}>{item.figure}</Text>
                          
                      </View>
               </View>
        </TouchableOpacity>
        
        );
    };
    const Card3 = ({item}) =>{
        return (
        <TouchableOpacity onPress={() => ShowContract()}>
<View style={[styles.card,{backgroundColor:item.color}]}>
                      <View style={styles.wrapText}>
                          <Text style={styles.fontSize}>{item.title}</Text>
                          <Text style={styles.fontSize}>{item.figure}</Text>
                          
                      </View>
               </View>
        </TouchableOpacity>
        
        );
    };   
    
    const Tenant = () =>{
        return(
            <View style={{ flexDirection: 'row', marginLeft:10, marginTop:1}}>
<View style={{ width: 100, backgroundColor: 'white'}}>
<Text style={{ fontSize: 16, fontWeight: 'bold', textAlign: 'center'}}>NAME</Text>
</View>
<View style={{ width: 100, backgroundColor: 'white'}}>
<Text style={{ fontSize: 16, fontWeight: 'bold' , textAlign: 'center'}}>HOUSE</Text>
</View>
<View style={{ width: 100, backgroundColor: 'white'}}>
<Text style={{ fontSize: 16, fontWeight: 'bold' , textAlign: 'center'}}>STATUS</Text>
</View>
</View>
        );
    }
    const tenantCard = ({item}) =>{
        return(
            <View style={{ flexDirection: 'row', marginLeft:10, marginTop:1}}>
<View style={{ width: 100, backgroundColor: 'white'}}>
<Text style={{ fontSize: 16, fontWeight: 'bold', textAlign: 'center'}}>{item.Fullname}</Text>
</View>
<View style={{ width: 100, backgroundColor: 'white'}}>
<Text style={{ fontSize: 16, fontWeight: 'bold' , textAlign: 'center'}}>{item.HOUSE_NAME}</Text>
</View>
<View style={{ width: 100, backgroundColor: 'white'}}>
<Text style={{ fontSize: 16, fontWeight: 'bold' , textAlign: 'center'}}>{item.STATUS}</Text>
</View>
</View>
        );
    }



    
     useEffect(() =>{
        axios.get(`${baseURL}tenant/${info.user.id}`).then(response =>{
            if(!(response == '')){
                setListTenants(response.data);
                
            }
            
          }).catch(error => alert(error));
    }, [])

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
<Text>PROFILE</Text>
</TouchableOpacity>
</View>
<View>
<ScrollView style={{marginTop: 10, flexDirection:'row'}} horizontal={true}>
    <Card item = {Tenants}/>
    <Card2 item = {complaints}/>
    <Card3 item = {maintenance}/>
         
</ScrollView>
{showTenant =='tenant' ? (
    <>
    <Text style = {{fontWeight:'bold', fontSize:25, paddingLeft:100 }}>TENANTS</Text>
    <Tenant/>
    <FlatList
          
           vertical={true} 
           data={listTenants.tenants}
           keyExtractor={(item) => item.REF}
           renderItem={tenantCard}           
           /> 
           </>
)
: showTenant =='complaints' ?(
<Compcards/>
):(
<Contcard />
)}
 

</View>


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











