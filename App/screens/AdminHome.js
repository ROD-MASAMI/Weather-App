import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Button } from 'react-native';

export default function AdminHome({navigation}) {

  return( 
    <View style={{paddingHorizontal: 20, paddingTop: 35}}>
    <View>
        <Text style={styles.title}>ADMIN HOME</Text>
        <Text style={styles.title}> SCREEN</Text>
    </View>
    <View style={{marginTop:10}}>
        <Text style={styles.info}>All admin functions here</Text>
    </View>
</View>
  ) 
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