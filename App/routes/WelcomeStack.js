import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createNavigationContainerRef, StackActions } from "@react-navigation/native";
import Welcome from "../screens/welcome";
import { NavigationContainer } from "@react-navigation/native";
import LoginScreen from "../screens/loginScreen";
import RegisterScreen from "../screens/RegisterScreen";

const Stack = createNativeStackNavigator();
function Rod(){
    return(
<NavigationContainer>
    <Stack.Navigator>
    
        <Stack.Screen 
   name="Welcome"
   component={Welcome}
     options={{
               headerStyle: {
               backgroundColor: 'white',
               opacity: 3.0
                    },
                    headerShown: false,
             }}/> 
                  <Stack.Screen 
                  name="LoginScreen"
                 component={LoginScreen}
                 
                 /> 

                  <Stack.Screen 
                  name="RegisterScreen"
                 component={RegisterScreen} /> 
        
    </Stack.Navigator>
</NavigationContainer>
    );
}  

export default Rod;