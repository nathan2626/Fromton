import React, {useState, useEffect} from 'react';
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
import axios from 'axios';

const {width, height} = Dimensions.get('window');

export const CardSelectionFile = () => {
  const navigation = useNavigation();

  const path = '../../../assets/cheeses/';
  const pathFinal = '.png';

  const myImgsTable = [
    require('../../../assets/cheeses/cheese1.png'),
    require('../../../assets/cheeses/cheese1.png'),
    require('../../../assets/cheeses/cheese2.png'),
    require('../../../assets/cheeses/cheese3.png'),
    require('../../../assets/cheeses/cheese4.png'),
    require('../../../assets/cheeses/cheese5.png'),
    require('../../../assets/cheeses/cheese6.png'),
    require('../../../assets/cheeses/cheese7.png'),
    require('../../../assets/cheeses/cheese8.png'),
    require('../../../assets/cheeses/cheese9.png'),
    require('../../../assets/cheeses/cheese10.png'),
    require('../../../assets/cheeses/cheese11.png'),
    require('../../../assets/cheeses/cheese12.png'),
    require('../../../assets/cheeses/cheese13.png'),
    require('../../../assets/cheeses/cheese14.png'),
    require('../../../assets/cheeses/cheese15.png'),
    require('../../../assets/cheeses/cheese16.png'),
    require('../../../assets/cheeses/cheese17.png'),
    require('../../../assets/cheeses/cheese18.png'),
    require('../../../assets/cheeses/cheese19.png'),
    require('../../../assets/cheeses/cheese20.png'),
    require('../../../assets/cheeses/cheese21.png'),
    require('../../../assets/cheeses/cheese22.png'),
    require('../../../assets/cheeses/cheese23.png'),
    require('../../../assets/cheeses/cheese24.png'),
    require('../../../assets/cheeses/cheese25.png'),
    require('../../../assets/cheeses/cheese26.png'),
    require('../../../assets/cheeses/cheese27.png'),
    require('../../../assets/cheeses/cheese28.png'),
    require('../../../assets/cheeses/cheese29.png'),
    require('../../../assets/cheeses/cheese30.png'),
    require('../../../assets/cheeses/cheese31.png'),
    require('../../../assets/cheeses/cheese32.png'),
    require('../../../assets/cheeses/cheese33.png'),
    require('../../../assets/cheeses/cheese34.png'),
    require('../../../assets/cheeses/cheese35.png'),
    require('../../../assets/cheeses/cheese36.png'),
    require('../../../assets/cheeses/cheese37.png'),
    require('../../../assets/cheeses/cheese38.png'),
    require('../../../assets/cheeses/cheese39.png'),
    require('../../../assets/cheeses/cheese40.png'),
    require('../../../assets/cheeses/cheese41.png'),
    require('../../../assets/cheeses/cheese42.png'),
    require('../../../assets/cheeses/cheese43.png'),
    require('../../../assets/cheeses/cheese44.png'),
    require('../../../assets/cheeses/cheese45.png'),
    require('../../../assets/cheeses/cheese46.png'),
    require('../../../assets/cheeses/cheese47.png'),
    require('../../../assets/cheeses/cheese48.png'),
    require('../../../assets/cheeses/cheese49.png'),
    require('../../../assets/cheeses/cheese50.png'),
    require('../../../assets/cheeses/cheese51.png'),
    require('../../../assets/cheeses/cheese52.png'),
    require('../../../assets/cheeses/cheese53.png'),
    require('../../../assets/cheeses/cheese54.png'),
    require('../../../assets/cheeses/cheese55.png'),
    require('../../../assets/cheeses/cheese56.png'),
    require('../../../assets/cheeses/cheese57.png'),
    require('../../../assets/cheeses/cheese58.png'),
    require('../../../assets/cheeses/cheese59.png'),
    require('../../../assets/cheeses/cheese60.png'),
    require('../../../assets/cheeses/cheese61.png'),
    require('../../../assets/cheeses/cheese62.png'),
    require('../../../assets/cheeses/cheese63.png'),
    require('../../../assets/cheeses/cheese64.png'),
    require('../../../assets/cheeses/cheese65.png'),
    require('../../../assets/cheeses/cheese66.png'),
    require('../../../assets/cheeses/cheese67.png'),
    require('../../../assets/cheeses/cheese68.png'),
    require('../../../assets/cheeses/cheese69.png'),
    require('../../../assets/cheeses/cheese70.png'),
    require('../../../assets/cheeses/cheese71.png'),
    require('../../../assets/cheeses/cheese72.png'),
    require('../../../assets/cheeses/cheese73.png'),
    require('../../../assets/cheeses/cheese74.png'),
    require('../../../assets/cheeses/cheese75.png'),
    require('../../../assets/cheeses/cheese76.png'),
    require('../../../assets/cheeses/cheese77.png'),
    require('../../../assets/cheeses/cheese78.png'),
    require('../../../assets/cheeses/cheese79.png'),
    require('../../../assets/cheeses/cheese80.png'),
    require('../../../assets/cheeses/cheese81.png'),
    require('../../../assets/cheeses/cheese82.png'),
    require('../../../assets/cheeses/cheese83.png'),
    require('../../../assets/cheeses/cheese84.png'),
    require('../../../assets/cheeses/cheese85.png'),
    require('../../../assets/cheeses/cheese86.png'),
    require('../../../assets/cheeses/cheese87.png'),
    require('../../../assets/cheeses/cheese88.png'),
    require('../../../assets/cheeses/cheese89.png'),
    require('../../../assets/cheeses/cheese90.png'),
    require('../../../assets/cheeses/cheese91.png'),
    require('../../../assets/cheeses/cheese92.png'),
    require('../../../assets/cheeses/cheese93.png'),
    require('../../../assets/cheeses/cheese94.png'),
    require('../../../assets/cheeses/cheese95.png'),
    require('../../../assets/cheeses/cheese96.png'),
    require('../../../assets/cheeses/cheese97.png'),
    require('../../../assets/cheeses/cheese98.png'),
    require('../../../assets/cheeses/cheese99.png'),
    require('../../../assets/cheeses/cheese100.png'),
    require('../../../assets/cheeses/cheese101.png'),
    require('../../../assets/cheeses/cheese102.png'),
    require('../../../assets/cheeses/cheese103.png'),
    require('../../../assets/cheeses/cheese104.png'),
    require('../../../assets/cheeses/cheese105.png'),
    require('../../../assets/cheeses/cheese106.png'),
    require('../../../assets/cheeses/cheese107.png'),
    require('../../../assets/cheeses/cheese108.png'),
    require('../../../assets/cheeses/cheese109.png'),
    require('../../../assets/cheeses/cheese110.png'),
    require('../../../assets/cheeses/cheese111.png'),
    require('../../../assets/cheeses/cheese112.png'),
  ];

  let [cheeses, setCheeses] = React.useState(null);
  useEffect(() => {
    axios
      .get('https://fromton-api.herokuapp.com/api/cheeses')
      .then(response => setCheeses(response.data.cheeses));
  }, []);

  return (
    <>
      {cheeses &&
        cheeses.map(cheese =>
          cheese.id > 4 && cheese.id < 8 ? (
            <Card style={styles.allCardSelection}>
              <Image
                source={myImgsTable[cheese.id]}
                style={styles.setImgCardSelection}
              />

              <View style={styles.viewForTitleAndPriceCardSelection}>
                <Text style={styles.setTitleCardSelection}>{cheese.name}</Text>
                <Text style={styles.setPriceCardSelection}>{cheese.price}</Text>
              </View>

              <View style={styles.setViewItalic}>
                <Text style={styles.setItalicText}>
                  {cheese.subtitle.length > 26
                    ? cheese.subtitle.substring(0, 26) + '...'
                    : cheese.subtitle}
                </Text>
              </View>

              <View style={styles.viewForNotationCardSelec}>
                <Text style={styles.textNotationSelectCard}>4,9</Text>

                <View style={styles.viewForRatingSelect}>
                  <Text style={styles.setTextStarsSelect}>
                    <Icon
                      name="star"
                      color={'gold'}
                      style={styles.setStarsReviewsCard}
                    />
                    <Icon
                      name="star"
                      color={'gold'}
                      style={styles.setStarsReviewsCard}
                    />
                    <Icon
                      name="star"
                      color={'gold'}
                      style={styles.setStarsReviewsCard}
                    />
                    <Icon
                      name="star"
                      color={'gold'}
                      style={styles.setStarsReviewsCard}
                    />
                    <Icon
                      name="star"
                      color={'gold'}
                      style={styles.setStarsReviewsCard}
                    />
                  </Text>
                  <Text style={styles.setTextReviewsSelect}> 479 Avis</Text>
                </View>
              </View>

              <CardAction
                style={styles.cardAction}
                separator={true}
                inColumn={false}>
                <Icon
                  color={'green'}
                  size={32}
                  style={styles.setLeftFixedMenu}
                  onPress={() => navigation.replace('Cheese')}
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
          ) : (
            <View />
          ),
        )}
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
  setStarsReviewsCard: {
    fontSize: 18,
    textAlign: 'left',
  },
});

export default CardSelectionFile;
