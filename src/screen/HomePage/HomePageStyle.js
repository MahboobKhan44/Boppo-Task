import React from 'react'
import { StyleSheet } from "react-native";
//color
import { GRAY_DARK, } from '../../global/color';
//Fonts
import { BOLD, SEMIBOLD } from '../../global/typography'

export const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  allNewsCon: {
    marginTop: 15,
    marginLeft: 20,
  },
  fontAllNews: {
    fontFamily: BOLD,
    fontSize: 25,
  },
  virtualListCon: {
    marginTop: 10,
    marginBottom: 8,
  },
  newsListingCon: {
    flexDirection: 'row',
    marginLeft: 15,
    marginRight: 15,
    marginTop: 8,
    marginBottom: 8
  },
  newsListingImage: {
    height: 90,
    width: 105,
    borderRadius: 10
  },
  titleAndDateCon: {
    flex: 1,
    paddingLeft: 20,
    marginTop: 6
  },
  fontTitle: {
    fontSize: 18,
    fontFamily: SEMIBOLD,
  },
  dateYearFormat: {
    fontSize: 14,
    fontFamily: SEMIBOLD,
    color: GRAY_DARK
  },
  dot: {
    height: 5,
    width: 5,
    backgroundColor: GRAY_DARK,
    borderRadius: 5 / 2,
    marginTop: 8,
    marginLeft: 5,
    marginRight: 5
  },
})
