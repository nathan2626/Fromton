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
import styles from './Register.styles';

import TopLogo from './components/topLogo';

const {width, height} = Dimensions.get('window');

const START_DEFAULT = {x: 0.5, y: 0};
const END_DEFAULT = {x: 0.5, y: 1};
const GRADIENT_COLORS = ['#fde000', '#dd4d11'];
const GRADIENT_LOCATIONS = [0.1, 0.9, 0.9, 0.5];

const Register = ({navigation}) => {
  return (
    <ScrollView style={{flex: 1, backgroundColor:'#ffffff'}} showsVerticalScrollIndicator={false}>
      <TopLogo />


      <View style={styles.bottomView}>
        <View style={styles.fixPaddingViewText}>

          <Text style={styles.setTextHome}>Bienvenue</Text>
          <Text>Vous avez déjà un compte ? 
            <Text style={styles.setNotAccount}   onPress={() => navigation.replace('Login')}>
              {' '} Se connecter
             </Text>
          </Text>

          <View style={styles.setViewIdentity}>

          <View style={styles.setViewEmail}>
              <Text style={styles.setLabel}>Pseudo</Text>
              <TextInput style={styles.setInput} value="Nathan Journo" />
            </View>
            
            <View style={styles.setViewMdp}>
              <Text style={styles.setLabel}>Email</Text>
              <TextInput style={styles.setInput} value="nathanjourno@yahoo.fr" keyboardType='email-address' />
            </View>

            <View style={styles.setViewMdp}>
              <Text style={styles.setLabel}>Mot de passe</Text>
              <TextInput style={styles.setInput} value="*********" />
            </View>

            <View style={styles.setViewButtonRegister}>
              <TouchableOpacity style={styles.loginBtn} onPress={() => navigation.replace('Home')}>
                <Text style={styles.textButtonLogin}>S'enregistrer</Text>
              </TouchableOpacity>
            </View>

            

          </View>

        </View>
      </View>

    </ScrollView>
  );
};

export default Register;
