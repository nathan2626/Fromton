import React, {useState} from 'react';
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
import COLORS from '../../consts/colors';
import {useNavigation} from '@react-navigation/core';
import Icon from 'react-native-vector-icons/Ionicons';
import {ScrollView} from 'react-native-gesture-handler';
import RecipeResume from './components/recipeResume';
import MenuCheese from './components/menuCheese';
import MenuRecipes from './components/menuRecipe';
import Ingredients from './components/ingredients';
import Steps from './components/steps';
import MenuFile from './components/menu';
import CategoriesResume from './components/categoriesResume';
import CardFile from './components/card';
import CardSelectionFile from './components/cardSelection';
import RecipesResumeCategories from './components/recipesResumeCategories';
import CategoriesMaps from './components/categoriesMaps';
import styles from './Categories.styles';
import LinearGradient from 'react-native-linear-gradient';

const START_DEFAULT = {x: 0, y: 1};
const END_DEFAULT = {x: 0.5, y: 0.5};
const GRADIENT_COLORS = ['#fde000', '#dd4d11'];
const GRADIENT_LOCATIONS = [0.9, 0.1, 0.5, 0.5];

const {width, height} = Dimensions.get('window');

const Categories = () => {
  const navigation = useNavigation();

  //for dynamic value
  const [displayOrigines, setDisplayOrigines] = useState(true);
  const [displayRecipes, setDisplayRecipes] = useState(true);

  const toggleDisplayOrigines = () => {
    setDisplayOrigines(!displayOrigines);
  };

  return (
    <>
      <MenuFile />

      <ScrollView style={styles.setScrollViewAll}>
        <Text style={styles.titleChoiceMoment}>
          Quelle région allez-vous visiter ?
        </Text>

        <View
          style={{
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 4,
            marginLeft: 20,
          }}>
          <ScrollView
            style={styles.setScrollViewNews}
            horizontal
            nestedScrollEnabled={true}>
            <CategoriesMaps />
          
          </ScrollView>
        </View>

        <View style={styles.ViewForTitleImg}>
          <Text style={styles.setTextSelection}>La selection</Text>
          <Image
            source={require('../../assets/onBoarding/logo-fromton-color.png')}
            style={styles.setImgSelection}
          />
        </View>

        <ScrollView
          style={styles.setScrollViewSelection}
          horizontal
          nestedScrollEnabled={true}>
          <CardSelectionFile />
        </ScrollView>

        <View style={{marginTop: 20}}>
          <Text style={styles.setTexteQuestion}>Une question ?</Text>
          <Text style={styles.setTexteSupport}>Contactez le support !</Text>
        </View>
      </ScrollView>
    </>
  );
};

export default Categories;
