import React, {useState, useEffect} from 'react';
import {
  View,
  SafeAreaView,
  Image,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import COLORS from '../../consts/colors';
import {useNavigation} from '@react-navigation/core';
import Icon from 'react-native-vector-icons/Ionicons';
import {ScrollView} from 'react-native-gesture-handler';
import RecipeResume from './components/recipeResume';
import MenuCheese from './components/menuCheese';
import MenuRecipes from './components/menuRecipe';
import Ingredients from './components/ingredients';
import Steps from './components/steps';
import {useRoute} from '@react-navigation/core';
import axios from 'axios';
import styles from './Recipe.styles';
import LinearGradient from 'react-native-linear-gradient';

const START_DEFAULT = {x: 0, y: 1};
const END_DEFAULT = {x: 0.5, y: 0.5};
const GRADIENT_COLORS = ['#fde000', '#dd4d11'];
const GRADIENT_LOCATIONS = [0.9, 0.1, 0.5, 0.5];

const {width, height} = Dimensions.get('window');

const Recipe = () => {
  const navigation = useNavigation();
  const route = useRoute();

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

  //for dynamic value
  const [displayIngredients, setDisplayIngredients] = useState(true);

  const toggleDisplayIngredients = () => {
    setDisplayIngredients(!displayIngredients);
  };

  return (
    <>
      <MenuRecipes />

      <ScrollView style={styles.setScrollViewAll}>
        <View style={styles.imageContainer}>
          <Image
            source={myImgsTableRecipes[route.params.id]}
            style={styles.setImgResize}
          />
        </View>
        <View>
          <Text style={styles.setCategoryTitle}>{route.params.name}</Text>
        </View>
        <View style={styles.detailsContainer}>
          <View style={styles.setViewSubtitleCheese}>
            <Text style={styles.setSubtitleCheese}>
              Recette pour {route.params.nbrpers} personnes
            </Text>
          </View>
          <View style={styles.setViewTitleCheese}>
            <Text style={styles.setTitleCheese}>{route.params.name}</Text>
            <View style={styles.priceTag}>
              <Text style={styles.setPriceCheese}>Best</Text>
            </View>
          </View>
          <View style={styles.viewAllNotation}>
            <View
              style={styles.setStyleIcon}>
              <Icon
                name="time-outline"
                color={'black'}
                style={styles.setStarsReviewsCard}
              />
              <Text style={styles.setTextNotation}>{route.params.cook + route.params.time} min</Text>
            </View>

            <View
              style={styles.setStyleIcon}>
              <Icon
                name="megaphone-outline"
                color={'black'}
                style={styles.setStarsReviewsCard}
              />
              <Text style={styles.setTextNotation}>{route.params.nbrpers} personnes</Text>
            </View>

            <View style={styles.setStyleIcon}>
              <Icon
                name="restaurant-outline"
                color={'black'}
                style={styles.setStarsReviewsCard}
              />
              <Text style={styles.setTextNotation}>{route.params.difficult <= 2 ? 'Facile' : route.params.difficult > 2 && route.params.difficult <= 4  ? 'Moyenne' : 'Difficile'}</Text>
            </View>
          </View>


          <View style={styles.setAllViewDynamic}>
              
              {displayIngredients ? 
                <TouchableOpacity
                    style={styles.setButton1Dynamic}
                    onPress={toggleDisplayIngredients}>
                    <Text style={styles.setTextButton1Dynamic}>Ingrédients</Text>
                </TouchableOpacity>
                  : 
                  <TouchableOpacity
                    style={styles.setButton2Dynamic}
                    onPress={toggleDisplayIngredients}>
                    <Text style={styles.setTextButton2Dynamic}>Ingrédients</Text>
                  </TouchableOpacity>
              }
    
              {!displayIngredients ? 
               
                <TouchableOpacity
                    style={styles.setButton1Dynamic}
                    onPress={toggleDisplayIngredients}>
                    <Text style={styles.setTextButton1Dynamic}>Déroulement</Text>
                  </TouchableOpacity>
                  : 
                 
                  <TouchableOpacity
                    style={styles.setButton2Dynamic}
                    onPress={toggleDisplayIngredients}>
                    <Text style={styles.setTextButton2Dynamic}>Déroulement</Text>
                  </TouchableOpacity>
              }
        
          </View>

          <View style={styles.displayDynamicContent}>

            {displayIngredients ? <Ingredients /> : <Steps />}
          </View>

        </View>
      </ScrollView>
    </>
  );
};

export default Recipe;
