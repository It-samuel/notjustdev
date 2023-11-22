import { StyleSheet, Text, View,FlatList, Dimensions,TouchableOpacity,Image } from 'react-native'
import React from 'react'
import { colors } from '../Colors/colors'
import { jobsdata } from '../Data/Data'
import JobsCard from './JobsCard'

export default function Shop() {
  const SCREEN_WIDTH = Dimensions.get('window').width
  return (
    <View>
      <View>
                <FlatList 
                    style={{marginTop:10, marginBottom:10}}
                    horizontal ={false}
                    showsHorizontalScrollIndicator ={false}
                    data={jobsdata}
                    keyExtractor={(item, index)=>index.toString}
                    renderItem={({item})=>(
                        <View style={{marginRight:5, marginBottom:10}}>
                            <JobsCard
                                screenwidth={SCREEN_WIDTH*0.85}
                                jobTitle = {item.jobTitle}
                                jobDescription={item.jobDescription}
                                experience={item.experience}
                                skills={item.skills}
                                clock={item.clock}
                                showsHorizontalScrollIndicator ={false}
                                
                                
                            />
                        </View>
                    )}
                />
            </View>
            <View style={styles.floatingBtn}>
              <TouchableOpacity style={{alignSelf:'center', justifyContent:'center'}}>
              <Image source={require('../Image/plus.png') }
                style={{height: 40, width: 30, alignSelf:'center',marginTop:20,tintColor:colors.primColor,
                resizeMode: 'contain', }} />
              </TouchableOpacity>

            </View>
    </View>
  )
}

const styles = StyleSheet.create({
  floatingBtn:{
    position:'absolute',
    bottom:10,
    right:15,
    backgroundColor:'white',
    elevation:10,
    width:80,
    height:80,
    borderRadius:30,
    alignItems:'center'
}
})