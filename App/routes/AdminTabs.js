import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import AdminHome from '../screens/ADMIN/AdminHome';
import Orders from '../screens/ADMIN/Orders';
import Dashboard from '../screens/ADMIN/Dashboard';
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
                }}                
            />
            <Tab.Screen
                name ="Home"
                component={AdminHome}
                options ={{
                    headerShown: false,
                }}                
            />
            <Tab.Screen
                name ="orders"
                component={Orders}
                options ={{
                    headerShown: false,
                }}                
            />
            
            
            
    </Tab.Navigator>
   
    )

}
export default AdminTabs;