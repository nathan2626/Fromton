import * as React from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  ImageBackground,
  StyleSheet,
  Dimensions,
  Alert,
} from 'react-native';
const {width, height} = Dimensions.get('window');

export const TopLogo = () => {
  return (
    <>
      <ImageBackground
        source={require('../../../assets/bg.png')}
        style={{height: height / 2.5}}>
        <View style={styles.brandView}>
          <Image
            source={require('../../../assets/CheeseBot-logo.png')}
            style={{width, resizeMode: 'contain'}}
          />
          <Text style={styles.brandViewText}> Fromton</Text>
        </View>
      </ImageBackground>
    </>
  );
};

const styles = StyleSheet.create({
  brandView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  brandViewText: {
    color: '#ffffff',
    fontSize: 40,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
});

export default TopLogo;
