import React from 'react'
import { StyleSheet } from "react-native";
import { BLACK, WHITE, GRAY_DARK } from '../../global/color';
//Constant
import { SCREEN_HEIGHT, SCREEN_WIDTH } from '../../global/constants';
//Fonts
import { BOLD, SEMIBOLD, REGULAR } from '../../global/typography'

export const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  imageCon: {
    height: SCREEN_HEIGHT / 2,
    width: SCREEN_WIDTH
  },
  imageBackground: {
    height: SCREEN_HEIGHT / 2,
    width: SCREEN_WIDTH
  },
  overLay: {
    flex: 1,
    position: 'absolute',
    left: 0,
    top: 0,
    opacity: 0.2,
    backgroundColor: BLACK,
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT / 2
  },
  backSvg: {
    marginLeft: 20,
    marginTop: SCREEN_HEIGHT / 14
  },
  dateCon: {
    flexDirection: 'row',
    marginTop: SCREEN_HEIGHT / 6,
    marginLeft: 20,
  },
  dateYearFormat: {
    fontSize: 15,
    fontFamily: SEMIBOLD,
    color: WHITE
  },
  dot: {
    height: 5,
    width: 5,
    backgroundColor: WHITE,
    borderRadius: 5 / 2,
    marginTop: 9,
    marginLeft: 5,
    marginRight: 5
  },
  dateMinFormat: {
    fontSize: 15,
    fontFamily: SEMIBOLD,
    color: WHITE
  },
  titleCon: {
    marginLeft: 20,
    marginRight: 20,
    marginTop: 6
  },
  fontTitle: {
    fontSize: 25,
    fontFamily: BOLD,
    color: WHITE
  },
  authorCon: {
    marginLeft: 20
  },
  fontAuthor: {
    fontSize: 17,
    fontFamily: REGULAR,
    color: WHITE
  },
  descContainer: {
    flex: 1,
    backgroundColor: WHITE,
    marginTop: -20,
    borderRadius: 10,
    elevation: 5
  },
  tapCon: {
    marginTop: 20,
    backgroundColor: GRAY_DARK,
    height: 27,
    width: 87,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'flex-end',
    marginRight: 20,
    borderRadius: 10
  },
  fontTapToMore: {
    fontSize: 15,
    fontFamily: SEMIBOLD,
    color: WHITE,
    marginBottom: 3
  },
  description: {
    marginTop: 10,
    marginLeft: 15,
    marginRight: 15,
    marginBottom: 10
  },
  fontDesc: {
    fontSize: 20,
    fontFamily: SEMIBOLD,
    marginBottom: 5
  },

})
