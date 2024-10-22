import { View, Text, Image, StyleSheet, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useLocalSearchParams } from 'expo-router'

const Single = () => {
    const [data,setdata ] = useState<any|null>(null)

    const {id} = useLocalSearchParams()
    useEffect(()=>{
        fetch(`https://fakestoreapi.com/products/${id}`)
        .then(res=>res.json())
        .then(json=> setdata(json))
    },[])
   
    
  return (
    <ScrollView style={styles.card}>
      {data?.image && (
        <Image source={{ uri: data.image }} style={styles.image} />
      )}
      <Text style={styles.title}>{data?.title}</Text>
      <Text style={styles.content}>category : {data?.category}</Text>
      <Text style={styles.content}>{data?.description}</Text>
      <Text style={styles.content}>${data?.price}</Text>
      <Text style={styles.content}>Rating : {data?.rating.rate}</Text>
      <Text style={styles.content}>Count : {data?.rating.count}</Text>
    </ScrollView>
  )
  
}
const styles = StyleSheet.create({
    text:{
      flex:1,
      alignItems:"center",
      fontWeight:"bold"
  
    },
    card: {
      backgroundColor: '#fff',
      borderRadius: 8,
      elevation: 3,
      padding: 16,
      margin: 10,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.2,
      shadowRadius: 2,
    },
    image: {
      width: '100%',
      height: 400,
      borderRadius: 8,
      marginBottom: 12,
    },
    title: {
      fontSize: 18,
      fontWeight: 'bold',
      marginBottom: 8,
    },
    content: {
      fontSize: 14,
      marginBottom: 16,
    },
    button: {
      backgroundColor: '#007BFF',
      borderRadius: 5,
      padding: 10,
      alignItems: 'center',
    },
    buttonText: {
      color: '#fff',
      fontWeight: 'bold',
    },
  })
export default Single