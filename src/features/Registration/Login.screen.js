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
import styles from './Login.styles';
import TopLogo from './components/topLogo';
import axios from 'axios';
import {dispatch} from '../../redux/store';
//import { useSelector } from 'react-redux';

const {width, height} = Dimensions.get('window');

const START_DEFAULT = {x: 0.5, y: 0};
const END_DEFAULT = {x: 0.5, y: 1};
const GRADIENT_COLORS = ['#fde000', '#dd4d11'];
const GRADIENT_LOCATIONS = [0.1, 0.9, 0.9, 0.5];

const Login = ({navigation}) => {
  //const userLogin = useSelector(state => state.userStock);
  //console.log(userLogin);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const goLogin = (email, password) => {
    console.log(email, password);
    axios
      .post('http://127.0.0.1:8000/api/auth/login', {
        email,
        password,
        device_name: 'App',
      })
      .then(function (response) {
        console.log(response.data);
        if (response.status === 200) {
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
      style={styles.allScrollView}
      showsVerticalScrollIndicator={false}>
      <TopLogo />

      <View style={styles.bottomView}>
        <View style={styles.fixPaddingViewText}>
          <Text style={styles.setTextHome}>Bienvenue</Text>
          <Text>
            Pas encore de compte ?
            <Text
              style={styles.setNotAccount}
              onPress={() => navigation.replace('Register')}>
              {' '}
              S'enregister
            </Text>
          </Text>

          <View style={styles.setViewIdentity}>
            <View style={styles.setViewEmail}>
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
                onChangeText={setPassword}
                style={styles.setInput}
                value={password}
              />
            </View>

            <View style={styles.setViewButton}>
              <TouchableOpacity
                style={styles.loginBtn}
                onPress={() => goLogin(email, password)}>
                <Text style={styles.textButtonLogin}>Se connecter</Text>
              </TouchableOpacity>
            </View>

            <View>
              <Text style={styles.setTextOrConnect}>
                {' '}
                ou connectez-vous avec
              </Text>
            </View>
            <View style={styles.brandViewT}>
              <TouchableOpacity style={styles.button2}>
                <Image
                  source={require('../../assets/facebook.png')}
                  style={styles.icon}
                />
              </TouchableOpacity>

              <TouchableOpacity style={styles.buttonGoogle}>
                <Image
                  source={require('../../assets/google.png')}
                  style={styles.icon}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default Login;
