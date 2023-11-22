import { StyleSheet, Text, View,FlatList, Dimensions } from 'react-native'
import React from 'react'
import { colors } from '../Colors/colors'
import { jobsdata } from '../Data/Data'
import JobsCard from './JobsCard'

export default function Events() {
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
    </View>
  )
}

const styles = StyleSheet.create({})