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
const {width, height} = Dimensions.get('window');

const START_DEFAULT = {x: 0.5, y: 0};
const END_DEFAULT = {x: 0.5, y: 1};
const GRADIENT_COLORS = ['#fde000', '#dd4d11'];
const GRADIENT_LOCATIONS = [0.1, 0.9, 0.9, 0.5];

const Register = ({navigation}) => {
  return (
    <ScrollView style={{flex: 1, backgroundColor:'#ffffff'}} showsVerticalScrollIndicator={false}>
      <ImageBackground source={require('../../assets/bg.png')} style={{height: height / 2.5}}>
        <View style={styles.brandView}>
            <Image source={require('../../assets/CheeseBot-logo.png')} style={{width,resizeMode: 'contain'}} />
          <Text style={styles.brandViewText}> Fromton</Text>
        </View>
      </ImageBackground>

      <View style={styles.bottomView}>
        <View style={{padding: 40}}>

          <Text style={{color: '#dd4d11', fontSize: 34}}>Bienvenue</Text>
          <Text>Vous avez déjà un compte ? 
            <Text style={{color: '#dd4d11', fontStyle: 'italic'}}   onPress={() => navigation.replace('Login')}>
              {' '} Se connecter
             </Text>
          </Text>

          <View style={{marginTop: 50}}>

          <View style={{paddingBottom: 5, borderBottomWidth: 1, borderColor: '#fde000'}}>
              <Text style={{color: 'grey', paddingBottom: 3, fontSize: 16}}>Pseudo</Text>
              <TextInput style={{fontSize: 14}} value="Nathan Journo" />
            </View>
            
            <View style={{paddingBottom: 5, marginTop: 28, borderBottomWidth: 1, borderColor: '#fde000'}}>
              <Text style={{color: 'grey', paddingBottom: 3, fontSize: 16}}>Email</Text>
              <TextInput style={{fontSize: 14}} value="nathanjourno@yahoo.fr" keyboardType='email-address' />
            </View>

            <View style={{paddingBottom: 5, marginTop: 28, borderBottomWidth: 1, borderColor: '#fde000'}}>
              <Text style={{color: 'grey', paddingBottom: 3, fontSize: 16}}>Mot de passe</Text>
              <TextInput style={{fontSize: 14}} value="*********" />
            </View>

            <View style={{height:100, justifyContent: 'center', alignItems: 'center', marginTop: 32}}>
              <TouchableOpacity style={styles.loginBtn}>
                <Text style={{ color: 'black',  fontWeight: 'bold', fontSize: 20,}}>S'enregistrer</Text>
              </TouchableOpacity>
            </View>

            

          </View>

        </View>
      </View>

    </ScrollView>
  );
};

export default Register;
