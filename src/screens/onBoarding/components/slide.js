import * as React from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  Alert,
} from 'react-native';
const {width, height} = Dimensions.get('window');

export const SlideFile = ({item}) => {
  return (
    <>
      <View style={styles.slideViewImg}>
        <Image source={item.image} style={styles.slideViewSetImg} />
        <View style={styles.slideViewText}>
          <Text style={styles.slideViewTextTitle}>{item.title}</Text>
          <Text style={styles.slideViewTextSubtitle}>{item.subtitle}</Text>
        </View>
      </View>
    </>
  );
};

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
});

export default SlideFile;
