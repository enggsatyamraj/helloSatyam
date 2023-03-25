import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function FancyCards() {
  return (
    <View>
      <Text style={styles.headingText}>Trending Places</Text>
      <ScrollView horizontal={true}>
        <View style={[styles.card , styles.cardElevated]}>
            <Image 
            source={{
                uri:'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQQZA8s3i80S9sJnQwPMBucnYOuPjOsPWuuWKP272agfS60vRU_0o1Vzv_6W03OySwua1OyWOjO2wlK9hVL2lzOgQ'

            }}
            style={styles.cardImage}
            />
            <View style={styles.cardBody}>
                <Text style={styles.cardTitle}>Hawa Mahal</Text>
                <Text style={styles.cardLabel}>Jaipur</Text>
                <Text style={styles.cardDescription}>the hawal mahal is in jaipur and i am very happy for going to india with my uncel thankyou
                and have nanice day satyam good night bayby</Text>
                <Text style={styles.cardFooter}>12 minutes away</Text>
            </View>
        </View>
        <View style={[styles.card , styles.cardElevated]}>
            <Image 
            source={{
                uri:'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQQZA8s3i80S9sJnQwPMBucnYOuPjOsPWuuWKP272agfS60vRU_0o1Vzv_6W03OySwua1OyWOjO2wlK9hVL2lzOgQ'

            }}
            style={styles.cardImage}
            />
            <View style={styles.cardBody}>
                <Text style={styles.cardTitle}>Hawa Mahal</Text>
                <Text style={styles.cardLabel}>Jaipur</Text>
                <Text style={styles.cardDescription}>the hawal mahal is in jaipur and i am very happy for going to india with my uncel thankyou
                and have nanice day satyam good night bayby</Text>
                <Text style={styles.cardFooter}>12 minutes away</Text>
            </View>
        </View>
        <View style={[styles.card , styles.cardElevated]}>
            <Image 
            source={{
                uri:'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQQZA8s3i80S9sJnQwPMBucnYOuPjOsPWuuWKP272agfS60vRU_0o1Vzv_6W03OySwua1OyWOjO2wlK9hVL2lzOgQ'

            }}
            style={styles.cardImage}
            />
            <View style={styles.cardBody}>
                <Text style={styles.cardTitle}>Hawa Mahal</Text>
                <Text style={styles.cardLabel}>Jaipur</Text>
                <Text style={styles.cardDescription}>the hawal mahal is in jaipur and i am very happy for going to india with my uncel thankyou
                and have nanice day satyam good night bayby</Text>
                <Text style={styles.cardFooter}>12 minutes away</Text>
            </View>
        </View>
        <View style={[styles.card , styles.cardElevated]}>
            <Image 
            source={{
                uri:'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQQZA8s3i80S9sJnQwPMBucnYOuPjOsPWuuWKP272agfS60vRU_0o1Vzv_6W03OySwua1OyWOjO2wlK9hVL2lzOgQ'

            }}
            style={styles.cardImage}
            />
            <View style={styles.cardBody}>
                <Text style={styles.cardTitle}>Hawa Mahal</Text>
                <Text style={styles.cardLabel}>Jaipur</Text>
                <Text style={styles.cardDescription}>the hawal mahal is in jaipur and i am very happy for going to india with my uncel thankyou
                and have nanice day satyam good night bayby</Text>
                <Text style={styles.cardFooter}>12 minutes away</Text>
            </View>
        </View>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
    headingText:{
        color:'#000000',
        fontSize:24,
        fontWeight:'bold',
        margin:8,

    },
    card:{
        backgroundColor:'#242b2e',
        margin:10,
        borderTopRightRadius:20,
        borderBottomLeftRadius:20,
        height:390,
        width:350,
    },
    cardElevated:{
        elevation:100,
    },
    cardImage:{
        height:180,
        margin:10,
        borderTopRightRadius:20,
        borderBottomLeftRadius:20,
    },
    cardBody:{
        margin:10,
    },
    cardTitle:{
        color:'#000000',
        fontSize:18,
        fontWeight:'bold',
        color:'#FFFFFF'
    },
    cardLabel:{
        color:'#000000',
        fontSize:17,
        marginVertical:5,
        color:'#FFFFFF'
    },
    cardDescription:{
        color:'#000000',
        fontSize:14,
        color:'#FFFFFF'
    },
    cardFooter:{
        color:'#000000',
        fontSize:14,
        marginVertical:5,
        color:'#FFFFFF'

    }
})