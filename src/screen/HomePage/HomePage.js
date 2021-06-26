import React from 'react'
import { Text, View, VirtualizedList, } from 'react-native';
import { styles } from './HomePageStyle';
//Components
import NewsListingComponent from '../../component/NewsListingComponent/NewsListingComponent';
import FocusAwareStatusBar from '../../component/FocusAwareStatusBar';
//ThirdParty Libraries
import AsyncStorage from '@react-native-async-storage/async-storage';


const HomePage = ({ navigation }) => {
  //UseState
  const [news, setNews] = React.useState([]);

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