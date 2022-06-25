import React from 'react';
import {StyleSheet, Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
  brandView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  brandViewT: {
    flex: 1,
    justifyContent: 'space-between',
  },
  brandViewText: {
    color: '#ffffff',
    fontSize: 40,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
  bottomView: {
    flew: 1.5,
    backgroundColor: '#ffffff',
    bottom: 50,
    borderTopStartRadius: 60,
    borderTopEndRadius: 60,
  },
  forgotPassView: {
    height: 50,
    marginTop: 20,
    flexDirection: 'row',
  },
  loginBtn: {
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#dd4d11',
    width: width / 2,
    justifyContent: 'center',
    borderRadius: 50,
    height: 50,
  },
  socialLoginView: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-around',
    marginTop: 30,
  },
  shadowBtn: {
    shadowOffset: {width: 1, height: 10},
    shadowOpacity: 0.4,
    shadowRadius: 3,
    elevation: 15,
  },
  facebookBtn: {
    backgroundColor: '#2579EA',
  },
  button2: {
    backgroundColor: '#2579EA',
    width: '18.5%',
    alignSelf: 'center',
    height: 55,
    alignItems: 'center',
    overflow: 'hidden',
    justifyContent: 'center',
    borderRadius: 55,
    flexDirection: 'row',
    bottom: 10,
    right: 39,
  },
  buttonGoogle: {
    borderWidth: 1,
    left: 39,
    borderRadius: 55,
    BorderColor: 'black',
    alignSelf: 'center',
    backgroundColor: 'white',
    width: '18.5%',
    height: 55,
    alignItems: 'center',
    overflow: 'hidden',
    justifyContent: 'center',
    flexDirection: 'row',
    marginTop: -64,
  },
  icon: {
    width: 39,
    height: 39,
    position: 'absolute',
    left: 10,
    //marginLeft: 20
  },
  textButton2: {
    color: 'white',
    fontWeight: '800',
    fontSize: 18,
    /*textAlign: 'center',
		flex:1*/
  },
  textGoogle: {
    color: 'black',
    fontWeight: '800',
    fontSize: 18,
    /*textAlign: 'center',
		flex:1*/
  },
  allScrollView: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  fixPaddingViewText: {
    padding: 40,
  },
  setTextHome: {
    color: '#dd4d11',
    fontSize: 34,
  },
  setNotAccount: {
    color: '#dd4d11',
    fontStyle: 'italic',
  },
  setViewIdentity: {
    marginTop: 50,
  },
  setViewEmail: {
    paddingBottom: 5,
    borderBottomWidth: 1,
    borderColor: '#fde000',
  },
  setViewMdp: {
    paddingBottom: 5,
    marginTop: 28,
    borderBottomWidth: 1,
    borderColor: '#fde000',
  },
  setViewButton: {
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 32,
  },
  textButtonLogin: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 20,
  },
  setLabel: {
    color: 'grey',
    paddingBottom: 3,
    fontSize: 16,
  },
  setInput: {
    fontSize: 14,
  },
  setTextOrConnect: {
    textAlign: 'center',
    fontWeight: '700',
    marginBottom: 26,
    marginTop: 20,
  },
});

export default styles;
