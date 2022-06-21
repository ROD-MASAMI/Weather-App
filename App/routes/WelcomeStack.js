import React, {useContext, useState} from 'react';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createNavigationContainerRef, StackActions } from "@react-navigation/native";
import Welcome from "../screens/welcome";
import { NavigationContainer } from "@react-navigation/native";
import SearchDrop from '../screens/SHARED/SearchDrop';
import Tabs from './tabs';
import AdminTabs from './AdminTabs';
import OrderDetail from '../screens/ADMIN/orderDetail';
import EditUser from '../screens/SHARED/EditUser';
import HouseDetail from '../screens/TENANT/HouseDetail';
import HomeScreen from "../screens/TENANT/HomeScreen";
import AdminHome from '../screens/ADMIN/AdminHome';
import UserProfile from '../screens/SHARED/userProfile';
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
                    name="Tabs"
                    component={Tabs}
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

                     <Stack.Screen
                    name="EditUser"
                    component={EditUser}
                    options ={{
                        headerShown: false,
                    }}
                    />

                    <Stack.Screen
                    name="HouseDetail"
                    component={HouseDetail}
                    options ={{
                        headerShown: false,
                    }}
                    />
                    <Stack.Screen
                    name="SearchDrop"
                    component={SearchDrop}
                    options ={{
                        headerShown: false,
                    }}
                    />


           </>         
    ):(
        <>
          <Stack.Screen
        name="AdminHome"
        component={AdminTabs}
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

                    <Stack.Screen
                    name="HouseDetail"
                    component={HouseDetail}
                    options ={{
                        headerShown: false,
                    }}
                    />

             <Stack.Screen
                    name="OrderDetail"
                    component={OrderDetail}
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