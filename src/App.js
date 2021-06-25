import React from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import MainStack from './MainStack'
import AsyncStorage from '@react-native-async-storage/async-storage';
import Axios from 'axios';
import { Alert } from 'react-native';



const App = () => {

  const storeData = async (value) => {
    try {
      const jsonValue = JSON.stringify(value)
      await AsyncStorage.setItem("newsData", jsonValue);
    } catch (e) {
      console.log(e);
    }
  }



  const getNewsData = async () => {
    try {
      const response = await Axios.get('https://newsapi.org/v2/everything?q=tesla&from=2021-05-25&sortBy=publishedAt&apiKey=47b47c0f69364838853964a9cdea7c77')
      // console.log("response", response.data);

      if (response.data.articles.length != 0) {
        storeData(response.data.articles)
      }
    } catch (err) {
      Alert.alert("Alert", err.message)
      console.log(err.response);
    }
  }

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