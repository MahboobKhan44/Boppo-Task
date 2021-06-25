import React from 'react';
import { Alert } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
//MainStacks
import MainStack from './MainStack';
//ThirdParty Libraries
import AsyncStorage from '@react-native-async-storage/async-storage';
import Axios from 'axios';
//APi URL
import { BASE_URL } from './global/server';



const App = () => {

  //Data Save In AsyncStorage
  const storeData = async (value) => {
    try {
      const jsonValue = JSON.stringify(value)
      await AsyncStorage.setItem("newsData", jsonValue);
    } catch (e) {
      console.log(e);
    }
  }


  //Get News Api Data
  const getNewsData = async () => {
    try {
      const response = await Axios.get(`${BASE_URL}`)

      if (response.data.articles.length != 0) {
        storeData(response.data.articles)
      }
    } catch (err) {
      Alert.alert("Alert", err.message)
      console.log(err.response);
    }
  }

  //UseEffect
  React.useEffect(() => {
    getNewsData()
  }, [])

  return (
    <SafeAreaProvider>
      <MainStack />
    </SafeAreaProvider>
  )
}

export default App;