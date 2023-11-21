import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, ScrollView,} from 'react-native'
import React, { useRef, useState } from 'react'
import { colors } from '../Colors/colors'

export default function HomeScreen() {
    

  return (
    <ScrollView 
    
      stickyHeaderIndices={[5]}
    >
    <View style={{flex:1, backgroundColor:colors.primBG, }}>
     <View style={styles.header}>
     <Image source={require('../Image/pexels-luis-quintero-2774556.jpg') }
        style={{height: 180, width: '100%', 
        resizeMode: 'cover', }} />

        <Image source={require('../Image/logo.png') }
                style={{height: 200, width: 500, position:'absolute', alignSelf:'center', 
                resizeMode: 'contain', }} />

        <View style={{backgroundColor:'white', padding:10}}>
        <View style={{alignSelf:'center',flexDirection:'row',}}>
            <View style={styles.main}>
                <TextInput style={styles.input } placeholder='Search for Opportunities'></TextInput>
                
            </View>
            <View style={styles.search}>
                <Image source={require('../Image/find.png') }
                style={{height: 40, width: 30, 
                resizeMode: 'contain', }} />
                </View>
        </View>
        </View>
        <View style={styles.community}>
            <View style={{borderBottomWidth:1, flexDirection:'row', justifyContent:'space-between',marginHorizontal:15}}>
                <Text style={{fontWeight:'bold', fontSize:15,padding:15}}>Popular Communities</Text>
                <TouchableOpacity style={{backgroundColor:colors.primColor, height:30,alignSelf:'center',padding:5,borderRadius:10}}>
                    <Text style={{color:'white', fontWeight:'bold'}}>See All</Text>
                </TouchableOpacity>

            </View>

        </View>

        <View style={styles.community}>
            <View style={{borderBottomWidth:1, flexDirection:'row', justifyContent:'space-between',marginHorizontal:15}}>
                <Text style={{fontWeight:'bold', fontSize:15,padding:15}}>Upcoming Events</Text>
                <TouchableOpacity style={{backgroundColor:colors.primColor, height:30,alignSelf:'center',padding:5,borderRadius:10}}>
                    <Text style={{color:'white', fontWeight:'bold'}}>See All</Text>
                </TouchableOpacity>

            </View>

        </View>

        <View style={styles.community}>
            <View style={{borderBottomWidth:1, flexDirection:'row', justifyContent:'space-between',marginHorizontal:15}}>
                <Text style={{fontWeight:'bold', fontSize:15,padding:15}}>Volunteer</Text>
                <TouchableOpacity style={{backgroundColor:colors.primColor, height:30,alignSelf:'center',padding:5,borderRadius:10}}>
                    <Text style={{color:'white', fontWeight:'bold'}}>See All</Text>
                </TouchableOpacity>

            </View>

        </View>

        <View style={styles.community}>
            <View style={{borderBottomWidth:1, flexDirection:'row', justifyContent:'space-between',marginHorizontal:15}}>
                <Text style={{fontWeight:'bold', fontSize:15,padding:15}}>Shop Items</Text>
                <TouchableOpacity style={{backgroundColor:colors.primColor, height:30,alignSelf:'center',padding:5,borderRadius:10}}>
                    <Text style={{color:'white', fontWeight:'bold'}}>See All</Text>
                </TouchableOpacity>

            </View>

        </View>
        </View>
     
        
    </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
    header:{
        
        width:'100%'
    },
    input:{
        marginLeft:10,
        marginTop:5

    },
    main:{
        width:250,
        height:40,
        borderWidth:1,
        borderTopLeftRadius:40,
        borderBottomLeftRadius:40,
        backgroundColor:'white',
        position:'relative'

    },
    search:{
        backgroundColor:'white', 
        flexDirection:'row',
        borderTopRightRadius:30,
        borderBottomRightRadius:30,
        width:40,
        height:40,
        borderWidth:1
    },
    community:{
        backgroundColor:'white',
        height:250,
        marginTop:8
    }
})