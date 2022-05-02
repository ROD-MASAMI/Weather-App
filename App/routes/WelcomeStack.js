import React, {useContext, useState} from 'react';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createNavigationContainerRef, StackActions } from "@react-navigation/native";
import Welcome from "../screens/welcome";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "../screens/HomeScreen";
import AdminHome from '../screens/AdminHome';
import UserProfile from '../screens/userProfile';
import { AuthContext } from "../context/AuthContext";
import LoginScreen from "../screens/loginScreen";
import RegisterScreen from "../screens/RegisterScreen";


const Stack = createNativeStackNavigator();
function Rod(){
    const [info, setInfo] = useContext(AuthContext);
    return(
        <NavigationContainer>
  <Stack.Navigator>
     {info.token == '' ? ( 
         <>
    <Stack.Screen
                   name="Welcome"
                    component={Welcome}
                    options={{
                        headerStyle: {
                            backgroundColor: 'white',
                            opacity: 3.0
                        },
                        headerShown: false,
                    }} />
                    
                    <Stack.Screen
                        name="LoginScreen"
                        component={LoginScreen} />
                        
                        <Stack.Screen
                        name="RegisterScreen"
                        component={RegisterScreen} />  
                        </>
                 ) :
                 (!info.token =='') && info.user.role =='1' ? (
          <>
                    <Stack.Screen
                    name="HomeScreen"
                    component={HomeScreen}
                    options ={{
                        headerShown: false,
                    }}
                    />

                    <Stack.Screen
                    name="UserProfile"
                    component={UserProfile}
                    options ={{
                        headerShown: false,
                    }}
                    />

           </>         
    ):(
        <>
        <Stack.Screen
        name="AdminHome"
        component={AdminHome}
        options ={{
            headerShown: false,
        }}
        />

</> 
    )}
        
        
    </Stack.Navigator>
    </NavigationContainer>
    );
}  

export default Rod;