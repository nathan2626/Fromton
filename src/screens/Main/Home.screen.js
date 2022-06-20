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
              <CardButton onPress={() => navigation.replace('Cheese')} title="➕" />
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
              <CardButton onPress={() => navigation.replace('Cheese')} title="➕" />
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
              <CardButton onPress={() => navigation.replace('Cheese')} title="➕" />
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
              <CardButton onPress={() => navigation.replace('Cheese')} title="➕" />
              <CardButton style={{}} onPress={() => {}} title="PARTAGER" />
              <CardButton style={{}} onPress={() => {}} title="❤️" />
            </CardAction>
        </Card>




        
        <View style={styles.ViewForTitleImg}>
         <Text style={styles.setTextSelection}>La selection</Text>
         <Image source={require('../../assets/onBoarding/logo-fromton-blanc.png')} style={styles.setImgSelection} />
        </View>

        <ScrollView style={styles.setScrollViewSelection} horizontal nestedScrollEnabled={true}>
          <Card style={styles.allCardSelection}>
          <Image source={require('../../assets/cheeses/cheese1.png')} style={styles.setImgCardSelection} />

            <View style={styles.viewForTitleAndPriceCardSelection}>
              <Text style={styles.setTitleCardSelection}>Comté 12 mois d'affinage</Text>
              <Text style={styles.setPriceCardSelection}> 4.99€</Text>
            </View>

            <View style={styles.setViewItalic}>
              <Text style={styles.setItalicText}>Comté 12 mois d'affinage</Text>
            </View>

            <View style={styles.viewForNotationCardSelec}>
              <Text style={styles.textNotationSelectCard}>4,9</Text>

              <View style={styles.viewForRatingSelect}>
                <Text style={styles.setTextStarsSelect}>⭐️⭐️⭐️⭐️⭐️</Text>
                <Text style={styles.setTextReviewsSelect}> 479 Avis</Text>
              </View>
            </View>

            <CardAction style={styles.setActionCardSlect} separator={true} inColumn={false}>
              <CardButton onPress={() => navigation.replace('Cheese')} title="➕" />
              <CardButton style={styles.fixShareSelection} onPress={() => {}} title="PARTAGER" />
              <CardButton style={styles.fixFavSelection} onPress={() => {}} title="❤️" />
            </CardAction>
          </Card>

          <Card style={styles.allCardSelection}>
          <Image source={require('../../assets/cheeses/cheese1.png')} style={styles.setImgCardSelection} />

            <View style={styles.viewForTitleAndPriceCardSelection}>
              <Text style={styles.setTitleCardSelection}>Comté 12 mois d'affinage</Text>
              <Text style={styles.setPriceCardSelection}> 4.99€</Text>
            </View>

            <View style={styles.setViewItalic}>
              <Text style={styles.setItalicText}>Comté 12 mois d'affinage</Text>
            </View>

            <View style={styles.viewForNotationCardSelec}>
              <Text style={styles.textNotationSelectCard}>4,9</Text>

              <View style={styles.viewForRatingSelect}>
                <Text style={styles.setTextStarsSelect}>⭐️⭐️⭐️⭐️⭐️</Text>
                <Text style={styles.setTextReviewsSelect}> 479 Avis</Text>
              </View>
            </View>

            <CardAction style={styles.setActionCardSlect} separator={true} inColumn={false}>
              <CardButton onPress={() => navigation.replace('Cheese')} title="➕" />
              <CardButton style={styles.fixShareSelection} onPress={() => {}} title="PARTAGER" />
              <CardButton style={styles.fixFavSelection} onPress={() => {}} title="❤️" />
            </CardAction>
          </Card>

          <Card style={styles.allCardSelection}>
          <Image source={require('../../assets/cheeses/cheese1.png')} style={styles.setImgCardSelection} />

            <View style={styles.viewForTitleAndPriceCardSelection}>
              <Text style={styles.setTitleCardSelection}>Comté 12 mois d'affinage</Text>
              <Text style={styles.setPriceCardSelection}> 4.99€</Text>
            </View>

            <View style={styles.setViewItalic}>
              <Text style={styles.setItalicText}>Comté 12 mois d'affinage</Text>
            </View>

            <View style={styles.viewForNotationCardSelec}>
              <Text style={styles.textNotationSelectCard}>4,9</Text>

              <View style={styles.viewForRatingSelect}>
                <Text style={styles.setTextStarsSelect}>⭐️⭐️⭐️⭐️⭐️</Text>
                <Text style={styles.setTextReviewsSelect}> 479 Avis</Text>
              </View>
            </View>

            <CardAction style={styles.setActionCardSlect} separator={true} inColumn={false}>
              <CardButton onPress={() => navigation.replace('Cheese')} title="➕" />
              <CardButton style={styles.fixShareSelection} onPress={() => {}} title="PARTAGER" />
              <CardButton style={styles.fixFavSelection} onPress={() => {}} title="❤️" />
            </CardAction>
          </Card>

          <Card style={styles.allCardSelection}>
          <Image source={require('../../assets/cheeses/cheese1.png')} style={styles.setImgCardSelection} />

            <View style={styles.viewForTitleAndPriceCardSelection}>
              <Text style={styles.setTitleCardSelection}>Comté 12 mois d'affinage</Text>
              <Text style={styles.setPriceCardSelection}> 4.99€</Text>
            </View>

            <View style={styles.setViewItalic}>
              <Text style={styles.setItalicText}>Comté 12 mois d'affinage</Text>
            </View>

            <View style={styles.viewForNotationCardSelec}>
              <Text style={styles.textNotationSelectCard}>4,9</Text>

              <View style={styles.viewForRatingSelect}>
                <Text style={styles.setTextStarsSelect}>⭐️⭐️⭐️⭐️⭐️</Text>
                <Text style={styles.setTextReviewsSelect}> 479 Avis</Text>
              </View>
            </View>

            <CardAction style={styles.setActionCardSlect} separator={true} inColumn={false}>
              <CardButton onPress={() => navigation.replace('Cheese')} title="➕" />
              <CardButton style={styles.fixShareSelection} onPress={() => {}} title="PARTAGER" />
              <CardButton style={styles.fixFavSelection} onPress={() => {}} title="❤️" />
            </CardAction>
          </Card>

        </ScrollView>

        <View style={styles.viewForRedBgAfterSelect}>
        </View>

        <Text style={styles.setTitleAfterSelect}>Une suggestion ?</Text>
        <Text style={styles.setTextAfterSelect}>Contactez le support !</Text>

        
      </ScrollView>

     
    </View>
  );
};
export default Home;