import React from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import { BOLD, SEMIBOLD } from '../../global/fonts/fonts';
import moment from 'moment'
import { NEWS_DETAIL_SCREEN } from '../../global/ScreenNames/ScreenNames';

const NewsListingComponent = ({ item, index, navigation }) => {
  // console.log("item", item);
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate(NEWS_DETAIL_SCREEN, { item })}
      style={{ flex: 1 }}>

      <View style={{ flexDirection: 'row', marginLeft: 15, marginRight: 15, marginTop: 8, marginBottom: 8 }}>

        <View>
          <Image source={{ uri: item.urlToImage }} style={{ height: 85, width: 100, borderRadius: 10 }} />
        </View>

        <View style={{ flex: 1, paddingLeft: 20, marginTop: 6 }}>
          <Text numberOfLines={2} style={{ fontSize: 17, fontFamily: SEMIBOLD, }}>{item.title}</Text>

          <View style={{ flexDirection: 'row', marginTop: 8 }}>

            <Text numberOfLines={3} style={{ fontSize: 17, fontFamily: SEMIBOLD, color: 'grey' }}>{moment(item.publishedAt).format('MMMM Do YYYY')}</Text>

            <View
              style={{ height: 5, width: 5, backgroundColor: 'gray', borderRadius: 5 / 2, marginTop: 10, marginLeft: 5, marginRight: 5 }} />

            <Text numberOfLines={3} style={{ fontSize: 17, fontFamily: SEMIBOLD, color: 'grey' }}>{moment(item.publishedAt).format('h:mm A')}</Text>

          </View>




        </View>

      </View>


    </TouchableOpacity>
  )
}

export default NewsListingComponent;
