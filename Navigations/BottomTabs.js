import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { View, Text, Image } from 'react-native'
import React from 'react'
import HomeScreen from "../Screens/HomeScreen";
import { colors } from "../Colors/colors";
import Profile from "../Screens/Profile";
import Notification from "../Screens/Notification";


const BottomTab = createBottomTabNavigator();



export default function BottomTabs() {
  return (
    <BottomTab.Navigator>
        <BottomTab.Screen 
                name="Home"
                component={HomeScreen}
                options={
                    {  
                        tabBarLabel : "Home" ,
                        headerShown: false,
                        tabBarIcon : ({}) => (
                            <View style={{paddingTop:8}}>
                                <Image
                                source={require('../Image/home.png')}
                                style={{width:30, height:30, }}
                                tintColor={colors.primColor}
                                resizeMode='contain'
                                />
                            </View>
                        )
                    }
                }
            />
           
           <BottomTab.Screen 
                name="Notification"
                component={Notification}
                options={
                    {  
                        tabBarLabel : "Notifications" ,
                        headerShown: false,
                        tabBarIcon : ({}) => (
                            <View style={{paddingTop:8}}>
                                <Image
                                source={require('../Image/ringing.png')}
                                style={{width:30, height:30, }}
                                tintColor={colors.primColor}
                                resizeMode='contain'
                                />
                            </View>
                        )
                    }
                }
            />
           
        <BottomTab.Screen 
                name="Profile"
                component={Profile}
                options={
                    {  
                        tabBarLabel : "Profile" ,
                        headerShown: false,
                        tabBarIcon : ({}) => (
                            <View style={{paddingTop:8}}>
                                <Image
                                source={require('../Image/account.png')}
                                style={{width:30, height:30, }}
                                tintColor={colors.primColor}
                                resizeMode='contain'
                                />
                            </View>
                        )
                    }
                }
            />


    </BottomTab.Navigator>
  )
}