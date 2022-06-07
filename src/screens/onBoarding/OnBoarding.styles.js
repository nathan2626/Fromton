import React from 'react';
import {StyleSheet, Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
  slideViewImg: {
    alignItems: 'center',
    padding: 0,
    margin: 0,
  },
  slideViewSetImg: {
    height: '70%',
    width,
    resizeMode: 'contain',
  },
  slideViewText: {
    width,
    resizeMode: 'contain',
  },
  slideViewTextTitle: {
    color: '#ffffff',
    fontSize: 32,
    fontWeight: '800',
    marginTop: 0,
    marginRight: 15,
    marginLeft: 15,
    textAlign: 'center',
  },
  slideViewTextSubtitle: {
    color: '#ffffff',
    fontSize: 21,
    marginTop: 10,
    marginLeft: 20,
    marginRight: 20,
    maxWidth: '100%',
    textAlign: 'center',
    lineHeight: 24,
  },
  footerView: {
    height: height * 0.22,
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  footerViewIndicator: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 0,
  },
  footerSetIndicator: {
    height: 10,
    width: 18,
    backgroundColor: 'black',
    marginHorizontal: 3,
    borderRadius: 50,
    marginTop: 20,
  },
  viewForInd: {
    marginBottom: 30,
  },
  viewForIndIf: {
    height: 70,
  },
  image: {
    height: '100%',
    width: '100%',
    resizeMode: 'contain',
  },
  btn: {
    flex: 1,
    height: 50,
    borderRadius: 5,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  btnNext: {
    flex: 1,
    height: 50,
    borderRadius: 5,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    marginLeft: 10,
  },
  viewTextInd: {
    fontWeight: '500',
    fontSize: 20,
    textTransform: 'uppercase',
  },
  viewForIndSingle: {
    flexDirection: 'row',
  },
  viewForIndSingleText: {
    fontWeight: 'bold',
    fontSize: 15,
    color: '#ffffff',
  },
  viewForIndSingleSuivant: {
    fontWeight: 'bold',
    fontSize: 15,
  },
  allWiewReturn: {
    flex: 1,
  },
});

export default styles;
