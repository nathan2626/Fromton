import React from 'react';
import {StyleSheet, Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
  /* Fixed menu */
  fixedPaddingLinear: {
    paddingTop: 42,
  },
  viewAllFixedMenu: {
    paddingBottom: 15,
  },
  viewUserAllFixedMenu: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginLeft: 10,
    marginRight: 10,
  },
  setUserFixedMenu: {
    fontSize: 26,
    color: 'white',
  },
  viewRightAllFixedMenu: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  setRightFixedMenu: {
    fontSize: 26,
  },

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
  viewForRedBgAfterSelect: {
    backgroundColor: 'red',
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
});

export default styles;
