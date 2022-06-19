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
import styles from './Home.styles';

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
        style={styles.fixedPaddingLinear}
        colors={GRADIENT_COLORS}
        locations={GRADIENT_LOCATIONS}
        start={START_DEFAULT}
        end={END_DEFAULT}>  
        <View style={styles.viewAllFixedMenu}>
          <View style={styles.viewUserAllFixedMenu}>
            <Text style={styles.setUserFixedMenu}>👤</Text>

            <View style={styles.viewRightAllFixedMenu}>
              <Text style={styles.setRightFixedMenu}>⭐️</Text>
              <Text style={styles.setRightFixedMenu}>☺️</Text>
            </View>
          </View>
        </View>
        </LinearGradient>
        
        <Text style={styles.titleChoiceMoment}>Les choix du moment</Text>
        
        <Card style={styles.setCardAll}>
            <View style={styles.viewForImgCard}>
              <Image source={require('../../assets/cheeses/cheese1.png')} style={styles.setImgCard} />
            </View>
          
            <View style={styles.viewForTitleAndPriceCard}>
              <Text style={styles.setTitleCard}>Comté 12 mois d'affinage</Text>
              <Text style={styles.setPriceCard}> 4.99€</Text>
            </View>

            <View style={styles.viewForSubtitleCard}>
              <Text style={styles.setSubtitleCard}>Comté 12 mois d'affinage</Text>
            </View>

            <View style={styles.viewAllNotation}>
                <Text style={styles.setTextNotation}>4,9</Text>

              <View style={styles.viewReviewsCard}>
                <Text style={styles.setStarsReviewsCard}>⭐️⭐️⭐️⭐️⭐️</Text>
                <Text style={styles.setTextReviewsCard}> 479 Avis</Text>
              </View>
            </View>

            <View style={styles.viewShortDescr}>
              <Text style={styles.setShortDescr}>Potted Plant Ravenea Plant one of the most popular and beautiful species that will produce clumpms. The storage of water often gives succulent plants a more swollen or fleshy appearance than other plants, a characteristic known as succulence.</Text>
            </View>

            <CardAction style={styles.cardAction} separator={true} inColumn={false}>
              <CardButton onPress={() => {}} title="➕" />
              <CardButton style={{}} onPress={() => {}} title="PARTAGER" />
              <CardButton style={{}} onPress={() => {}} title="❤️" />
            </CardAction>
        </Card>
        <Card style={styles.setCardAll}>
            <View style={styles.viewForImgCard}>
              <Image source={require('../../assets/cheeses/cheese1.png')} style={styles.setImgCard} />
            </View>
          
            <View style={styles.viewForTitleAndPriceCard}>
              <Text style={styles.setTitleCard}>Comté 12 mois d'affinage</Text>
              <Text style={styles.setPriceCard}> 4.99€</Text>
            </View>

            <View style={styles.viewForSubtitleCard}>
              <Text style={styles.setSubtitleCard}>Comté 12 mois d'affinage</Text>
            </View>

            <View style={styles.viewAllNotation}>
                <Text style={styles.setTextNotation}>4,9</Text>

              <View style={styles.viewReviewsCard}>
                <Text style={styles.setStarsReviewsCard}>⭐️⭐️⭐️⭐️⭐️</Text>
                <Text style={styles.setTextReviewsCard}> 479 Avis</Text>
              </View>
            </View>

            <View style={styles.viewShortDescr}>
              <Text style={styles.setShortDescr}>Potted Plant Ravenea Plant one of the most popular and beautiful species that will produce clumpms. The storage of water often gives succulent plants a more swollen or fleshy appearance than other plants, a characteristic known as succulence.</Text>
            </View>

            <CardAction style={styles.cardAction} separator={true} inColumn={false}>
              <CardButton onPress={() => {}} title="➕" />
              <CardButton style={{}} onPress={() => {}} title="PARTAGER" />
              <CardButton style={{}} onPress={() => {}} title="❤️" />
            </CardAction>
        </Card>


        <Text style={styles.titleChoiceMoment}>Les meilleurs choix de la communauté</Text>
        
        <Card style={styles.setCardAll}>
            <View style={styles.viewForImgCard}>
              <Image source={require('../../assets/cheeses/cheese1.png')} style={styles.setImgCard} />
            </View>
          
            <View style={styles.viewForTitleAndPriceCard}>
              <Text style={styles.setTitleCard}>Comté 12 mois d'affinage</Text>
              <Text style={styles.setPriceCard}> 4.99€</Text>
            </View>

            <View style={styles.viewForSubtitleCard}>
              <Text style={styles.setSubtitleCard}>Comté 12 mois d'affinage</Text>
            </View>

            <View style={styles.viewAllNotation}>
                <Text style={styles.setTextNotation}>4,9</Text>

              <View style={styles.viewReviewsCard}>
                <Text style={styles.setStarsReviewsCard}>⭐️⭐️⭐️⭐️⭐️</Text>
                <Text style={styles.setTextReviewsCard}> 479 Avis</Text>
              </View>
            </View>

            <View style={styles.viewShortDescr}>
              <Text style={styles.setShortDescr}>Potted Plant Ravenea Plant one of the most popular and beautiful species that will produce clumpms. The storage of water often gives succulent plants a more swollen or fleshy appearance than other plants, a characteristic known as succulence.</Text>
            </View>

            <CardAction style={styles.cardAction} separator={true} inColumn={false}>
              <CardButton onPress={() => {}} title="➕" />
              <CardButton style={{}} onPress={() => {}} title="PARTAGER" />
              <CardButton style={{}} onPress={() => {}} title="❤️" />
            </CardAction>
        </Card>
        <Card style={styles.setCardAll}>
            <View style={styles.viewForImgCard}>
              <Image source={require('../../assets/cheeses/cheese1.png')} style={styles.setImgCard} />
            </View>
          
            <View style={styles.viewForTitleAndPriceCard}>
              <Text style={styles.setTitleCard}>Comté 12 mois d'affinage</Text>
              <Text style={styles.setPriceCard}> 4.99€</Text>
            </View>

            <View style={styles.viewForSubtitleCard}>
              <Text style={styles.setSubtitleCard}>Comté 12 mois d'affinage</Text>
            </View>

            <View style={styles.viewAllNotation}>
                <Text style={styles.setTextNotation}>4,9</Text>

              <View style={styles.viewReviewsCard}>
                <Text style={styles.setStarsReviewsCard}>⭐️⭐️⭐️⭐️⭐️</Text>
                <Text style={styles.setTextReviewsCard}> 479 Avis</Text>
              </View>
            </View>

            <View style={styles.viewShortDescr}>
              <Text style={styles.setShortDescr}>Potted Plant Ravenea Plant one of the most popular and beautiful species that will produce clumpms. The storage of water often gives succulent plants a more swollen or fleshy appearance than other plants, a characteristic known as succulence.</Text>
            </View>

            <CardAction style={styles.cardAction} separator={true} inColumn={false}>
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