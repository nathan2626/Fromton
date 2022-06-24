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
import {useNavigation} from '@react-navigation/core';
import Icon from 'react-native-vector-icons/Ionicons';
import LinearGradient from 'react-native-linear-gradient';
const {width, height} = Dimensions.get('window');

export const RecipeResume = () => {
  const navigation = useNavigation();
  const TitleRecipe =
    'MINI QUICHES À L’AUBERGINE GRILLÉE ET LA TOME DE PROVENCE';

  return (
    <>
      <Card style={styles.allCardSelection}>
        <Image
          source={require('../../../assets/recipes/1.jpeg')}
          style={styles.setImgCardSelection}
        />

        <View style={styles.viewForTitleAndPriceCardSelection}>
          <Text style={styles.setTitleCardSelection}>
            {TitleRecipe.length > 30
              ? TitleRecipe.substring(0, 30) + '...'
              : TitleRecipe}
          </Text>
        </View>

        <View style={styles.setViewItalic}>
          <Text style={styles.setItalicText}>Comté 12 mois d'affinage</Text>
        </View>

        <View style={styles.viewForNotationCardSelec}>
          <Text style={styles.textNotationSelectCard}>6</Text>

          <View style={styles.viewForRatingSelect}>
            <Text style={styles.setTextReviewsSelect}> Personnes</Text>
          </View>
        </View>

        <CardAction style={styles.cardAction} separator={true} inColumn={false}>
          <Icon
            color={'green'}
            size={32}
            style={styles.setLeftFixedMenu}
            onPress={() => navigation.replace('Recipe')}
            name="add"
          />
          <Text>PARTAGER</Text>
          <Icon
            color={'red'}
            size={32}
            style={styles.setRightFixedMenu}
            name="heart"
          />
        </CardAction>
      </Card>
    </>
  );
};

const styles = StyleSheet.create({
  allCardSelection: {
    margin: 10,
    borderRadius: 20,
    height: height / 2.2,
    width: width / 1.3,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  setImgCardSelection: {
    width: width,
    height: height / 3.5,
    resizeMode: 'contain',
    padding: 0,
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
    fontSize: 16,
    fontWeight: '500',
    marginLeft: 55,
    maxWidth: 275,
  },
  setPriceCardSelection: {
    fontSize: 20,
    marginRight: 55,
  },
  cardAction: {
    flex: 1,
    justifyContent: 'space-between',
    paddingBottom: 10,
    paddingTop: 10,
  },
  setLeftFixedMenu: {
    marginLeft: 15,
  },
  setRightFixedMenu: {
    marginRight: 15,
  },
  setViewItalic: {
    maxWidth: width,
    flex: 1,
    width: width * 1,
    marginTop: 0,
  },
  setItalicText: {
    color: 'orange',
    fontStyle: 'italic',
    fontSize: 15,
    marginLeft: 55,
    textAlign: 'justify',
    marginTop: -5,
  },
  viewForNotationCardSelec: {
    marginBottom: 10,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: -10,
  },
  textNotationSelectCard: {
    fontSize: 20,
    marginLeft: 10,
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
    fontSize: 18,
    textAlign: 'left',
    marginLeft: -5,
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
    marginLeft: 5,
  },
  setStarsReviewsCard: {
    fontSize: 18,
    textAlign: 'left',
  },
});

export default RecipeResume;
