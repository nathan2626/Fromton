import React from 'react';
import {
  View,
  SafeAreaView,
  Image,
  Text,
  StyleSheet,
  Dimensions,
} from 'react-native';
import {useNavigation} from '@react-navigation/core';
import Icon from 'react-native-vector-icons/Ionicons';
import {ScrollView} from 'react-native-gesture-handler';

import LinearGradient from 'react-native-linear-gradient';

const START_DEFAULT = {x: 0, y: 1};
const END_DEFAULT = {x: 0.5, y: 0.5};
const GRADIENT_COLORS = ['#fde000', '#dd4d11'];
const GRADIENT_LOCATIONS = [0.9, 0.1, 0.5, 0.5];

const {width, height} = Dimensions.get('window');

export const MenuCheese = () => {
  const navigation = useNavigation();

  return (
    <>
      <LinearGradient
        colors={GRADIENT_COLORS}
        locations={GRADIENT_LOCATIONS}
        start={START_DEFAULT}
        end={END_DEFAULT}>
        <View style={styles.header}>
          <View style={styles.viewAllMenu}>
            <Icon
              name="arrow-back"
              style={styles.setIcon}
              onPress={() => navigation.navigate('Home', {screen: 'Cheese'})}
            />
            <Image
              source={require('../../../assets/onBoarding/logo-fromton-blanc.png')}
              style={styles.setImg}
            />
          </View>
          <Icon name="cart" style={styles.setIcon} />
        </View>
      </LinearGradient>
    </>
  );
};

const styles = StyleSheet.create({
  header: {
    paddingHorizontal: 20,
    paddingTop: 40,
    paddingBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  viewAllMenu: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: 0,
  },
  setIcon: {
    fontSize: 32,
  },
  setImg: {
    width: 260,
    height: 40,
    marginLeft: 23,
  },
});

export default MenuCheese;
