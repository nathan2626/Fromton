import * as React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Dimensions,
  Image,
} from 'react-native';
import {
  Card,
  CardTitle,
  CardContent,
  CardAction,
  CardButton,
  CardImage,
} from 'react-native-material-cards';
import { useNavigation } from '@react-navigation/core';
import Icon from 'react-native-ionicons';
import LinearGradient from 'react-native-linear-gradient';
const {width, height} = Dimensions.get('window');

export const CardSelectionFile = () => {
  const navigation = useNavigation();

  return (
    <>
      <Card style={styles.allCardSelection}>
        <Image
          source={require('../../../assets/cheeses/cheese1.png')}
          style={styles.setImgCardSelection}
        />

        <View style={styles.viewForTitleAndPriceCardSelection}>
          <Text style={styles.setTitleCardSelection}>
            Comté 12 mois d'affinage
          </Text>
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

        <CardAction
          style={styles.setActionCardSlect}
          separator={true}
          inColumn={false}>
          <Icon style={styles.fixPlusSelection} onPress={() => navigation.replace('Cheese')} name="add" />
          <Text style={styles.fixShareSelection}>PARTAGER</Text>
          <Icon style={styles.fixFavSelection} name="heart" />
        </CardAction>
      </Card>
    </>
  );
};

const styles = StyleSheet.create({
  allCardSelection: {
    margin: 10,
    borderRadius: 20,
    height: height / 2,
    width: width / 1.2,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  setImgCardSelection: {
    width: width / 2,
    height: height / 3.5,
    resizeMode: 'contain',
  },
  viewForTitleAndPriceCardSelection: {
    maxWidth: width,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: width * 1,
    marginTop: 10,
  },
  setTitleCardSelection: {
    fontSize: 18,
    fontWeight: '500',
    marginLeft: 45,
  },
  setPriceCardSelection: {
    fontSize: 20,
    marginRight: 47,
  },
  setViewItalic: {
    maxWidth: width,
    flex: 1,
    width: width * 1,
    marginTop: 0,
    marginBottom: 10,
  },
  setItalicText: {
    color: 'orange',
    fontStyle: 'italic',
    fontSize: 15,
    marginLeft: 45,
    textAlign: 'justify',
  },
  viewForNotationCardSelec: {
    marginBottom: 15,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textNotationSelectCard: {
    fontSize: 26,
    marginLeft: 15,
    marginRight: 5,
  },
  viewForRatingSelect: {
    flex: 1,
  },
  setTextStarsSelect: {
    fontSize: 14,
    textAlign: 'left',
  },
  setTextReviewsSelect: {
    fontSize: 12,
    textAlign: 'left',
  },
  setActionCardSlect: {
    flex: 1,
    justifyContent: 'space-between',
  },
  fixShareSelection: {
    marginLeft: 0,
  },
  fixFavSelection: {
    marginRight: 5,
  },
  fixPlusSelection: {
    marginLeft: 9,
  },
});

export default CardSelectionFile;
