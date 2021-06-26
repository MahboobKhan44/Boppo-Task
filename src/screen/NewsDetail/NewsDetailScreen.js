import React from 'react';
import { StyleSheet, Text, View, Image, StatusBar, Dimensions, ImageBackground, TouchableOpacity, Linking } from 'react-native';
import { styles } from './NewsDetailStyle';
//SVG
import BackIcon from '../../assets/svg/BackIcon';
//VectorIcon
import BookMark from 'react-native-vector-icons/Fontisto'
//Third Party Liabraries
import moment from 'moment';
//Fonts
import { BLACK, GRAY_DARK, WHITE } from '../../global/color';

const NewsDetailScreen = ({ route: { params: { item } }, navigation }) => {

  //UseState
  const [bookMark, setBookMark] = React.useState(false);

  //bookMarkToggle
  const bookMarkToggle = () => {
    setBookMark(!bookMark)
  }

  //navigation goBack
  const goBack = () => navigation.goBack();

  return (
    <View style={styles.container}>

      <StatusBar barStyle="light-content" backgroundColor="transparent" translucent={true} />

      <View style={styles.imageCon}>

        <ImageBackground source={{ uri: item.urlToImage }} style={styles.imageBackground}>

          <View style={styles.overLay} />

          <View style={styles.backArrowCon}>

            <TouchableOpacity onPress={goBack} activeOpacity={0.8} style={styles.backSvg}>
              <BackIcon />
            </TouchableOpacity>

            <TouchableOpacity onPress={bookMarkToggle} style={styles.bookMarks}>
              <BookMark
                name={bookMark ? "bookmark-alt" : "bookmark"}
                size={26}
                color={bookMark ? GRAY_DARK : WHITE}
              />
            </TouchableOpacity>

          </View>


          <View style={styles.dateCon}>

            <Text style={styles.dateYearFormat}>
              {moment(item.publishedAt).format('MMMM Do YYYY')}
            </Text>

            <View style={styles.dot} />

            <Text style={styles.dateMinFormat}>
              {moment(item.publishedAt).format('h:mm A')}
            </Text>

          </View>

          <View style={styles.titleCon}>
            <Text style={styles.fontTitle}>{item.title}</Text>
          </View>

          <View style={styles.authorCon}>
            <Text style={styles.fontAuthor}>{item.author}</Text>
          </View>

        </ImageBackground>

      </View>

      <View style={styles.descContainer}>

        <TouchableOpacity
          onPress={() => Linking.openURL(item.url)}
          activeOpacity={0.8}
          style={styles.tapCon}>
          <Text style={styles.fontTapToMore}>Tap to more</Text>
        </TouchableOpacity>

        <View style={styles.description}>
          <Text style={styles.fontDesc}>{item.description}</Text>
        </View>

      </View>
    </View>
  )
}

export default NewsDetailScreen;
