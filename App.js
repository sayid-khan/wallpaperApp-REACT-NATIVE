import { StatusBar } from 'expo-status-bar';
import { ActivityIndicator, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Navbar from './views/Navbar';
import Screen1 from './views/Screen1';

export default function App() {

  async function fetchWeatherData(){
    setLoaded(false) //means its loading 
    const API = 'https://api.unsplash.com/photos/random?count=30&client_id=H3mylLYs4hNUmY7cQ_QYFDbVuHtLx-iL5N0vOnSAMzU'
    try{
      const response = await fetch(API)
      console.log(response)
      if(response.status==200){
        // const data = await response.json()
        console.log(response)
        // setWeatherData(data)
      }
      // else{
      //   setWeatherData(null)
      // }
      // setLoaded(true)
    }
      catch(error){
        console.log(error);
      }
  }
  return (
    <SafeAreaView
      style={styles.container}>

      <StatusBar style="auto" />
      <Navbar/>
      <Screen1/>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    marginTop:30,
    width:"100%",
    height:"100%",
    backgroundColor: 'blue',
    alignItems: 'center',
    // justifyContent: 'center',
  },
});
