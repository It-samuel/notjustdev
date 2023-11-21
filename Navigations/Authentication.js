import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BottomTab from './BottomTabs';
import HomeScreen from '../Screens/HomeScreen';
import SplashScreen from '../Screens/SplashScreen';
import Login from '../Screens/Login';
import SignUp from '../Screens/SignUp';



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
        </Auth.Navigator>
    )
}