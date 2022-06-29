import React, {useState, useEffect} from 'react';
import {
  View,
  SafeAreaView,
  Image,
  Text,
  StyleSheet,
  Dimensions,
} from 'react-native';
import {
  Card,
  CardTitle,
  CardContent,
  CardAction,
  CardButton,
  CardImage,
} from 'react-native-material-cards';
import COLORS from '../../consts/colors';
import {useNavigation} from '@react-navigation/core';
import Icon from 'react-native-vector-icons/Ionicons';
import {ScrollView} from 'react-native-gesture-handler';
import RecipeResume from './components/recipeResume';
import MenuCheese from './components/menuCheese';
import styles from './Cheese.styles';
import LinearGradient from 'react-native-linear-gradient';
import {useRoute} from '@react-navigation/core';
import axios from 'axios';

const START_DEFAULT = {x: 0, y: 1};
const END_DEFAULT = {x: 0.5, y: 0.5};
const GRADIENT_COLORS = ['#fde000', '#dd4d11'];
const GRADIENT_LOCATIONS = [0.9, 0.1, 0.5, 0.5];

const {width, height} = Dimensions.get('window');

const Cheese = () => {
  const navigation = useNavigation();
  const route = useRoute();

  const myImgsTable = [
    require('../../assets/cheeses/cheese1.png'),
    require('../../assets/cheeses/cheese1.png'),
    require('../../assets/cheeses/cheese2.png'),
    require('../../assets/cheeses/cheese3.png'),
    require('../../assets/cheeses/cheese4.png'),
    require('../../assets/cheeses/cheese5.png'),
    require('../../assets/cheeses/cheese6.png'),
    require('../../assets/cheeses/cheese7.png'),
    require('../../assets/cheeses/cheese8.png'),
    require('../../assets/cheeses/cheese9.png'),
    require('../../assets/cheeses/cheese10.png'),
    require('../../assets/cheeses/cheese11.png'),
    require('../../assets/cheeses/cheese12.png'),
    require('../../assets/cheeses/cheese13.png'),
    require('../../assets/cheeses/cheese14.png'),
    require('../../assets/cheeses/cheese15.png'),
    require('../../assets/cheeses/cheese16.png'),
    require('../../assets/cheeses/cheese17.png'),
    require('../../assets/cheeses/cheese18.png'),
    require('../../assets/cheeses/cheese19.png'),
    require('../../assets/cheeses/cheese20.png'),
    require('../../assets/cheeses/cheese21.png'),
    require('../../assets/cheeses/cheese22.png'),
    require('../../assets/cheeses/cheese23.png'),
    require('../../assets/cheeses/cheese24.png'),
    require('../../assets/cheeses/cheese25.png'),
    require('../../assets/cheeses/cheese26.png'),
    require('../../assets/cheeses/cheese27.png'),
    require('../../assets/cheeses/cheese28.png'),
    require('../../assets/cheeses/cheese29.png'),
    require('../../assets/cheeses/cheese30.png'),
    require('../../assets/cheeses/cheese31.png'),
    require('../../assets/cheeses/cheese32.png'),
    require('../../assets/cheeses/cheese33.png'),
    require('../../assets/cheeses/cheese34.png'),
    require('../../assets/cheeses/cheese35.png'),
    require('../../assets/cheeses/cheese36.png'),
    require('../../assets/cheeses/cheese37.png'),
    require('../../assets/cheeses/cheese38.png'),
    require('../../assets/cheeses/cheese39.png'),
    require('../../assets/cheeses/cheese40.png'),
    require('../../assets/cheeses/cheese41.png'),
    require('../../assets/cheeses/cheese42.png'),
    require('../../assets/cheeses/cheese43.png'),
    require('../../assets/cheeses/cheese44.png'),
    require('../../assets/cheeses/cheese45.png'),
    require('../../assets/cheeses/cheese46.png'),
    require('../../assets/cheeses/cheese47.png'),
    require('../../assets/cheeses/cheese48.png'),
    require('../../assets/cheeses/cheese49.png'),
    require('../../assets/cheeses/cheese50.png'),
    require('../../assets/cheeses/cheese51.png'),
    require('../../assets/cheeses/cheese52.png'),
    require('../../assets/cheeses/cheese53.png'),
    require('../../assets/cheeses/cheese54.png'),
    require('../../assets/cheeses/cheese55.png'),
    require('../../assets/cheeses/cheese56.png'),
    require('../../assets/cheeses/cheese57.png'),
    require('../../assets/cheeses/cheese58.png'),
    require('../../assets/cheeses/cheese59.png'),
    require('../../assets/cheeses/cheese60.png'),
    require('../../assets/cheeses/cheese61.png'),
    require('../../assets/cheeses/cheese62.png'),
    require('../../assets/cheeses/cheese63.png'),
    require('../../assets/cheeses/cheese64.png'),
    require('../../assets/cheeses/cheese65.png'),
    require('../../assets/cheeses/cheese66.png'),
    require('../../assets/cheeses/cheese67.png'),
    require('../../assets/cheeses/cheese68.png'),
    require('../../assets/cheeses/cheese69.png'),
    require('../../assets/cheeses/cheese70.png'),
    require('../../assets/cheeses/cheese71.png'),
    require('../../assets/cheeses/cheese72.png'),
    require('../../assets/cheeses/cheese73.png'),
    require('../../assets/cheeses/cheese74.png'),
    require('../../assets/cheeses/cheese75.png'),
    require('../../assets/cheeses/cheese76.png'),
    require('../../assets/cheeses/cheese77.png'),
    require('../../assets/cheeses/cheese78.png'),
    require('../../assets/cheeses/cheese79.png'),
    require('../../assets/cheeses/cheese80.png'),
    require('../../assets/cheeses/cheese81.png'),
    require('../../assets/cheeses/cheese82.png'),
    require('../../assets/cheeses/cheese83.png'),
    require('../../assets/cheeses/cheese84.png'),
    require('../../assets/cheeses/cheese85.png'),
    require('../../assets/cheeses/cheese86.png'),
    require('../../assets/cheeses/cheese87.png'),
    require('../../assets/cheeses/cheese88.png'),
    require('../../assets/cheeses/cheese89.png'),
    require('../../assets/cheeses/cheese90.png'),
    require('../../assets/cheeses/cheese91.png'),
    require('../../assets/cheeses/cheese92.png'),
    require('../../assets/cheeses/cheese93.png'),
    require('../../assets/cheeses/cheese94.png'),
    require('../../assets/cheeses/cheese95.png'),
    require('../../assets/cheeses/cheese96.png'),
    require('../../assets/cheeses/cheese97.png'),
    require('../../assets/cheeses/cheese98.png'),
    require('../../assets/cheeses/cheese99.png'),
    require('../../assets/cheeses/cheese100.png'),
    require('../../assets/cheeses/cheese101.png'),
    require('../../assets/cheeses/cheese102.png'),
    require('../../assets/cheeses/cheese103.png'),
    require('../../assets/cheeses/cheese104.png'),
    require('../../assets/cheeses/cheese105.png'),
    require('../../assets/cheeses/cheese106.png'),
    require('../../assets/cheeses/cheese107.png'),
    require('../../assets/cheeses/cheese108.png'),
    require('../../assets/cheeses/cheese109.png'),
    require('../../assets/cheeses/cheese110.png'),
    require('../../assets/cheeses/cheese111.png'),
    require('../../assets/cheeses/cheese112.png'),
  ];

  const myImgsTableRecipes = [
    require('../../assets/recipes/1.jpeg'),
    require('../../assets/recipes/1.jpeg'),
    require('../../assets/recipes/2.jpeg'),
    require('../../assets/recipes/3.jpeg'),
    require('../../assets/recipes/4.jpeg'),
    require('../../assets/recipes/5.jpeg'),
    require('../../assets/recipes/6.jpeg'),
    require('../../assets/recipes/7.jpeg'),
    require('../../assets/recipes/8.jpeg'),
    require('../../assets/recipes/9.jpeg'),
    require('../../assets/recipes/10.jpeg'),
    require('../../assets/recipes/11.jpeg'),
    require('../../assets/recipes/13.jpeg'),
    require('../../assets/recipes/14.jpeg'),
    require('../../assets/recipes/15.jpeg'),
    require('../../assets/recipes/16.jpeg'),
    require('../../assets/recipes/17.jpeg'),
    require('../../assets/recipes/18.jpeg'),
    require('../../assets/recipes/19.jpeg'),
    require('../../assets/recipes/20.jpeg'),
    require('../../assets/recipes/21.jpeg'),
    require('../../assets/recipes/22.jpeg'),
    require('../../assets/recipes/23.jpeg'),
    require('../../assets/recipes/24.jpeg'),
    require('../../assets/recipes/25.jpeg'),
  ];

  let [recipes, setRecipes] = React.useState(null);
  useEffect(() => {
    axios
      .get('https://fromton-api.herokuapp.com/api/recipes')
      .then(response => setRecipes(response.data.recipes));
  }, []);


  return (
    <>
      <MenuCheese />

      <ScrollView
        style={styles.setScrollViewAll}>
        <View style={styles.imageContainer}>
          <Image
            source={myImgsTable[route.params.id]}
            style={styles.setImgResize}
          />
        </View>
        <View>
          <Text
            style={styles.setCategoryTitle}>
            {/* {navigation.setParams('name')} */}
            {route.params.category}
          </Text>
        </View>
        <View style={styles.detailsContainer}>
          <View
            style={styles.setViewSubtitleCheese}>
            <Text
              style={styles.setSubtitleCheese}>
                          {route.params.subtitle}

            </Text>
          </View>
          <View
            style={styles.setViewTitleCheese}>
            <Text style={styles.setTitleCheese}>
            {route.params.name}

            </Text>
            <View style={styles.priceTag}>
              <Text
                style={styles.setPriceCheese}>
            {route.params.price}
              </Text>
            </View>
          </View>
          <View style={styles.viewAllNotation}>
            <Text style={styles.setTextNotation}>4,9</Text>

            <View style={styles.viewReviewsCard}>
              <Text style={styles.setStarsReviewsCard}>
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
              <Text style={styles.setTextReviewsCard}> 479 Avis</Text>
            </View>
          </View>
          <View style={styles.viewForPadding}>
            <Text style={styles.setLabelInfo}>
              Informations :
            </Text>
            <Text
              style={styles.setLabelDescription}>
                          {route.params.description}

            </Text>

            <View style={styles.setViewAllLabels}>
              <Text
                style={styles.setLabelForInf}>
                Lait de :{' '}
                <Text
                  style={styles.setAnswInf}>
                              {route.params.milk}

                </Text>{' '}
              </Text>
              <Text
                style={styles.setLabelForInf}>
                Affinage :{' '}
                <Text
                  style={styles.setAnswInf}>
            {route.params.refining}
                </Text>{' '}
              </Text>
              <Text
                style={styles.setLabelForInf}>
                Poids :{' '}
                <Text
                  style={styles.setAnswInf}>
            {route.params.pound}
                </Text>{' '}
              </Text>
              <Text
                style={styles.setLabelForInf}>
                Pâte :{' '}
                <Text
                  style={styles.setAnswInf}>
            {route.params.pate}
                </Text>{' '}
              </Text>
            </View>

            <Text style={styles.wineChoose}>
              Quel vin choisir ?
            </Text>
            <Text
              style={styles.perfectWine}>
              Le vin parfait pour ce fromagee est le{' '}
              <Text style={styles.wineSpecial}>
              {route.params.wine}
              </Text>
              .
            </Text>

            <Text style={styles.recipeLink}>
              Recettes liées au fromage :
            </Text>

            <ScrollView
              style={styles.setScrollViewNews}
              horizontal
              nestedScrollEnabled={true}>

            {recipes &&
              recipes.map(recipe => (
                recipe.id === route.params.id ?
                <Card style={styles.allCardSelection}>
                  <Image
                    source={myImgsTableRecipes[route.params.id]}
                    style={styles.setImgCardSelection}
                  />

                  <View style={styles.viewForTitleAndPriceCardSelection}>
                    <Text style={styles.setTitleCardSelection}>
                      {recipe.name.length > 26
                        ? recipe.name.substring(0, 26) + '...'
                        : recipe.name}
                    </Text>
                  </View>

                  <View style={styles.setViewItalic}>
                    <Text style={styles.setItalicText}>{recipe.cook + recipe.time} de réalisation au total.</Text>
                  </View>

                  <View style={styles.viewForNotationCardSelec}>
                    <Text style={styles.textNotationSelectCard}>{recipe.nbrpers}</Text>

                    <View style={styles.viewForRatingSelect}>
                      <Text style={styles.setTextReviewsSelect}> Personnes</Text>
                    </View>
                  </View>

                  <CardAction style={styles.cardAction} separator={true} inColumn={false}>
                    <Icon
                      color={'green'}
                      size={32}
                      style={styles.setLeftFixedMenu}
                      onPress={() => navigation.replace('Recipe', recipe)}
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
                : <View></View>
              ))}

            </ScrollView>

            <Text
              style={styles.setTexteQuestion}>
              Une question ?
            </Text>
            <Text
              style={styles.setTexteSupport}>
              Contactez le support !
            </Text>
          </View>
        </View>
      </ScrollView>
    </>
  );
};

export default Cheese;
