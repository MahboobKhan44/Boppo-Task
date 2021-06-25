import React from 'react'
import { StyleSheet, Text, View, VirtualizedList } from 'react-native';
import { styles } from './HomePageStyle';
import { BOLD, REGULAR } from '../../global/fonts/fonts';
import NewsListingComponent from '../../component/NewsListingComponent/NewsListingComponent';
import AsyncStorage from '@react-native-async-storage/async-storage';

const HomePage = ({ navigation }) => {
  const [news, setNews] = React.useState([])

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


  const getItemCount = (data) => data.length;

  React.useEffect(() => {
    getData()
  }, [])

  return (
    <View style={{ flex: 1 }}>

      <View style={{ height: 50, backgroundColor: 'gray', elevation: 5, justifyContent: 'center', paddingLeft: 20, borderRadius: 10 }}>
        <Text style={{ fontFamily: BOLD, fontSize: 22 }}>News360</Text>
      </View>

      <View style={{ marginTop: 10, marginLeft: 20 }}>
        <Text style={{ fontFamily: BOLD, fontSize: 22 }}>All News</Text>
      </View>

      <VirtualizedList
        style={{ marginTop: 10, marginBottom: 8 }}
        data={news}
        renderItem={({ item, index }) => <NewsListingComponent item={item} index={index} navigation={navigation} />}
        keyExtractor={(item, index) => item.title}
        getItemCount={getItemCount}
        disableVirtualization={false}
        getItem={(data, index) => data[index]}
      />


    </View>
  )
}

export default HomePage;