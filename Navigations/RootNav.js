
import React from 'react'
import { NavigationContainer } from "@react-navigation/native";
import BottomTab from './BottomTabs';
import Authentication from './Authentication';

export default function RootNav() {
  return (
    <NavigationContainer>
        <Authentication />
    </NavigationContainer>
  )
}