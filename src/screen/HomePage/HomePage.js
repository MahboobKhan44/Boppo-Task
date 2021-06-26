import React from 'react'
import { Text, View, VirtualizedList, } from 'react-native';
import { styles } from './HomePageStyle';
//Components
import NewsListingComponent from '../../component/NewsListingComponent/NewsListingComponent';
import FocusAwareStatusBar from '../../component/FocusAwareStatusBar';
//ThirdParty Libraries
import AsyncStorage from '@react-native-async-storage/async-storage';
import Axios from 'axios';
//APi URL
import { BASE_URL } from '../../global/server';


const HomePage = ({ navigation }) => {
  //UseState
  const [news, setNews] = React.useState([])

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

  //Read AsyncStorage Data
  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem("newsData")
      if (value != null) {
        setNews(JSON.parse(value))
      }
    } catch (e) {
      console.log(e);
    }
  }

  //GetItemCount VirtualizedList
  const getItemCount = (data) => data.length;

  //UseEffect
  React.useEffect(() => {
    getNewsData()
    getData()
  }, [])

  return (
    <View style={styles.container}>

      <FocusAwareStatusBar isLightBar={false} isTopSpace={true} isTransparent={true} />

      <View style={styles.allNewsCon}>
        <Text style={styles.fontAllNews}>All News</Text>
      </View>

      <VirtualizedList
        style={styles.virtualListCon}
        data={news}
        renderItem={({ item, index }) => <NewsListingComponent item={item} navigation={navigation} />}
        keyExtractor={(item) => item.title}
        getItemCount={getItemCount}
        disableVirtualization={false}
        getItem={(data, index) => data[index]}
      />



    </View>
  )
}

export default HomePage;