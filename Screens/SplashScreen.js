import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { colors } from '../Colors/colors'

export default function SplashScreen() {
  return (
    <View style={styles.container}>
      <Image source={require('../Image/logo.png') }
            style={{height: 225, width: 225,
            resizeMode: 'contain',tintColor: 'white' }} />
            
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor:colors.primColor,
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    }
})