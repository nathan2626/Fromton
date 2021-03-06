import React, {useState, useEffect} from 'react';
import {
  View,
  SafeAreaView,
  Image,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import {useNavigation} from '@react-navigation/core';
import axios from 'axios';

const {width, height} = Dimensions.get('window');

const CategoriesMaps = () => {
  const navigation = useNavigation();

  const myImgsTable = [
    require('../../../assets/categories/Franche-compté.png'),
    require('../../../assets/categories/Franche-compté.png'),
    require('../../../assets/categories/Bourgogne.png'),
    require('../../../assets/categories/Rhône-Alpes.png'),
    require('../../../assets/categories/Provence.png'),
    require('../../../assets/categories/Auvergne.png'),
    require('../../../assets/categories/Midi-Pyrénées.png'),
    require('../../../assets/categories/Île-de-France.png'),
    require('../../../assets/categories/Italie.png'),
    require('../../../assets/categories/Normandie.png'),
    require('../../../assets/categories/Lorraine.png'),
    require('../../../assets/categories/Poitou-Charentes.png'),
    require('../../../assets/categories/Champagne-Ard.png'),
    require('../../../assets/categories/Angleterre.png'),
    require('../../../assets/categories/Centre.png'),
    require('../../../assets/categories/Aquitaine.png'),
    require('../../../assets/categories/Corse.png'),
    require('../../../assets/categories/Pays-Bas.png'),
    require('../../../assets/categories/Suisse.png'),
    require('../../../assets/categories/Nord-Pas-de-Calais.png'),
    require('../../../assets/categories/Alsace.png'),
  ];

  let [categories, setCategories] = React.useState(null);
  useEffect(() => {
    axios
      .get('https://fromton-api.herokuapp.com/api/categories')
      .then(response => setCategories(response.data.categories));
  }, []);

  return (
    <>
      {categories &&
        categories.map(category => (
          <ImageBackground
            source={myImgsTable[category.id]}
            onPress={() => navigation.replace('Cheeses', category)}
            style={{
              height: height / 3,
              width: width * 0.87,
              position: 'relative', // because it's parent
              marginHorizontal: 10,
              marginBottom: 28,
            }}>
            <Text
              onPress={() => navigation.replace('Cheeses', category)}
              style={{
                fontWeight: '500',
                color: 'white',
                textAlign: 'center',
                marginTop: '40%',
                fontSize: 22,
                paddingVertical: 5,
                paddingHorizontal: 5,
                marginHorizontal: 40,
                backgroundColor: 'rgba(0,0,0,0.5)',
              }}>
              {category.name}
            </Text>
          </ImageBackground>
        ))}
    </>
  );
};

const styles = StyleSheet.create({
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
  setTexteQuestion: {
    textAlign: 'center',
    fontSize: 19,
    fontWeight: 'bold',
    marginTop: 20,
  },
  recipeLink: {
    fontSize: 19,
    fontWeight: 'bold',
    marginTop: 20,
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
  setLabelInfo: {
    fontSize: 19,
    fontWeight: 'bold',
    marginTop: 26,
  },
  viewForPadding: {
    paddingHorizontal: 20,
    marginTop: -10,
  },
  setLabelDescription: {
    color: 'grey',
    fontSize: 16,
    lineHeight: 22,
    marginTop: 5,
    textAlign: 'justify',
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
  setTexteSupport: {
    color: 'grey',
    fontSize: 16,
    lineHeight: 22,
    marginTop: 4,
    textAlign: 'center',
    paddingBottom: 20,
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

export default CategoriesMaps;
