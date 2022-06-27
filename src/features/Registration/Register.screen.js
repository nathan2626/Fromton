import React, {useState} from 'react';
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
import axios from 'axios';
import {DB_URL} from 'react-native-dotenv';

const {width, height} = Dimensions.get('window');

const START_DEFAULT = {x: 0.5, y: 0};
const END_DEFAULT = {x: 0.5, y: 1};
const GRADIENT_COLORS = ['#fde000', '#dd4d11'];
const GRADIENT_LOCATIONS = [0.1, 0.9, 0.9, 0.5];

const Register = ({navigation}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const goRegister = (name, email, password) => {
    console.log(name, email, password);
    axios
      .post('http://127.0.0.1:8000/api/auth/register', {
        name,
        email,
        password,
        device_name: 'App',
      })
      .then(function (response) {
        console.log(response.data);
        console.log('test', response.status);
        if (response.status === 201) {
          //dispatch('userStock', response.data);
          navigation.reset({
            index: 0,
            routes: [{name: 'BottomNav'}],
          });
          //navigation.replace('BottomNav');
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <ScrollView
      style={{flex: 1, backgroundColor: '#ffffff'}}
      showsVerticalScrollIndicator={false}>
      <TopLogo />

      <View style={styles.bottomView}>
        <View style={styles.fixPaddingViewText}>
          <Text style={styles.setTextHome}>Bienvenue</Text>
          <Text>
            Vous avez déjà un compte ?
            <Text
              style={styles.setNotAccount}
              onPress={() => navigation.replace('Login')}>
              {' '}
              Se connecter
            </Text>
          </Text>

          <View style={styles.setViewIdentity}>
            <View style={styles.setViewEmail}>
              <Text style={styles.setLabel}>Pseudo</Text>
              <TextInput
                style={styles.setInput}
                onChangeText={setName}
                value={name}
              />
            </View>

            <View style={styles.setViewMdp}>
              <Text style={styles.setLabel}>Email</Text>
              <TextInput
                onChangeText={setEmail}
                style={styles.setInput}
                value={email}
                keyboardType="email-address"
              />
            </View>

            <View style={styles.setViewMdp}>
              <Text style={styles.setLabel}>Mot de passe</Text>
              <TextInput
                style={styles.setInput}
                onChangeText={setPassword}
                value={password}
              />
            </View>

            <View style={styles.setViewButtonRegister}>
              <TouchableOpacity
                style={styles.loginBtn}
                onPress={() => goRegister(name, email, password)}>
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
