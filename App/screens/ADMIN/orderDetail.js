import React, { Component, useContext, useState } from 'react';
import COLORS from '../../consts/colors';
import { FontAwesome } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import DatePicker from '@react-native-date-picker';
import { EvilIcons } from '@expo/vector-icons';
import { AuthContext } from "../../context/AuthContext";
import baseURL from '../../consts/baseURL';
import axios, { Axios } from 'axios';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  SafeAreaView,
  TextInput,
  Button,
  Alert,
  TouchableOpacity
} from 'react-native';
function OrderDetail({navigation, route}) {
  
    
    const [Duration, setDuration] = useState('');
    const [MonthlyRent, setMonthlyRent] = useState('');
    const TotalRent = MonthlyRent * Duration;
    const [Deposit, setDeposit] = useState('');
    const [StartDate, setStartDate] = useState('');
    const [EndDate, setEndDate] = useState('');
    const [info, setInfo] = useContext(AuthContext);
    const [contract, setContract] = useState('');
    const [sdate, setSdate] = useState(new Date());
    const[edate, setEdate] = useState(new Date());
  const [sopen, setSopen] = useState(false);
  const[eopen, setEopen] = useState(false);
    const order = route.params;
    const accept = () => {
      
      axios.put(`${baseURL}editOrder/${order.REF_NO}`).then(response =>{
        if(response.data.status){
          Alert.alert('ALERT', response.data.message);
      setContract('True');
        } 
        else{
             alert(response.data.message)
             
        }
      }).catch(error => console.log(error))
    }
   
    return (
      <View style={styles.container}>
        {(contract == '') && order.STATUS_ == 'pending..' ? (
          <> <View style={styles.header}>
            <View style={styles.headerBtn}>
              <EvilIcons name="arrow-left" size={30} color="black" onPress={navigation.goBack} />
            </View>

            <View style={styles.headerContent}>

              <Image style={styles.avatar}
                source={require('../../assets/house3.jpg')} />
              <Text style={styles.name}>{order.title}</Text>

            </View>
          </View><View style={styles.body}>

              <View style={styles.editText}>
                <MaterialIcons name="edit" size={24} color="black" />
                <Text style={{ fontSize: 25, }}>ORDER DETAILS</Text>
              </View>

              <View style={styles.item}>
                <FontAwesome5 name="user-tie" size={24} color="black" />
                <Text style={{ color: "#FFFFFF", paddingLeft: 15, paddingTop: 4, fontSize: 18 }}>{order.Fullname}</Text>
              </View>

              <View style={styles.item}>
                <FontAwesome name="phone" size={24} color="black" />
                <Text style={{ color: "#FFFFFF", paddingLeft: 15, paddingTop: 5, fontSize: 18 }}>0{order.phone_no}</Text>
              </View>

              <View style={styles.item}>
                <Fontisto name="email" size={24} color="black" />
                <Text style={{ color: "#FFFFFF", paddingLeft: 15, paddingTop: 4, fontSize: 18 }}>{order.email}</Text>
              </View>

              <TouchableOpacity onPress={() => accept()}>
                <View style={styles.btn}>
                  <Text style={{ color: 'black', fontWeight: 'bold' }}>ACCEPT ORDER</Text>
                </View>
              </TouchableOpacity>
            </View> </>
           ):contract == 'True' || order.STATUS_ == 'ACCEPTED' ? 
           (
            <ScrollView>
            <View style={styles.container}>
                <SafeAreaView>
                        <View style={styles.headerWrapper}>
                        <View style={styles.headerBtn2}>
              <EvilIcons name="arrow-left" size={30} color="black" onPress={navigation.goBack} />
            </View>
                            <View style={styles.header}>
                                
                                <MaterialIcons name="edit" size={24} color="black" />
                              
                            </View>
                            <Text style={styles.headerText}>ADD CONTRACT</Text>
                        </View>
                </SafeAreaView>
                    <View style={styles.bodyWrapper}>
                  
                    <TextInput style={styles.input} 
                        placeholder="Duration of contract (months)" 
                        name="Duration"
                        value={Duration}
                        onChangeText={text => setDuration(text)}
                        placeholderTextColor = {"black"}   
                    />
                    <TextInput style={styles.input} 
                        placeholder="Monthly rent" 
                        name="MonthlyRent"
                        value={MonthlyRent}
                        onChangeText={text => setMonthlyRent(text)} 
                        placeholderTextColor = {"black"}   
                    />
                    <TextInput style={styles.input} 
                        placeholder="Total rent" 
                        name="TotalRent"
                        value={TotalRent.toString()}
                        placeholderTextColor = {"black"}   
                    />
                    <TextInput style={styles.input}
                        placeholder="Deposit"
                        name="Deposit"
                        value={Deposit}
                        onChangeText={text => setDeposit(text)}
                        placeholderTextColor = {"black"}
                    />
                    <TextInput style={styles.input} 
                        placeholder="Start Date" 
                        name="StartDate"
                        value={sdate}
                        onChangeText={text => setStartDate(text)} 
                        placeholderTextColor = {"black"}   
                    />
                    <TextInput style={styles.input}
                        placeholder="End Date"
                        name="EndDate"
                        value={edate}
                        onChangeText={text => setEndDate(text)}
                        placeholderTextColor = {"black"}
                    />
                    
                    </View>
                    <View style={styles.buttonWrapper}>
                    <Button 
                        title="Add Contract" 
                        color= '#075e54'
                        accessibilityLabel="Add Contract"
                      
    
                    />
                    </View>
    
            </View>
            </ScrollView>
           )

           :( <Text>TENANT HAS ALREADY BEEN REGISTERED</Text>)}
      </View>
    );
  
}

const styles = StyleSheet.create({
  header:{
    backgroundColor: "#DCDCDC",
    
  },
  editText:{
    flexDirection: 'row',
    paddingLeft: 90,
    marginBottom: 30,
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
  headerBtn2: {
    height: 50,
    width: 50,
    borderRadius: 10,
    paddingTop: 15,
    marginRight:30,
    paddingLeft:1,
  },
  headerContent:{
    padding:30,
    alignItems: 'center',
  },
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: "white",
    marginBottom:10,
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
    height:500,
    paddingTop: 15,
    paddingLeft: 15,
    
  },
  item:{
    flexDirection : 'row',
    paddingBottom: 25,
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
  container: {
    flex: 1,
},
headerWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    backgroundColor: 'white',
    top: 0,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 10,
    marginRight: 10,
},
headerText: {
    fontSize: 20,
    fontWeight: '600',
    color: '#075e54',
},
bodyWrapper: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 10,
    marginLeft: 10,
    marginRight: 10,
    marginTop: 10,
},
input: {
    borderWidth: 1,
    borderColor: '#075e54',
    borderRadius: 5,
    padding: 10,
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 10,
    marginRight: 10,
    textDecorationColor: '#075e54',
    
},
buttonWrapper: {
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 10,
    marginRight: 10,
    color: '#075e54',
}
});

export default OrderDetail;