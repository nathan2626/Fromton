import * as React from 'react';
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
import Icon from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/core';

const {width, height} = Dimensions.get('window');

const START_DEFAULT = {x: 0, y: 1};
const END_DEFAULT = {x: 0.5, y: 0.5};
const GRADIENT_COLORS = ['#fde000', '#dd4d11'];
const GRADIENT_LOCATIONS = [0.9, 0.1, 0.5, 0.5];

export const MenuFile = () => {
  const navigation = useNavigation();

  return (
    <>
      <LinearGradient
        style={styles.fixedPaddingLinear}
        colors={GRADIENT_COLORS}
        locations={GRADIENT_LOCATIONS}
        start={START_DEFAULT}
        end={END_DEFAULT}>
        <View style={styles.viewAllFixedMenu}>
          <View style={styles.viewUserAllFixedMenu}>
            <Icon
              onPress={() => navigation.replace('Home')}
              style={styles.setUserFixedMenu}
              name="home"
            />

            <View style={styles.viewRightAllFixedMenu}>
              <Icon
                onPress={() => navigation.replace('Categories')}
                style={styles.setRightFixedMenu}
                name="search"
              />
              <Icon
                onPress={() => navigation.replace('Profile')}
                style={styles.setRightFixedMenu1}
                name="person"
              />
            </View>
          </View>
        </View>
      </LinearGradient>
    </>
  );
};

const styles = StyleSheet.create({
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
    fontSize: 32,
    color: 'white',
  },
  viewRightAllFixedMenu: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  setRightFixedMenu: {
    fontSize: 32,
    color: 'white',
    marginRight: 12,
  },
  setRightFixedMenu1: {
    fontSize: 32,
    color: 'white',
  },
});

export default MenuFile;
