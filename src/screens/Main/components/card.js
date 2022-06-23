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
//import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/core';
import axios from 'axios';
import Icon from 'react-native-ionicons';


import LinearGradient from 'react-native-linear-gradient';
const {width, height} = Dimensions.get('window');

const baseUrl = 'http://127.0.0.1:8000';


export const CardFile = () => {
    // const navigation = useNavigation();

    // const [cheeses, setCheeses] = React.useState([]);
    // const getCheeses = () => {
        
    //     axios({
    //         method: 'get',
    //         url: `${baseUrl}/api/cheeses`,
    //     }).then((response) => {
    //         setCheeses(response.data);
    //     })
        
    // };

    // const ItemView= ({item}) => {
        
    // }
    const navigation = useNavigation();

  return (
    <>
      <Card style={styles.setCardAll}>
        <View style={styles.viewForImgCard}>
          <Image
            source={require('../../../assets/cheeses/cheese1.png')}
            style={styles.setImgCard}
          />
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
          <Text style={styles.setShortDescr}>
            Potted Plant Ravenea Plant one of the most popular and beautiful
            species that will produce clumpms. The storage of water often gives
            succulent plants a more swollen or fleshy appearance than other
            plants, a characteristic known as succulence.
          </Text>
        </View>

        <CardAction style={styles.cardAction} separator={true} inColumn={false}>
          <Icon style={styles.setLeftFixedMenu} onPress={() => navigation.replace('Cheese')} name="add" />
          <Text style={styles.setRightFixedMenu}>PARTAGER</Text>
          <Icon style={styles.setRightFixedMenu} name="heart" />
        </CardAction>
      </Card>
    </>
  );
};

const styles = StyleSheet.create({
  setCardAll: {
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 8,
    paddingTop: 0,
    marginTop: 10,
    marginBottom: 20,
    borderRadius: 13,
    borderWidth: 1,
    borderColor: '#F5F5F5',
    marginLeft: 7,
    marginRight: 7,
  },
  viewForImgCard: {
    display: 'flex',
    width: width,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  setImgCard: {
    width: width * 0.9,
    resizeMode: 'contain',
    flex: 1,
  },
  viewForTitleAndPriceCard: {
    maxWidth: width,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: width * 1,
    marginTop: 10,
  },
  setTitleCard: {
    fontSize: 22,
    fontWeight: '500',
    marginLeft: 15,
  },
  setPriceCard: {
    fontSize: 20,
    marginRight: 35,
  },
  setLeftFixedMenu: {
    marginLeft: 5,
  },
  viewForSubtitleCard: {
    maxWidth: width,
    flex: 1,
    width: width * 1,
    marginTop: 2,
    marginBottom: 15,
  },
  setSubtitleCard: {
    color: 'orange',
    fontStyle: 'italic',
    ontSize: 17,
    marginLeft: 15,
    textAlign: 'justify',
  },
  viewAllNotation: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  setTextNotation: {
    fontSize: 26,
    marginLeft: 15,
    marginRight: 5,
  },
  viewReviewsCard: {
    flex: 1,
  },
  setStarsReviewsCard: {
    fontSize: 14,
    textAlign: 'left',
  },
  setTextReviewsCard: {
    fontSize: 12,
    textAlign: 'left',
  },
  viewShortDescr: {
    maxWidth: width,
    flex: 1,
    width: width * 1,
    marginTop: 15,
    marginBottom: 10,
  },
  setShortDescr: {
    color: '#989898',
    fontSize: 15,
    marginRight: 35,
    marginLeft: 15,
    textAlign: 'justify',
  },
  cardAction: {
    flex: 1,
    justifyContent: 'space-between',
  },
});

export default CardFile;
