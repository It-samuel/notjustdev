import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../Screens/HomeScreen";


const BottomTabs = createBottomTabNavigator();

export  default function BottomTab(){
    return(
        <BottomTabs.Navigator>
            <BottomTab.Screen 
                name="HomeScreen"
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
                                
                                resizeMode='contain'
                                />
                            </View>
                        )
                    }
                }
            />


        </BottomTabs.Navigator>
    )
}