import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from '../screens/HomeScreen';
import UserProfile from '../screens/userProfile';
const Tab = createBottomTabNavigator();

const Tabs = () => {
    return(
     
        <Tab.Navigator
             tabBarOptions={{
                 style: {
                     position: 'absolute',
                     bottom: 25,
                     left: 20,
                     right: 20,
                     elevation: 0,
                     borderRadius: 15,
                     height: 90,
                 },
             }}
        >
            <Tab.Screen
                name ="Home"
                component={HomeScreen}
                options ={{
                    headerShown: false,
                }}                
            />
            <Tab.Screen
                name ="userProfile"
                component={UserProfile}
                options ={{
                    headerShown: false,
                }}                
            />
            
            
    </Tab.Navigator>
   
    )

}
export default Tabs;