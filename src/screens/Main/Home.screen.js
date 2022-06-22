import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Dimensions,
  Image,
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
import styles from './Home.styles';

import CardFile from './components/card';
import CardSelectionFile from './components/cardSelection';
import MenuFile from './components/menu';

const START_DEFAULT = {x: 0, y: 1};
const END_DEFAULT = {x: 0.5, y: 0.5};
const GRADIENT_COLORS = ['#fde000', '#dd4d11'];
const GRADIENT_LOCATIONS = [0.9, 0.1, 0.5, 0.5];

const {width, height} = Dimensions.get('window');

const Home = ({navigation}) => {
  return (
    <View>
      <ScrollView>
        <MenuFile />

        <Text style={styles.titleChoiceMoment}>Les choix du moment</Text>

        <CardFile />
        <CardFile />

        <Text style={styles.titleChoiceMoment}>
          Les meilleurs choix de la communauté
        </Text>

        <CardFile />
        <CardFile />


        <View style={styles.ViewForTitleImg}>
          <Text style={styles.setTextSelection}>La selection</Text>
          <Image
            source={require('../../assets/onBoarding/logo-fromton-blanc.png')}
            style={styles.setImgSelection}
          />
        </View>

        <ScrollView
          style={styles.setScrollViewSelection}
          horizontal
          nestedScrollEnabled={true}>
          <CardSelectionFile />
          <CardSelectionFile />
          <CardSelectionFile />
          <CardSelectionFile />

        </ScrollView>

        <View style={styles.viewForRedBgAfterSelect} />

        <Text style={styles.setTitleAfterSelect}>Une suggestion ?</Text>
        <Text style={styles.setTextAfterSelect}>Contactez le support !</Text>
      </ScrollView>
    </View>
  );
};
export default Home;
