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

const START_DEFAULT = {x: 0, y: 1};
const END_DEFAULT = {x: 0.5, y: 0.5};
const GRADIENT_COLORS = ['#fde000', '#dd4d11'];
const GRADIENT_LOCATIONS = [0.9, 0.1, 0.5, 0.5];

const {width, height} = Dimensions.get('window');
const isConnected = true;

const Home = ({navigation}) => {
  return (
    <View>
      <ScrollView>
      <LinearGradient
        style={{paddingTop: 42}}
        colors={GRADIENT_COLORS}
        locations={GRADIENT_LOCATIONS}
        start={START_DEFAULT}
        end={END_DEFAULT}>  
        <View style={{ paddingBottom: 15}}>
          <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginLeft: 10, marginRight: 10}}>
            <Text style={{fontSize: 26, color: 'white'}}>👤</Text>

            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Text style={{fontSize: 26}}>⭐️</Text>
              <Text style={{fontSize: 26, textAlign: 'left'}}>☺️</Text>
            </View>
          </View>
        </View>
        </LinearGradient>
        
        <Text style={{textAlign: 'center', marginTop: 26, fontSize: 32, fontWeight: '600'}}>Les choix du moment</Text>
        
        <Card style={{shadowColor: "#000", shadowOffset: {width: 0, height: 4,}, shadowOpacity: 0.30, shadowRadius: 4.65, elevation: 8, paddingTop:0, marginTop:10, marginBottom:20, borderRadius:13, borderWidth: 1, borderColor: "#F5F5F5", marginLeft: 7, marginRight:7}}>
            <View style={{display: 'flex', width: width, backgroundColor: "#fff", justifyContent: 'center'}}>
              <Image source={require('../../assets/cheeses/cheese1.png')} style={{width: width*0.90, resizeMode: 'contain', flex: 1}} />
            </View>
          
            <View style={{maxWidth: width, flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: width * 1, marginTop: 10}}>
              <Text style={{fontSize: 22, fontWeight: '500', marginLeft:15}}>Comté 12 mois d'affinage</Text>
              <Text style={{fontSize: 20, marginRight:35}}> 4.99€</Text>
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
              <Text style={{color:'#989898', fontSize: 15, marginRight:35, marginLeft: 15, textAlign: 'justify'}}>Potted Plant Ravenea Plant one of the most popular and beautiful species that will produce clumpms. The storage of water often gives succulent plants a more swollen or fleshy appearance than other plants, a characteristic known as succulence.</Text>
            </View>

            <CardAction style={{flex: 1, justifyContent: 'space-between'}} separator={true} inColumn={false}>
              <CardButton onPress={() => {}} title="➕" />
              <CardButton style={{}} onPress={() => {}} title="PARTAGER" />
              <CardButton style={{}} onPress={() => {}} title="❤️" />
            </CardAction>
        </Card>
        <Card style={{shadowColor: "#000", shadowOffset: {width: 0, height: 4,}, shadowOpacity: 0.30, shadowRadius: 4.65, elevation: 8, paddingTop:0, marginTop:10, marginBottom:20, borderRadius:13, borderWidth: 1, borderColor: "#F5F5F5", marginLeft: 7, marginRight:7}}>
            <View style={{display: 'flex', width: width, backgroundColor: "#fff", justifyContent: 'center'}}>
              <Image source={require('../../assets/cheeses/cheese1.png')} style={{width: width*0.90, resizeMode: 'contain', flex: 1}} />
            </View>
          
            <View style={{maxWidth: width, flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: width * 1, marginTop: 10}}>
              <Text style={{fontSize: 22, fontWeight: '500', marginLeft:15}}>Comté 12 mois d'affinage</Text>
              <Text style={{fontSize: 20, marginRight:35}}> 4.99€</Text>
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
              <Text style={{color:'#989898', fontSize: 15, marginRight:35, marginLeft: 15, textAlign: 'justify'}}>Potted Plant Ravenea Plant one of the most popular and beautiful species that will produce clumpms. The storage of water often gives succulent plants a more swollen or fleshy appearance than other plants, a characteristic known as succulence.</Text>
            </View>

            <CardAction style={{flex: 1, justifyContent: 'space-between'}} separator={true} inColumn={false}>
              <CardButton onPress={() => {}} title="➕" />
              <CardButton style={{}} onPress={() => {}} title="PARTAGER" />
              <CardButton style={{}} onPress={() => {}} title="❤️" />
            </CardAction>
        </Card>


        <Text style={{textAlign: 'center', marginTop: 26, fontSize: 32, fontWeight: '600'}}>Les meilleurs choix de la communauté</Text>
        
        <Card style={{shadowColor: "#000", shadowOffset: {width: 0, height: 4,}, shadowOpacity: 0.30, shadowRadius: 4.65, elevation: 8, paddingTop:0, marginTop:10, marginBottom:20, borderRadius:13, borderWidth: 1, borderColor: "#F5F5F5", marginLeft: 7, marginRight:7}}>
            <View style={{display: 'flex', width: width, backgroundColor: "#fff", justifyContent: 'center'}}>
              <Image source={require('../../assets/cheeses/cheese1.png')} style={{width: width*0.90, resizeMode: 'contain', flex: 1}} />
            </View>
          
            <View style={{maxWidth: width, flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: width * 1, marginTop: 10}}>
              <Text style={{fontSize: 22, fontWeight: '500', marginLeft:15}}>Comté 12 mois d'affinage</Text>
              <Text style={{fontSize: 20, marginRight:35}}> 4.99€</Text>
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
              <Text style={{color:'#989898', fontSize: 15, marginRight:35, marginLeft: 15, textAlign: 'justify'}}>Potted Plant Ravenea Plant one of the most popular and beautiful species that will produce clumpms. The storage of water often gives succulent plants a more swollen or fleshy appearance than other plants, a characteristic known as succulence.</Text>
            </View>

            <CardAction style={{flex: 1, justifyContent: 'space-between'}} separator={true} inColumn={false}>
              <CardButton onPress={() => {}} title="➕" />
              <CardButton style={{}} onPress={() => {}} title="PARTAGER" />
              <CardButton style={{}} onPress={() => {}} title="❤️" />
            </CardAction>
        </Card>
        <Card style={{shadowColor: "#000", shadowOffset: {width: 0, height: 4,}, shadowOpacity: 0.30, shadowRadius: 4.65, elevation: 8, paddingTop:0, marginTop:10, marginBottom:20, borderRadius:13, borderWidth: 1, borderColor: "#F5F5F5", marginLeft: 7, marginRight:7}}>
            <View style={{display: 'flex', width: width, backgroundColor: "#fff", justifyContent: 'center'}}>
              <Image source={require('../../assets/cheeses/cheese1.png')} style={{width: width*0.90, resizeMode: 'contain', flex: 1}} />
            </View>
          
            <View style={{maxWidth: width, flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: width * 1, marginTop: 10}}>
              <Text style={{fontSize: 22, fontWeight: '500', marginLeft:15}}>Comté 12 mois d'affinage</Text>
              <Text style={{fontSize: 20, marginRight:35}}> 4.99€</Text>
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
              <Text style={{color:'#989898', fontSize: 15, marginRight:35, marginLeft: 15, textAlign: 'justify'}}>Potted Plant Ravenea Plant one of the most popular and beautiful species that will produce clumpms. The storage of water often gives succulent plants a more swollen or fleshy appearance than other plants, a characteristic known as succulence.</Text>
            </View>

            <CardAction style={{flex: 1, justifyContent: 'space-between'}} separator={true} inColumn={false}>
              <CardButton onPress={() => {}} title="➕" />
              <CardButton style={{}} onPress={() => {}} title="PARTAGER" />
              <CardButton style={{}} onPress={() => {}} title="❤️" />
            </CardAction>
        </Card>




        
        <View style={{marginTop: 10, backgroundColor: 'red',  justifyContent: 'center', alignItems: 'center', flex: 1 }}>
         <Text style={{color: 'white', textAlign: 'center', marginTop: 26, fontSize: 28, fontWeight: '500'}}>La selection</Text>
         <Image source={require('../../assets/onBoarding/logo-fromton-blanc.png')} style={{width: width*0.90, resizeMode: 'contain', padding: 0, marginTop: -220, marginBottom: -200, marginLeft: 32}} />
        </View>

        <ScrollView style={{backgroundColor: 'red'}} horizontal nestedScrollEnabled={true}>
          <Card style={{ margin: 10, borderRadius: 20, height: height/ 2, width: width /1.2, justifyContent: 'flex-start', alignItems: 'center' }}>
          <Image source={require('../../assets/cheeses/cheese1.png')} style={{width: width / 2, height: height / 3.5, resizeMode: 'contain'}} />

            <View style={{maxWidth: width, flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: width * 1, marginTop: 10}}>
              <Text style={{fontSize: 18, fontWeight: '500', marginLeft:45}}>Comté 12 mois d'affinage</Text>
              <Text style={{fontSize: 20, marginRight:47}}> 4.99€</Text>
            </View>

            <View style={{maxWidth: width, flex: 1, width: width * 1, marginTop: 0, marginBottom: 10}}>
              <Text style={{color:'orange', fontStyle: 'italic', fontSize: 15, marginLeft: 45, textAlign: 'justify'}}>Comté 12 mois d'affinage</Text>
            </View>

            <View style={{marginBottom: 15, flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
              <Text style={{fontSize: 26, marginLeft: 15, marginRight: 5}}>4,9</Text>

              <View style={{flex: 1}}>
                <Text style={{fontSize: 14, textAlign: 'left'}}>⭐️⭐️⭐️⭐️⭐️</Text>
                <Text style={{fontSize: 12, textAlign: 'left'}}> 479 Avis</Text>
              </View>
            </View>

            <CardAction style={{flex: 1, justifyContent: 'space-between'}} separator={true} inColumn={false}>
              <CardButton onPress={() => {}} title="➕" />
              <CardButton style={{marginLeft: 5}} onPress={() => {}} title="PARTAGER" />
              <CardButton style={{marginRight: 5}} onPress={() => {}} title="❤️" />
            </CardAction>
          </Card>

          <Card style={{ margin: 10, borderRadius: 20, height: height/ 2, width: width /1.2, justifyContent: 'flex-start', alignItems: 'center' }}>
          <Image source={require('../../assets/cheeses/cheese1.png')} style={{width: width / 2, height: height / 3.5, resizeMode: 'contain'}} />

            <View style={{maxWidth: width, flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: width * 1, marginTop: 10}}>
              <Text style={{fontSize: 18, fontWeight: '500', marginLeft:45}}>Comté 12 mois d'affinage</Text>
              <Text style={{fontSize: 20, marginRight:47}}> 4.99€</Text>
            </View>

            <View style={{maxWidth: width, flex: 1, width: width * 1, marginTop: 0, marginBottom: 10}}>
              <Text style={{color:'orange', fontStyle: 'italic', fontSize: 15, marginLeft: 45, textAlign: 'justify'}}>Comté 12 mois d'affinage</Text>
            </View>

            <View style={{marginBottom: 15, flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
              <Text style={{fontSize: 26, marginLeft: 15, marginRight: 5}}>4,9</Text>

              <View style={{flex: 1}}>
                <Text style={{fontSize: 14, textAlign: 'left'}}>⭐️⭐️⭐️⭐️⭐️</Text>
                <Text style={{fontSize: 12, textAlign: 'left'}}> 479 Avis</Text>
              </View>
            </View>

            <CardAction style={{flex: 1, justifyContent: 'space-between'}} separator={true} inColumn={false}>
              <CardButton onPress={() => {}} title="➕" />
              <CardButton style={{marginLeft: 5}} onPress={() => {}} title="PARTAGER" />
              <CardButton style={{marginRight: 5}} onPress={() => {}} title="❤️" />
            </CardAction>
          </Card>

          <Card style={{ margin: 10, borderRadius: 20, height: height/ 2, width: width /1.2, justifyContent: 'flex-start', alignItems: 'center' }}>
          <Image source={require('../../assets/cheeses/cheese1.png')} style={{width: width / 2, height: height / 3.5, resizeMode: 'contain'}} />

            <View style={{maxWidth: width, flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: width * 1, marginTop: 10}}>
              <Text style={{fontSize: 18, fontWeight: '500', marginLeft:45}}>Comté 12 mois d'affinage</Text>
              <Text style={{fontSize: 20, marginRight:47}}> 4.99€</Text>
            </View>

            <View style={{maxWidth: width, flex: 1, width: width * 1, marginTop: 0, marginBottom: 10}}>
              <Text style={{color:'orange', fontStyle: 'italic', fontSize: 15, marginLeft: 45, textAlign: 'justify'}}>Comté 12 mois d'affinage</Text>
            </View>

            <View style={{marginBottom: 15, flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
              <Text style={{fontSize: 26, marginLeft: 15, marginRight: 5}}>4,9</Text>

              <View style={{flex: 1}}>
                <Text style={{fontSize: 14, textAlign: 'left'}}>⭐️⭐️⭐️⭐️⭐️</Text>
                <Text style={{fontSize: 12, textAlign: 'left'}}> 479 Avis</Text>
              </View>
            </View>

            <CardAction style={{flex: 1, justifyContent: 'space-between'}} separator={true} inColumn={false}>
              <CardButton onPress={() => {}} title="➕" />
              <CardButton style={{marginLeft: 5}} onPress={() => {}} title="PARTAGER" />
              <CardButton style={{marginRight: 5}} onPress={() => {}} title="❤️" />
            </CardAction>
          </Card>

          <Card style={{ margin: 10, borderRadius: 20, height: height/ 2, width: width /1.2, justifyContent: 'flex-start', alignItems: 'center' }}>
          <Image source={require('../../assets/cheeses/cheese1.png')} style={{width: width / 2, height: height / 3.5, resizeMode: 'contain'}} />

            <View style={{maxWidth: width, flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: width * 1, marginTop: 10}}>
              <Text style={{fontSize: 18, fontWeight: '500', marginLeft:45}}>Comté 12 mois d'affinage</Text>
              <Text style={{fontSize: 20, marginRight:47}}> 4.99€</Text>
            </View>

            <View style={{maxWidth: width, flex: 1, width: width * 1, marginTop: 0, marginBottom: 10}}>
              <Text style={{color:'orange', fontStyle: 'italic', fontSize: 15, marginLeft: 45, textAlign: 'justify'}}>Comté 12 mois d'affinage</Text>
            </View>

            <View style={{marginBottom: 15, flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
              <Text style={{fontSize: 26, marginLeft: 15, marginRight: 5}}>4,9</Text>

              <View style={{flex: 1}}>
                <Text style={{fontSize: 14, textAlign: 'left'}}>⭐️⭐️⭐️⭐️⭐️</Text>
                <Text style={{fontSize: 12, textAlign: 'left'}}> 479 Avis</Text>
              </View>
            </View>

            <CardAction style={{flex: 1, justifyContent: 'space-between'}} separator={true} inColumn={false}>
              <CardButton onPress={() => {}} title="➕" />
              <CardButton style={{marginLeft: 5}} onPress={() => {}} title="PARTAGER" />
              <CardButton style={{marginRight: 5}} onPress={() => {}} title="❤️" />
            </CardAction>
          </Card>
        </ScrollView>

        <View style={{backgroundColor: 'red',  justifyContent: 'center', alignItems: 'center', flex: 1, padding: 20 }}>
        </View>

        <Text style={{textAlign: 'center', marginTop: 26, fontSize: 32, fontWeight: '600'}}>Une suggestion ?</Text>
        <Text style={{textAlign: 'center', marginTop: 5, marginBottom: 52, fontSize: 18, fontWeight: '500'}}>Contactez le support !</Text>

        
      </ScrollView>

     
    </View>
  );
};
export default Home;
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
    flex: 1,
  },
});
