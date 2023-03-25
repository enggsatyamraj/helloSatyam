import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function FlatCards() {
  return (
    <View>
      <Text style={styles.headingText}>Flat Cards</Text>
      <View style={styles.container}>
        <View style={[styles.card, styles.cardOne]}>
            <Text>Red</Text>
        </View>
        <View style={[styles.card, styles.cardTwo]}>
            <Text>Light Green</Text>
        </View>
        <View style={[styles.card, styles.cardThree]}>
            <Text>Light Blue</Text>
        </View>
        
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    headingText:{
        fontSize: 24,
        margin:10,
        color:'#000000',
        fontWeight:'bold',
    },
    container:{
        flex:1,
        flexDirection:'row'
    },
    card:{
        width:100,
        height:100,
        borderRadius:10,
        marginHorizontal:10,
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    },
    cardOne:{
        backgroundColor:'#ef5354',
        marginVertical:10,
        
    },
    cardTwo:{
        backgroundColor:'#50dbb4',
        marginVertical:10,
    },
    cardThree:{
        backgroundColor:'#5da3fa',
        marginVertical:10,
    }
})
