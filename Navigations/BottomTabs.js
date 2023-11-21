import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { View, Text, Image } from 'react-native'
import React from 'react'
import HomeScreen from "../Screens/HomeScreen";


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
                                tintColor={colors.primary}
                                resizeMode='contain'
                                />
                            </View>
                        )
                    }
                }
            />
            {/* <BottomTab.Screen 
                name="Bookings"
                component={Bookings}
                options={
                    {  
                        tabBarLabel : "Bookings" ,
                        headerShown: false,
                        tabBarIcon : ({}) => (
                            <View style={{paddingTop:8}}>
                                <Image
                                source={require('../Image/user (1).png')}
                                style={{width:30, height:30, }}
                                tintColor={colors.primary}
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
                        headerShown: true,
                        tabBarIcon : ({}) => (
                            <View style={{paddingTop:8}}>
                                <Image
                                source={require('../Image/user (1).png')}
                                style={{width:30, height:30, }}
                                tintColor={colors.primary}
                                resizeMode='contain'
                                />
                            </View>
                        )
                    }
                }
            /> */}
            {/* <BottomTab.Screen 
                name="Settings"
                component={Settings}
                options={
                    {  
                        tabBarLabel : "Settings" ,
                        headerShown: false,
                        tabBarIcon : ({}) => (
                            <View style={{paddingTop:8}}>
                                <Image
                                source={require('../assets/images/settings.png')}
                                style={{width:30, height:30, }}
                                tintColor={colors.primary}
                                resizeMode='contain'
                                />
                            </View>
                        )
                    }
                }
            /> */}
    </BottomTab.Navigator>
  )
}