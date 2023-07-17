import { StyleSheet, Text, View,Image, TextInput } from 'react-native'
import React from 'react'
import logo from "../assets/searchIcon.png"

const Navbar = () => {
  return (
    <View style={styles.container}>
     <View style={styles.searchContainer}>
        <Image source={logo} style={styles.icon}/>
        <TextInput
         style={styles.searchInput}
         placeholder="Search..."
         placeholderTextColor="white"
        />
     </View>
    </View>
  )
}

export default Navbar

const styles = StyleSheet.create({
    container:{
        backgroundColor:"#fff",
        width:"100%",
        alignItems:"center",
        paddingVertical:10
    },
    searchContainer:{
        flexDirection:"row",
        alignItems:"center",
        backgroundColor:"gray",
        borderRadius:10,
        elevation:10,
        width:"80%",
        padding:5
    },
    icon:{
        height:30,
        width:30
    },
    searchInput:{
        width:"80%",
        fontSize:18,
        paddingLeft:10
    }

})