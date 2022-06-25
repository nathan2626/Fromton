import React, {Component} from 'react';
import {
  StyleSheet, 
  Text, 
  View, 
  ScrollView,
  Dimensions,
  Image
} from 'react-native';
import {
  Card,
  CardTitle,
  CardContent,
  CardAction,
  CardButton,
  CardImage,
} from 'react-native-material-cards';
//import Icon from 'react-native-vector-icons/FontAwesome';
import LinearGradient from 'react-native-linear-gradient';

const START_DEFAULT = {x: 0.5, y: 0};
const END_DEFAULT = {x: 0.5, y: 1};
const GRADIENT_COLORS = ['#fde000', '#dd4d11'];
const GRADIENT_LOCATIONS = [0.1, 0.9, 0.9, 0.5];

const {width, height} = Dimensions.get('window');

const Cheeses = ({navigation, route}) => {
  const plant = route.params;

  return (
    <View style={styles.container}>
      <Text style={{ marginTop: 50, textAlign: 'center'}}>Cheeses page</Text>
    </View>
  );
};
export default Cheeses;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    backgroundColor: '#E1E1E1',
    paddingLeft: 5,
    paddingRight: 5,
    marginTop: 30,
  },
  cardImgSty: {
    resizeMode: 'contain',
    flex: 1
  },
  
});
