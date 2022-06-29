import React, { useContext, useState, useEffect } from 'react';
import { FontAwesome, MaterialIcons, MaterialCommunityIcons, Fontisto, FontAwesome5, Ionicons } from '@expo/vector-icons';
import { AuthContext } from '../../context/AuthContext';;
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  ScrollView,
  Image,
  TouchableOpacity
} from 'react-native';
import baseURL from '../../consts/baseURL';

import axios from 'axios';


function Info({navigation}) {
  
    const [info, setInfo] = useContext(AuthContext);
    const[disp, setDisp] = useState({});
    const[test, setTest] = useState({});
  const now = new Date();
    useEffect(() =>{
        axios.get(`${baseURL}display/${info.user.id}`).then(response =>{
            if(!(response == '')){
              setDisp(response.data);
              setTest(response.data.display);
            }
            
          }).catch(error => alert(error));
    }, []) 

    const card =({item}) =>{
        const end = new Date(item.END_DATE);
        const rem = end.getTime(Date) - now.getTime(Date);
        const month = Math.round(rem / (1000*60*60*24));
return( 
  <View> 
  <View style={styles.card}>
                                <Text style={[styles.cardText,{paddingLeft:100}]}>Tenant details</Text>
                                <View style={styles.cardHeader}>
                                    <View style={styles.cardHeaderLeft}>
                                        <Text style={styles.cardHeaderLeftText}>House Name:</Text>
                                        <Text style={[styles.cardHeaderLeftText]}>Address:</Text>
                                        <Text style={styles.cardHeaderLeftText}>Duration:</Text>
                                        <Text style={styles.cardHeaderLeftText}>Time left:</Text>
                                        <Text style={styles.cardHeaderLeftText}>Paid amount:</Text>
                                        <Text style={styles.cardHeaderLeftText}>Amount remaining:</Text>
                                        <Text style={styles.cardHeaderLeftText}>Water:</Text>
                                        <Text style={styles.cardHeaderLeftText}>Technician:</Text>
                                        <Text style={styles.cardHeaderLeftText}>Electricity:</Text>
                                    </View>
                                    <View style={[styles.cardHeaderRight,{flexWrap: 'wrap'}]}>
                                        <Text style={styles.cardHeaderRightText}>{item.title}</Text>
                                        <Text style={[styles.cardHeaderRightText,{flexWrap: 'wrap'}]}>{item.location}</Text>
                                        <Text style={styles.cardHeaderRightText}>{item.DURATION} months</Text>
                                        <Text style={styles.cardHeaderRightText}>{month} days</Text>
                                        <Text style={styles.cardHeaderRightText}>{item.DEPOSIT}</Text>
                                        <Text style={styles.cardHeaderRightText}>{item.TOTAL_RENT - item.DEPOSIT}</Text>
                                        <Text style={styles.cardHeaderRightText}>{item.WATER_METER_NO}</Text>
                                        <Text style={styles.cardHeaderRightText}>{item.TECHNICIAN}</Text>
                                        <Text style={styles.cardHeaderRightText}>{item.POWER_METER_NO}</Text>
                                    </View>
                                </View>
                             </View>
                             <TouchableOpacity  style={{paddingTop:150}} onPress={() => navigation.navigate('Complaints', item)}>
                             <View style={styles.btn}>
                                <Text style={{color: 'black', fontWeight: 'bold'}}>COMPLAINTS</Text>
                            </View>
                            </TouchableOpacity>
                            </View>
)
    }
    return (
      <View style={styles.body}>
          {disp.status ? (
           <>
          <FlatList
       contentContainerStyle={{padding:20}} 
       vertical={true} 
       data={disp.display}
       keyExtractor={(item) => item.house_id}
       renderItem={card}           
       />
       
          </>
          ):(
            <View style={styles.body2}>
                <View style={styles.editText}>
                <Text style={{fontSize: 25,}}>YOU ARE NOT REGISTERED AS A TENANT TO ANY HOUSE</Text>
                </View>
                </View>
                
          )}
          
      </View>
    );
  
}

const styles = StyleSheet.create({
  header:{
    backgroundColor: "#DCDCDC",
    
  },
  editText:{
    flexDirection: 'row',
    paddingLeft: 40,
    marginTop: 230,
    alignItems: 'center',
    
  },
  headerBtn: {
    height: 50,
    width: 50,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 30
  },
  name:{
    fontSize:22,
    color:"#000000",
    fontWeight:'600',
  },
  userInfo:{
    fontSize:16,
    color:"#778899",
    fontWeight:'600',
  },
  body:{
    backgroundColor: "#778899",
    flex:1,
    
    
    
  },
  body2:{
    backgroundColor: "#778899",
    height:1000,
    alignItems:'center',
    
    
  },
  item:{
    flexDirection : 'row',
    paddingBottom:10,
  },
  infoContent:{
    flex:1,
    alignItems:'flex-start',
    paddingLeft:15,
    paddingTop: 10
  },
  iconContent:{
    flex:1,
    alignItems:'flex-end',
    paddingRight:5,
    marginTop: 12,
  },
  icon:{
    width:30,
    height:30,
    marginTop:15,
  },
  info:{
    fontSize:18,
    marginTop:15,
    color: "#FFFFFF",
  },
  btn:{
      height: 60,
      marginHorizontal: 20,
      backgroundColor: '#ff5a66',
      borderRadius: 15,
      justifyContent: 'center',
      alignItems: 'center',

  },
  card: {
    
    width:420,
    backgroundColor: '#6CC775',
    top: 100,
    bottom: 10,
    borderRadius: 8,
},
cardHeader: {
    flexDirection: 'row',
    padding: 10,
},
cardHeaderLeft: {

    justifyContent: 'flex-start',
    fontSize: 14,
    fontWeight: 'bold',
    color: '#344567',
    borderBottomWidth: 1,
    
},
cardHeaderLeftText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#344567',
    borderBottomWidth: 1,
},
cardHeaderRightText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#344567',
    borderBottomWidth: 1,
},
cardHeaderRight: {
    justifyContent: 'flex-start',
    borderColor: '#497FAF',
    left: 15,
},
cardi: {
    flex: 1,
    backgroundColor: 'lightgrey',
    padding: 10,
    marginHorizontal: 20,
    top: 100,
    marginTop: 10,
    bottom: 10,
    borderRadius: 8,
},
cardText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#000',
    borderBottomWidth: 1,
    borderBottomColor: '#000',
    alignItems: 'center',
    left: 10,
}
});

export default Info;