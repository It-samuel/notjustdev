import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BottomTab from './BottomTabs';
import HomeScreen from '../Screens/HomeScreen';
import SplashScreen from '../Screens/SplashScreen';
import Login from '../Screens/Login';
import SignUp from '../Screens/SignUp';
import EditProfile from '../Screens/EditProfile';
import Events from '../Screens/Events';
import Communities from '../Screens/Communities';
import Volunteer from '../Screens/Volunteer';
import Shop from '../Screens/Shop';



const Auth = createNativeStackNavigator();


export default function Authentication(){
    return(
        <Auth.Navigator>
            <Auth.Screen 
                    name="SplashScreen"
                    component={SplashScreen}
                    options={{
                        headerShown: false
                    }}
                />
                
                <Auth.Screen 
                    name="Login"
                    component={Login}
                    options={{
                        headerShown: false
                    }}
                />
                <Auth.Screen 
                    name="SignUp"
                    component={SignUp}
                    options={{
                        headerShown: false
                    }}
                />
                <Auth.Screen 
                    name="BottomTabs"
                    component={BottomTab}
                    options={{
                        headerShown: false
                    }}
                />

                <Auth.Screen 
                    name="EditProfile"
                    component={EditProfile}
                    options={{
                        headerShown: false
                    }}
                />

<Auth.Screen 
                    name="Events"
                    component={Events}
                    options={{
                        headerShown: true
                    }}
                />

<Auth.Screen 
                    name="Communities"
                    component={Communities}
                    options={{
                        headerShown: true
                    }}
                />

<Auth.Screen 
                    name="Volunteer"
                    component={Volunteer}
                    options={{
                        headerShown: true
                    }}
                />

<Auth.Screen 
                    name="Shop"
                    component={Shop}
                    options={{
                        headerShown: true
                    }}
                />
        </Auth.Navigator>
    )
}