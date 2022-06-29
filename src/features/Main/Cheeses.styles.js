import React from 'react';
import {StyleSheet, Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
  /* Les choix du moment */
  titleChoiceMoment: {
    textAlign: 'center',
    marginTop: 26,
    fontSize: 32,
    fontWeight: '600',
  },

  /* La selection Fromton  */
  ViewForTitleImg: {
    marginTop: 10,
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  setCardAll: {
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 8,
    paddingTop: 0,
    marginTop: 10,
    marginBottom: 20,
    borderRadius: 13,
    borderWidth: 1,
    borderColor: '#F5F5F5',
    marginLeft: 7,
    marginRight: 7,
  },
  ViewForTitleImgNews: {
    marginTop: 10,
    backgroundColor: 'green',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  setTextSelection: {
    color: 'white',
    textAlign: 'center',
    marginTop: 26,
    fontSize: 28,
    fontWeight: '500',
  },
  setImgSelection: {
    width: width * 0.9,
    resizeMode: 'contain',
    padding: 0,
    marginTop: -220,
    marginBottom: -200,
    marginLeft: 32,
  },
  setScrollViewSelection: {
    backgroundColor: 'red',
  },
  setScrollViewNews: {
    backgroundColor: 'green',
  },
  viewForRedBgAfterSelect: {
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    padding: 20,
  },
  viewForGreenBgAfterSelect: {
    backgroundColor: 'green',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    padding: 20,
  },
  setTitleAfterSelect: {
    textAlign: 'center',
    marginTop: 26,
    fontSize: 32,
    fontWeight: '600',
  },
  setTextAfterSelect: {
    textAlign: 'center',
    marginTop: 5,
    marginBottom: 52,
    fontSize: 18,
    fontWeight: '500',
  },
  setCardAll: {
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 8,
    paddingTop: 0,
    marginTop: 10,
    marginBottom: 20,
    borderRadius: 13,
    borderWidth: 1,
    borderColor: '#F5F5F5',
    marginLeft: 7,
    marginRight: 7,
  },
  viewForImgCard: {
    display: 'flex',
    width: width,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  setImgCard: {
    width: width * 0.9,
    resizeMode: 'contain',
    flex: 1,
  },
  viewForTitleAndPriceCard: {
    maxWidth: width,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: width * 1,
    marginTop: 10,
  },
  setTitleCard: {
    fontSize: 22,
    fontWeight: '500',
    marginLeft: 15,
  },
  setPriceCard: {
    fontSize: 20,
    marginRight: 35,
  },
  setLeftFixedMenu: {
    marginLeft: 15,
  },
  setRightFixedMenu: {
    marginRight: 15,
  },
  viewForSubtitleCard: {
    maxWidth: width,
    flex: 1,
    width: width * 1,
    marginTop: 2,
    marginBottom: 15,
  },
  setSubtitleCard: {
    color: 'orange',
    fontStyle: 'italic',
    ontSize: 17,
    marginLeft: 15,
    textAlign: 'justify',
  },
  viewAllNotation: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  setTextNotation: {
    fontSize: 26,
    marginLeft: 15,
    marginRight: 5,
  },
  viewReviewsCard: {
    flex: 1,
  },
  setStarsReviewsCard: {
    fontSize: 14,
    textAlign: 'left',
  },
  setTextReviewsCard: {
    fontSize: 12,
    textAlign: 'left',
  },
  viewShortDescr: {
    maxWidth: width,
    flex: 1,
    width: width * 1,
    marginTop: 15,
    marginBottom: 10,
  },
  setShortDescr: {
    color: '#989898',
    fontSize: 15,
    marginRight: 35,
    marginLeft: 15,
    textAlign: 'justify',
  },
  cardAction: {
    flex: 1,
    justifyContent: 'space-between',
    paddingBottom: 10,
    paddingTop: 10,
  },
});

export default styles;
