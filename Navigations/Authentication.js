import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BottomTab from './BottomTabs';
import HomeScreen from '../Screens/HomeScreen';



const Auth = createNativeStackNavigator();


export default function Authentication(){
    return(
        <Auth.Navigator>
            <Auth.Screen 
            name ="BottomTab"
            component={BottomTab}
            options={{headerShown: false}}
            />
            <Auth.Screen 
            name ="HomeScreen"
            component={HomeScreen}
            options={{headerShown: false}}
            />
        </Auth.Navigator>
    )
}