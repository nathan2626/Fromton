import React from 'react';
import {
  Text,
  ScrollView,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  ImageBackground,
  View,
  Image,
  Button,
  TextInput,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import styles from './Categories.styles';
const {width, height} = Dimensions.get('window');

const START_DEFAULT = {x: 0.5, y: 0};
const END_DEFAULT = {x: 0.5, y: 1};
const GRADIENT_COLORS = ['#fde000', '#dd4d11'];
const GRADIENT_LOCATIONS = [0.1, 0.9, 0.9, 0.5];

const Categories = ({navigation}) => {
  return (
    <ScrollView
      style={{flex: 1, backgroundColor: '#ffffff'}}
      showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        <Text style={{marginTop: 50, textAlign: 'center'}}>
          Categories page
        </Text>
      </View>
    </ScrollView>
  );
};

export default Categories;
