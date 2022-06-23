import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import AdminHome from '../screens/ADMIN/AdminHome';
import Orders from '../screens/ADMIN/Orders';
import Dashboard from '../screens/ADMIN/Dashboard';
import { FontAwesome, MaterialIcons } from '@expo/vector-icons';
import UserProfile from '../screens/SHARED/userProfile';
const Tab = createBottomTabNavigator();

const AdminTabs = () => {
    return(
     
        <Tab.Navigator
        >
            <Tab.Screen
                name ="DASH"
                component={Dashboard}
                options ={{
                    headerShown: false,
                    tabBarIcon: ({color}) => (
                        <FontAwesome name="dashboard" size={24} color="black" />
                        )
                }}                
            />
            <Tab.Screen
                name ="Houses"
                component={AdminHome}
                options ={{
                    headerShown: false,
                    tabBarIcon: ({color}) =>(
                        <MaterialIcons name="house" size={24} color="black" />
                    )
                }}                
            />
            <Tab.Screen
                name ="orders"
                component={Orders}
                options ={{
                    headerShown: false,
                    tabBarIcon: ({color}) => (
                        <FontAwesome name="reorder" size={24} color="black" />
                        )
                }}                
            />
            
            
            
    </Tab.Navigator>
   
    )

}
export default AdminTabs;