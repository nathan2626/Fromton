import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Image,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import styles from './HomeRegistration.styles';
const {width, height} = Dimensions.get('window');


const START_DEFAULT = {x: 0.5, y: 0};
const END_DEFAULT = {x: 0.5, y: 1};
const GRADIENT_COLORS = ['#fde000', '#dd4d11'];
const GRADIENT_LOCATIONS = [0.1, 0.9, 0.9, 0.5];

const HomeRegistration = ({navigation}) => {
  return (
    <View>
      <LinearGradient
        style={styles.forLinear}
        colors={GRADIENT_COLORS}
        locations={GRADIENT_LOCATIONS}
        start={START_DEFAULT}
        end={END_DEFAULT}>
        <View style={styles.slideViewSetImg}>
          <Image
            style={styles.setImgPlus}
            source={require('../../assets/onBoarding/logo-fromton-blanc.png')}
          />
        </View>

        <View style={styles.allViewSet}>
          <View style={styles.fixViewBtn1}>
            <TouchableOpacity
              style={[styles.btn]}
              onPress={() => navigation.replace('Register')}>
              <Text style={styles.textBtn2Set}>Créer un compte</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.fixViewBtn2}>
            <TouchableOpacity
              style={[styles.btn2]}
              onPress={() => navigation.replace('Login')}>
              <Text style={styles.textBtn1Set}>Se connecter</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.fixViewBtn3}>
            <TouchableOpacity
              style={[styles.btn3]}
              onPress={() => navigation.replace('HomeCoin')}>
              <Text style={styles.textBtn3Set}>
                Continuer sans s'enregistrer
              </Text>
            </TouchableOpacity>
          </View>

        </View>
      </LinearGradient>
    </View>
  );
};

export default HomeRegistration;
