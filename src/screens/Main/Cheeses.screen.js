import React, {Component} from 'react';
import {
  StyleSheet, 
  Text, 
  View, 
  ScrollView,
  Dimensions,
  Image
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

const START_DEFAULT = {x: 0.5, y: 0};
const END_DEFAULT = {x: 0.5, y: 1};
const GRADIENT_COLORS = ['#fde000', '#dd4d11'];
const GRADIENT_LOCATIONS = [0.1, 0.9, 0.9, 0.5];

const {width, height} = Dimensions.get('window');

const Cheeses = ({navigation, route}) => {
  const plant = route.params;

  return (
    <View style={styles.container}>
      <ScrollView>
        
        <Card style={{shadowColor: "#000", shadowOffset: {width: 0, height: 4,}, shadowOpacity: 0.30, shadowRadius: 4.65, elevation: 8, paddingTop:0, marginTop:10, borderRadius:13}}>
            <View style={{display: 'flex', width: width, backgroundColor: "#fff"}}>
              <Image source={plant.img} style={{resizeMode: 'contain', flex: 1}} />
            </View>
          
            <View style={{maxWidth: width, flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: width * 1, marginTop: 10}}>
              <Text style={{fontSize: 22, fontWeight: '500', marginLeft:15}}>{plant.name}</Text>
              <Text style={{fontSize: 20, marginRight:35}}> {plant.price}€</Text>
            </View>

            <View style={{maxWidth: width, flex: 1, width: width * 1, marginTop: 2, marginBottom: 15}}>
              <Text style={{color:'orange', fontStyle: 'italic', fontSize: 17, marginLeft: 15, textAlign: 'justify'}}>Comté 12 mois d'affinage</Text>
            </View>

            <View style={{flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
                <Text style={{fontSize: 26, marginLeft: 15, marginRight: 5}}>4,9</Text>

              <View style={{flex: 1}}>
                <Text style={{fontSize: 14, textAlign: 'left'}}>⭐️⭐️⭐️⭐️⭐️</Text>
                <Text style={{fontSize: 12, textAlign: 'left'}}> 479 Avis</Text>
              </View>
            </View>
            <View style={{maxWidth: width, flex: 1, width: width * 1, marginTop: 15, marginBottom: 10}}>
              <Text style={{color:'#989898', fontSize: 15, marginRight:35, marginLeft: 15, textAlign: 'justify'}}>{plant.about}</Text>
            </View>

            <CardAction style={{flex: 1, justifyContent: 'space-between'}} separator={true} inColumn={false}>
              <CardButton onPress={() => {}} title="➕" />
              <CardButton style={{}} onPress={() => {}} title="PARTAGER" />
              <CardButton style={{}} onPress={() => {}} title="❤️" />
            </CardAction>
        </Card>

        <Card style={{shadowColor: "#000", shadowOffset: {width: 0, height: 4,}, shadowOpacity: 0.30, shadowRadius: 4.65, elevation: 8, paddingTop:0, marginTop:10, borderRadius:13}}>
            <View style={{display: 'flex', width: width, backgroundColor: "#fff"}}>
              <Image source={plant.img} style={{resizeMode: 'contain', flex: 1}} />
            </View>
          
            <View style={{maxWidth: width, flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: width * 1, marginTop: 10}}>
              <Text style={{fontSize: 22, fontWeight: '500', marginLeft:15}}>{plant.name}</Text>
              <Text style={{fontSize: 20, marginRight:35}}> {plant.price}€</Text>
            </View>

            <View style={{maxWidth: width, flex: 1, width: width * 1, marginTop: 2, marginBottom: 15}}>
              <Text style={{color:'orange', fontStyle: 'italic', fontSize: 17, marginLeft: 15, textAlign: 'justify'}}>Comté 12 mois d'affinage</Text>
            </View>

            <View style={{flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
                <Text style={{fontSize: 26, marginLeft: 15, marginRight: 5}}>4,9</Text>

              <View style={{flex: 1}}>
                <Text style={{fontSize: 14, textAlign: 'left'}}>⭐️⭐️⭐️⭐️⭐️</Text>
                <Text style={{fontSize: 12, textAlign: 'left'}}> 479 Avis</Text>
              </View>
            </View>
            <View style={{maxWidth: width, flex: 1, width: width * 1, marginTop: 15, marginBottom: 10}}>
              <Text style={{color:'#989898', fontSize: 15, marginRight:35, marginLeft: 15, textAlign: 'justify'}}>{plant.about}</Text>
            </View>

            <CardAction style={{flex: 1, justifyContent: 'space-between'}} separator={true} inColumn={false}>
              <CardButton onPress={() => {}} title="➕" />
              <CardButton style={{}} onPress={() => {}} title="PARTAGER" />
              <CardButton style={{}} onPress={() => {}} title="❤️" />
            </CardAction>
        </Card>

        
        
      </ScrollView>
    </View>
  );
};
export default Cheeses;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    backgroundColor: '#E1E1E1',
    paddingLeft: 5,
    paddingRight: 5,
    marginTop: 30,
  },
  cardImgSty: {
    resizeMode: 'contain',
    flex: 1
  },
});
