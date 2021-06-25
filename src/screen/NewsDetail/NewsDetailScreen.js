import React from 'react'
import { StyleSheet, Text, View, Image, StatusBar, Dimensions } from 'react-native'

const NewsDetailScreen = ({ route: { params: { item } } }) => {
  const screenHight = Dimensions.get('screen').height / 2;
  const screenWidth = Dimensions.get('screen').width;

  return (
    <View style={{ flex: 1 }}>
      <StatusBar barStyle="light-content" backgroundColor="transparent" translucent={true} />

      <View style={{ height: screenHight, width: screenWidth }}>

        <Image source={{ uri: item.urlToImage }} style={{ height: screenHight, width: screenWidth }} resizeMode={'cover'} />
        <View style={{
          flex: 1,
          position: 'absolute',
          left: 0,
          top: 0,
          opacity: 0.2,
          backgroundColor: 'black',
          width: screenWidth,
          height: screenHight
        }}></View>
      </View>

      <View style={{ flex: 1, backgroundColor: 'white', marginTop: -20, borderRadius: 10 }}>

        <View style={{ marginTop: 20 }}>
          <Text>{item.content}</Text>
        </View>
      </View>
    </View>
  )
}

export default NewsDetailScreen;
