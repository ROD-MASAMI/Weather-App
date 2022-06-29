import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from '../screens/TENANT/HomeScreen';
import Info from '../screens/TENANT/info';
import UserProfile from '../screens/SHARED/userProfile';
import TenantOrders from '../screens/TENANT/tenantOrders';
import { FontAwesome, MaterialIcons, Entypo } from '@expo/vector-icons';
const Tab = createBottomTabNavigator();

const Tabs = () => {
    return(
     
        <Tab.Navigator
        >
            <Tab.Screen
                name ="Home"
                component={HomeScreen}
                options ={{
                    headerShown: false,
                    tabBarIcon: ({color}) =>(
                        <MaterialIcons name="house" size={24} color="black" />
                    )
                
                }}                
            />
            <Tab.Screen
                name ="orders"
                component={TenantOrders}
                options ={{
                    headerShown: false,
                    tabBarIcon: ({color}) => (
                        <FontAwesome name="reorder" size={24} color="black" />
                        )
                }}                
            />

              <Tab.Screen
                name ="INFO"
                component={Info}
                options ={{
                    headerShown: false,
                    tabBarIcon: ({color}) => (
                        <Entypo name="info" size={24} color="black" />
                        )
                }}                
            />
            
            
    </Tab.Navigator>
   
    )

}
export default Tabs;