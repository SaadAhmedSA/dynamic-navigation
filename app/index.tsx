import { Link } from "expo-router";
import { useEffect, useState } from "react";
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Index() {
  const [data,setdata ] = useState<string[]|null>(null)
  const [error , seterror] = useState(false)
  const [load , setload] = useState(true)
  useEffect(()=>{
    fetch('https://fakestoreapi.com/products')
    .then(res=>res.json())
    .then(json=> setdata(json))
    .catch(err => seterror(true))
    .finally(() => setload(false))
  },[])
  return (
    <View style={styles.text}>
    
      <ScrollView>
            
            {load && <Text>Loading...</Text>}

            {error && <Text>Error occured</Text>}
           { data && data.map((item: any,index)=>{
                return  <View  key={index} style={styles.card}>
                {item.image && (
                  <Image source={{ uri: item.image}} style={styles.image} />
                )}
                <Text style={styles.title}>{item.title}</Text>
               
                <Link  href={{
          pathname: `/Single/[id]`,
          params: { id: `${item.id}` },
        }} style={styles.button} ><Text style={styles.buttonText}>Show Details </Text></Link>  
              
              </View>
            })}
            </ScrollView> 
    </View>
  );
  
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
    height: 200,
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