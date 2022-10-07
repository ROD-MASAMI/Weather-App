import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { NavigationContainer, TabRouter } from '@react-navigation/native';
import WeatherSearch from '../screens/WeatherSearch';
import Reloader from '../screens/Reloader';
import Dashboard from '../screens/Dashboard';
import { FontAwesome, MaterialIcons, Ionicons } from '@expo/vector-icons';
import React, {useContext, useState} from 'react';

const Tab = createBottomTabNavigator();

const TabNavigation = () => {
    return(
     <NavigationContainer>
        <Tab.Navigator
        screenOptions={ ({ route }) => ({

            tabBarActiveTintColor:'#FFA500',
            tabBarInactiveTintColor:'white',
            tabBarShowLabel: false,
            
            tabBarStyle: {
                backgroundColor: '#224496',
                
            }
        }) }

    
        >
            <Tab.Screen
                name ="DASH"
                component={Dashboard}
                options ={{
                    headerShown: false,
                    tabBarIcon: ({color, focused}) =>(
                        <MaterialIcons name="house" size={24} color={focused ? '#FFA500' : 'white'} />
                    )
                }}                
            />
            <Tab.Screen
                name ="search"
                component={WeatherSearch}
                options ={{
                    headerShown: false,
                    tabBarIcon: ({color, focused}) =>(
                        <MaterialIcons name="search" size={24} color={focused ? '#FFA500' : 'white'} />
                    )
                }}                
            />
            <Tab.Screen
                name ="reloader"
                component={Reloader}
                options ={{
                    headerShown: false,
                    tabBarIcon: ({color, focused}) =>(
                        <Ionicons name="arrow-undo" size={24} color={focused ? '#FFA500' : 'white'} />
                    )
                }}                
            />
            
            
            
    </Tab.Navigator>
    </NavigationContainer>
   
    )

}
export default TabNavigation;