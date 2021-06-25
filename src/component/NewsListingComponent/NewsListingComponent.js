import React from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import { styles } from '../../screen/HomePage/HomePageStyle';
//Third Party Liabraries
import moment from 'moment'
//Components
import { NEWS_DETAIL_SCREEN } from '../../global/ScreenNames/ScreenNames';

const NewsListingComponent = ({ item, navigation }) => {

  //navigation News Detail Screen
  const navigationToNewsDetailScreen = () => {
    navigation.navigate(NEWS_DETAIL_SCREEN, { item })
  }
  return (
    <TouchableOpacity
      onPress={navigationToNewsDetailScreen}
      activeOpacity={0.8}
      style={{ flex: 1 }}>

      <View style={styles.newsListingCon}>

        <View>
          <Image source={{ uri: item.urlToImage }} style={styles.newsListingImage} />
        </View>

        <View style={styles.titleAndDateCon}>
          <Text numberOfLines={2} style={styles.fontTitle}>{item.title}</Text>

          <View style={{ flexDirection: 'row', marginTop: 7 }}>

            <Text numberOfLines={3} style={styles.dateYearFormat}>{moment(item.publishedAt).format('MMMM Do YYYY')}</Text>

            <View
              style={styles.dot} />

            <Text numberOfLines={3} style={styles.dateMinFormat}>{moment(item.publishedAt).format('h:mm A')}</Text>

          </View>

        </View>

      </View>

    </TouchableOpacity>
  );
}

export default NewsListingComponent;
