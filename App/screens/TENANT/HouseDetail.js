import React, {useContext, useState} from 'react';
import {
  ImageBackground,
  SafeAreaView,
  View,
  Text,
  Alert,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  Image,
  Dimensions,
  ScrollView,
} from 'react-native';
import { EvilIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { AuthContext } from '../../context/AuthContext';
import axios, { Axios } from 'axios';
import baseURL from '../../consts/baseURL';
import { MaterialIcons } from '@expo/vector-icons';
import COLORS from '../../consts/colors';
const {width} = Dimensions.get('screen');
const HouseDetail = ({navigation, route}) => {

  const houses = route.params;
  const [info, setInfo] = useContext(AuthContext);
  const[hID, setHID] = useState(houses.house_id);
  const[lID, setLID] = useState(houses.landlord_id);
  const[uID, setUID] = useState(info.user.id);

  const InteriorCard = ({interior}) => {
    return <Image source={interior} style={style.interiorImage} />;
  };

   const book = (hID, lID, uID) => {
    axios.post(`${baseURL}book`,{house_id:hID, landlord_id:lID, user_id:uID}).then(response =>{
      if(response.data.status){
        Alert.alert('ALERT', response.data.message, [
          {text: 'OK', onPress: () => navigation.goBack},
        ]);
      } 
      else{
           alert(response.data.message)
      }
    }).catch(error => console.log(error))
    
  
   }

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: COLORS.white}}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* House image */}
        
        <View style={style.backgroundImageContainer}>
          <ImageBackground style={style.backgroundImage} source={require('../../assets/house3.jpg')}>
            <View style={style.header}>
              <View style={style.headerBtn}>
              <EvilIcons name="arrow-left" size={30} color="black"  onPress={navigation.goBack}/>
              </View>
              <View style={style.headerBtn}>
              <MaterialIcons name="favorite" size={20} color={COLORS.red} />
              </View>
            </View>
          </ImageBackground>

          {/* Virtual Tag View */}
          <View style={style.virtualTag}>
            <Text style={{color: COLORS.white}}>Virtual tour</Text>
          </View>
        </View>

        <View style={style.detailsContainer}>
          {/* Name and rating view container */}
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text style={{fontSize: 20, fontWeight: 'bold'}}>
              {houses.title}
            </Text>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <View style={style.ratingTag}>
                <Text style={{color: COLORS.white}}>4.8</Text>
              </View>
              <Text style={{fontSize: 13, marginLeft: 5}}>155 ratings</Text>
            </View>
          </View>

          {/* Location text */}
          <Text style={{fontSize: 16, color: 'grey'}}>
            {houses.location}
          </Text>

          {/* Facilities container */}
          <View style={{flexDirection: 'row', marginTop: 20}}>
            <View style={style.facility}>
            <FontAwesome name="bed" size={18} color="black" />
              <Text style={style.facilityText}>{houses.Rooms}</Text>
            </View>
            <View style={style.facility}>
            <FontAwesome name="bathtub" size={18} color="black" />
              <Text style={style.facilityText}>{houses.bathroom}</Text>
            </View>
            <View style={style.facility}>
            <MaterialIcons name="aspect-ratio" size={18} color="black" />
              <Text style={style.facilityText}>{houses.size}</Text>
            </View>
          </View>
          <Text style={{marginTop: 20, color: 'grey'}}>
            {houses.details}
          </Text>

          {/* Interior list */}
          <FlatList
            contentContainerStyle={{marginTop: 20}}
            horizontal
            showsHorizontalScrollIndicator={false}
            keyExtractor={(_, key) => key.toString()}
            data={houses.interiors}
            renderItem={({item}) => <InteriorCard interior={item} />}
          />

          {/* footer container */}
          <View style={style.footer}>
            <View>
              <Text
                style={{color: COLORS.blue, fontWeight: 'bold', fontSize: 18}}>
                ${houses.price}
              </Text>
              <Text
                style={{fontSize: 12, color: COLORS.grey, fontWeight: 'bold'}}>
                Total Price
              </Text>
            </View>
            {info.user.role =='1' ? (
            <TouchableOpacity onPress={() =>book(hID, lID, uID)}>
            <View style={style.bookNowBtn}>
              <Text style={{color: COLORS.white}}>Book Now</Text>
            </View>
            </TouchableOpacity>
            ) :(<TouchableOpacity>
            <View style={style.bookNowBtn}>
              <Text ></Text>
            </View>
            </TouchableOpacity>)}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  backgroundImageContainer: {
    elevation: 20,
    marginHorizontal: 20,
    marginTop: 20,
    alignItems: 'center',
    height: 350,
  },
  backgroundImage: {
    height: '100%',
    width: '100%',
    borderRadius: 20,
    overflow: 'hidden',
  },
  header: {
    paddingVertical: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },
  headerBtn: {
    height: 50,
    width: 50,
    backgroundColor: COLORS.white,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  ratingTag: {
    height: 30,
    width: 35,
    backgroundColor: COLORS.blue,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  virtualTag: {
    top: -20,
    width: 120,
    borderRadius: 10,
    height: 40,
    paddingHorizontal: 20,
    backgroundColor: COLORS.dark,
    justifyContent: 'center',
    alignItems: 'center',
  },
  interiorImage: {
    width: width / 3 - 20,
    height: 80,
    marginRight: 10,
    borderRadius: 10,
  },
  footer: {
    height: 70,
    backgroundColor: COLORS.light,
    borderRadius: 10,
    paddingHorizontal: 20,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 10,
  },
  bookNowBtn: {
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.dark,
    borderRadius: 10,
    paddingHorizontal: 20,
  },
  detailsContainer: {flex: 1, paddingHorizontal: 20, marginTop: 40},
  facility: {flexDirection: 'row', marginRight: 15},
  facilityText: {marginLeft: 5, color: 'grey'},
});

export default HouseDetail;
