import React, {useState} from 'react';
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

import styles from './Recipe.styles';
import LinearGradient from 'react-native-linear-gradient';

const START_DEFAULT = {x: 0, y: 1};
const END_DEFAULT = {x: 0.5, y: 0.5};
const GRADIENT_COLORS = ['#fde000', '#dd4d11'];
const GRADIENT_LOCATIONS = [0.9, 0.1, 0.5, 0.5];

const {width, height} = Dimensions.get('window');

const Categories = () => {
  const navigation = useNavigation();

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
            source={require('../../assets/recipes/1.jpeg')}
            style={styles.setImgResize}
          />
        </View>
        <View>
          <Text style={styles.setCategoryTitle}>Ossau-Iraty - AOP -</Text>
        </View>
        <View style={styles.detailsContainer}>
          <View style={styles.setViewSubtitleCheese}>
            <Text style={styles.setSubtitleCheese}>
              Recette pour 4 personnes
            </Text>
          </View>
          <View style={styles.setViewTitleCheese}>
            <Text style={styles.setTitleCheese}>GOUGÈRES À L’OSSAU-IRATY</Text>
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
              <Text style={styles.setTextNotation}>20 min</Text>
            </View>

            <View
              style={styles.setStyleIcon}>
              <Icon
                name="megaphone-outline"
                color={'black'}
                style={styles.setStarsReviewsCard}
              />
              <Text style={styles.setTextNotation}> 4 personnes</Text>
            </View>

            <View style={styles.setStyleIcon}>
              <Icon
                name="restaurant-outline"
                color={'black'}
                style={styles.setStarsReviewsCard}
              />
              <Text style={styles.setTextNotation}>Facile</Text>
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

export default Categories;
