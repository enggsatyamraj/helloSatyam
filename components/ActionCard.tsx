import { StyleSheet, Text, View, Linking, Image, TouchableOpacity } from 'react-native'
import React from 'react'

export default function ActionCard() {
    function openWebsite(websiteLink: string){
        Linking.openURL(websiteLink)
    }

  return (
    <View>
      <Text style={styles.headingText}>Blog card</Text>
      <View style={[styles.card, styles.elevatedCard]}>
        <View style={styles.headingContainer}>
            <Text style={styles.headerText}>what is new in you bro!</Text>
        </View>
        <Image 
        source={{
            uri:'https://images.pexels.com/photos/1261427/pexels-photo-1261427.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
        }}
        style={styles.cardImage}
        />
        <View style={styles.bodyContainer}>
            <Text numberOfLines={3} style={styles.bodyContainerText}>
            Just like every year, Javascript brings in new features. This year
            javascript is bringing 4 new features, which are almost in
            production rollout. I won't be wasting much more time and directly
            jump to code with easy to understand examples.
            </Text>
        </View>
        <View style={styles.footerContainer}>
            <TouchableOpacity 
            onPress={() => openWebsite('https://satyaaam.github.io/NFT-Preview-Card/')}>
                <Text style={styles.socialLinks}>Read more</Text>
            </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    headingText:{
        fontSize:24,
        color:'#000000',
        fontWeight:'bold',
        marginTop:20,
        marginLeft:10,
    },
    card:{
        padding:10,
        backgroundColor:'#fca503',
        margin:10,
        borderTopRightRadius:20,
        borderBottomLeftRadius:20,
    },
    elevatedCard:{},
    headingContainer:{},
    headerText:{
        fontSize:18,
        color:'#000000',
        marginBottom:5,
        textAlign:'center',
        fontWeight:'bold',
        padding:5,
    },
    cardImage:{
        height:300,
        borderTopRightRadius:20,
        borderBottomLeftRadius:20,
        marginBottom:8
    },
    bodyContainer:{
       
    },
    footerContainer:{
        flex:1,
    },
    socialLinks:{
        fontSize:18,
        color:'#000000',
        marginTop:10,
        marginBottom:5,
        backgroundColor:'#ffffff',
        width:120,
        textAlign:'center',
        padding:3,
        borderTopRightRadius:20,
        borderBottomLeftRadius:20,
    },
    bodyContainerText:{
        color:'#FFFFFF',
        marginBottom:5,
    }

})