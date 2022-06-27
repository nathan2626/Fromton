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
import styles from './Profile.styles';

import TopLogo from '../../features/Registration/components/topLogo';
import axios from 'axios';
import {DB_URL} from 'react-native-dotenv';

const {width, height} = Dimensions.get('window');

const START_DEFAULT = {x: 0.5, y: 0};
const END_DEFAULT = {x: 0.5, y: 1};
const GRADIENT_COLORS = ['#fde000', '#dd4d11'];
const GRADIENT_LOCATIONS = [0.1, 0.9, 0.9, 0.5];

const Profile = ({navigation}) => {
  const isConnected = true;

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [token, setToken] = useState('');
  const config = {
    headers: { Authorization: `Bearer ${token}` }
  };
  const goMe = token => {
    console.log(token);
    axios
      .post('http://127.0.0.1:8000/api/auth/me', config)
      .then(function (response) {
        console.log(response.data);
        console.log('test', response.status);
        if (response.status === 200) {
          //dispatch('userStock', response.data);
          console.log('bien sur me');
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
          <Text style={styles.setTextHome}>Hello Nathan Journo</Text>
          <Text>Vous souhaitez vous déconnecter ?</Text>

          <View style={styles.setViewIdentity}>
            <View style={styles.setViewEmail}>
              <Text style={styles.setLabel}>Pseudo</Text>
              <TextInput style={styles.setInput} value="Nathan Journo" />
            </View>

            <View style={styles.setViewMdp}>
              <Text style={styles.setLabel}>Email</Text>
              <TextInput
                style={styles.setInput}
                value="nathanjourno@yahoo.fr"
                keyboardType="email-address"
              />
            </View>

            <View style={styles.setViewMdp}>
              <Text style={styles.setLabel}>Mot de passe</Text>
              <TextInput style={styles.setInput} value="*********" />
            </View>

            <View style={styles.setViewButtonRegister}>
              <TouchableOpacity
                style={styles.loginBtn}
                onPress={() => goMe(token)}>
                <Text style={styles.textButtonLogin}>Se déconnecter</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default Profile;
