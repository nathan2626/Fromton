import * as React from 'react';
import {
 View,
  SafeAreaView,
  Image,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
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
import {useNavigation} from '@react-navigation/core';
import axios from 'axios';
import Icon from 'react-native-vector-icons/Ionicons';

import LinearGradient from 'react-native-linear-gradient';
const {width, height} = Dimensions.get('window');

const baseUrl = 'http://127.0.0.1:8000';

export const Ingredients = () => {
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
   <View style={styles.viewForPadding}>
    <Text style={styles.setLabelInfo}>CE QU'IL VOUS FAUT :</Text>
    <Text style={styles.setLabelDescription}>
        1. 80g d’Ossau-Iraty râpé {"\n"}
        2. 2 oeufs {"\n"}
        3. 50g de beurre {"\n"}
        4. 125g d’eau {"\n"}
        5. 80g de farine {"\n"}
        6. Sel et poivre {"\n"}
    </Text>

    
    <Text style={styles.wineChoose}>Quel vin choisir ?</Text>
    <Text style={styles.perfectWine}>
        Le vin parfait pour cette recette est le{' '}
        <Text style={styles.wineSpecial}>Vin jaune</Text>.
    </Text>

    <Text style={styles.setTexteQuestion}>Une question ?</Text>
    <Text style={styles.setTexteSupport}>Contactez le support !</Text>
   </View>
   </>
  );
};

const styles = StyleSheet.create({
  viewForPadding: {
    paddingHorizontal: 20,
    marginTop: -10,
  },
  setLabelInfo: {
    fontSize: 19,
    fontWeight: 'bold',
    marginTop: 26,
  },
  setLabelDescription: {
    color: 'grey',
    fontSize: 16,
    lineHeight: 22,
    marginTop: 5,
    textAlign: 'justify',
  },
  perfectWine: {
    color: 'grey',
    fontSize: 16,
    lineHeight: 22,
    marginTop: 4,
    textAlign: 'justify',
  },
  wineSpecial: {
    color: 'orange',
    fontWeight: '500',
  },
  wineChoose: {
    fontSize: 19,
    fontWeight: 'bold',
    marginTop: 0,
  },
  setTexteQuestion: {
    textAlign: 'center',
    fontSize: 19,
    fontWeight: 'bold',
    marginTop: 20,
  },
  setTexteSupport: {
    color: 'grey',
    fontSize: 16,
    lineHeight: 22,
    marginTop: 4,
    textAlign: 'center',
    paddingBottom: 20,
  },
  setScrollViewAll: {
    flex: 1,
    backgroundColor: '#fff',
  },
  setImgResize: {
    resizeMode: 'contain',
    flex: 1,
  },
  setCategoryTitle: {
    textAlign: 'center',
    marginTop: 10,
    backgroundColor: 'darkorange',
    color: '#fff',
    fontWeight: '500',
    fontStyle: 'italic',
    padding: 10,
  },
  setViewSubtitleCheese: {
    marginLeft: 20,
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  setSubtitleCheese: {
    fontSize: 16,
    fontWeight: '400',
    maxWidth: 300,
    color: 'orange',
    fontStyle: 'italic',
  },
  setViewTitleCheese: {
    marginLeft: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  setTitleCheese: {
    fontSize: 22,
    fontWeight: 'bold',
    maxWidth: 270,
  },
  setPriceCheese: {
    marginLeft: 15,
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },

  recipeLink: {
    fontSize: 19,
    fontWeight: 'bold',
    marginTop: 20,
  },
  setViewAllLabels: {
    marginTop: 10,
  },
  setLabelForInf: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 18,
  },
  setAnswInf: {
    color: 'orange',
    fontWeight: '500',
    fontSize: 15,
    fontStyle: 'italic',
  },

  header: {
    paddingHorizontal: 20,
    paddingTop: 40,
    paddingBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  setScrollViewNews: {
    width: width,
    padding: 0,
    marginLeft: -9,
  },
  viewForGreenBgAfterSelect: {
    backgroundColor: 'green',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    padding: 20,
  },
  ViewForTitleImgNews: {
    marginTop: 10,
    backgroundColor: 'green',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  setTextSelection: {
    color: 'white',
    textAlign: 'center',
    marginTop: 26,
    fontSize: 28,
    fontWeight: '500',
  },
  setImgSelection: {
    width: width * 0.9,
    resizeMode: 'contain',
    padding: 0,
    marginTop: -220,
    marginBottom: -200,
    marginLeft: 32,
  },
  imageContainer: {
    flex: 0.8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  detailsContainer: {
    flex: 0.55,
    backgroundColor: '#fffs',
    marginHorizontal: 7,
    marginBottom: 7,
    borderRadius: 20,
    marginTop: 10,
    paddingTop: 26,
  },
  line: {
    width: 25,
    height: 2,
    backgroundColor: '#000',
    marginBottom: 5,
    marginRight: 3,
  },
  borderBtn: {
    borderColor: 'grey',
    borderWidth: 1,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    width: 60,
    height: 40,
  },
  borderBtnText: {fontWeight: 'bold', fontSize: 28},
  buyBtn: {
    width: 130,
    height: 50,
    backgroundColor: 'green',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
  },
  priceTag: {
    backgroundColor: 'red',
    width: 80,
    height: 40,
    justifyContent: 'center',
    borderTopLeftRadius: 25,
    borderBottomLeftRadius: 25,
  },
  viewAllNotation: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 18,
  },
  setTextNotation: {
    fontSize: 16,
    marginLeft: 3,
    fontWeight: '500',
  },
  viewReviewsCard: {
    flex: 1,
  },
  setStarsReviewsCard: {
    fontSize: 18,
    textAlign: 'left',
  },
  setTextReviewsCard: {
    fontSize: 12,
    textAlign: 'left',
  },
});

export default Ingredients;
