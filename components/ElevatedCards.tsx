import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function ElevatedCards() {
  return (
    <View>
      <Text style={styles.headingText}>ElevatedCards</Text>
      <ScrollView horizontal={true} style={styles.container}>
        <View style={[styles.card, styles.cardElevated]}><Text>Card one</Text></View>

        <View style={[styles.card, styles.cardElevated]}><Text>Card two</Text></View>

        <View style={[styles.card, styles.cardElevated]}><Text>Card three</Text></View>

        <View style={[styles.card, styles.cardElevated]}><Text>Card four</Text></View>
      </ScrollView>
    </View>
    
  )
}

const styles = StyleSheet.create({
    headingText:{
        fontSize:24,
        color:'#000000',
        margin:10,
        fontWeight:'bold'
    },
    container:{
      padding:8,
    },
    card:{
      height:100,
      width:100,
      flex:1,
      alignItems:'center',
      justifyContent:'center',
      borderRadius:10,
      margin:8,
      color:'#000000',
    },
    cardElevated:{
      backgroundColor:'#cad5e2',
      elevation: 100,
      shadowOffset:{
        width:10,
        height:10
      },
      shadowColor:'#ef5354',
      shadowOpacity:0.5,
      shadowRadius:2
    },
})