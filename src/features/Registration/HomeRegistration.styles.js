import React from 'react';
import {StyleSheet, Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
  forLinear: {
    height: height,
  },
  title: {
    color: '#fff',
    fontSize: 50,
    fontWeight: 'bold',
    marginTop: 20,
    textAlign: 'center',
  },
  allViewSet: {
    display: 'flex',
    marginLeft: 15,
    marginRight: 15,
  },
  setImgPlus: {
    width,
    resizeMode: 'contain',
  },
  slideViewSetImg: {
    height: '60%',
  },
  fixViewBtn1: {
    height: 60,
  },
  fixViewBtn2: {
    height: 60,
    marginTop: 20,
  },
  fixViewBtn3: {
    height: 60,
    marginTop: 5,
  },
  btn: {
    flex: 1,
    height: 0,
    borderRadius: 50,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  btn2: {
    flex: 1,
    height: 0,
    borderWidth: 1,
    borderColor: '#fff',
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btn3: {
    flex: 1,
    height: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textBtn1Set: {
    fontWeight: 'bold',
    fontSize: 20,
    color: '#fff',
  },
  textBtn2Set: {
    fontWeight: 'bold',
    fontSize: 20,
  },
  textBtn3Set: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#fff',
  },
});

export default styles;
