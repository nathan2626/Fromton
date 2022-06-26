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
        <View style={styles.imageContainer}>
          <Image
            source={require('../../assets/cheeses/categories.png')}
            style={styles.setImgResize}
          />
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'white',
            paddingVertical: 10,
            marginHorizontal: 50,
            borderRadius: 20,
            marginTop: -24,
            borderColor: 'black',
            borderWidth: 0,
            shadowColor: '#000',
            shadowOffset: {width: 0, height: 5},
            shadowOpacity: 0.36,
            shadowRadius: 6.68,
            elevation: 11,
          }}>
          <Text style={{marginRight: 30, fontSize: 18, fontWeight: '500'}}>
            Trouver un fromage
          </Text>
          <Icon
            style={{marginLeft: 30, fontSize: 18, fontWeight: '600'}}
            name="search"
          />
        </View>
        <View style={styles.detailsContainer}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            {displayOrigines ? (
              <TouchableOpacity
                onPress={toggleDisplayOrigines}
                style={{
                  borderBottomColor: 'orange',
                  borderBottomWidth: 3,
                  paddingHorizontal: 30,
                  paddingBottom: 5,
                  marginRight: 26,
                }}>
                <Text style={{fontSize: 21, fontWeight: '600',}}>Origines</Text>
              </TouchableOpacity>
            ) : (
              <TouchableOpacity
                onPress={toggleDisplayOrigines}
                style={{
                  borderBottomColor: 'orange',
                  borderBottomWidth: 0,
                  paddingHorizontal: 30,
                  paddingBottom: 5,
                  marginRight: 26,
                }}>
                <Text style={{fontSize: 18}}>Origines</Text>
              </TouchableOpacity>
            )}

            {!displayOrigines ? (
              <TouchableOpacity
                onPress={toggleDisplayOrigines}
                style={{
                  borderBottomColor: 'orange',
                  borderBottomWidth: 3,
                  paddingHorizontal: 30,
                  paddingBottom: 5,
                  marginLeft: 26,
                }}>
                <Text style={{fontSize: 21, fontWeight: '600',}}>Recettes</Text>
              </TouchableOpacity>
            ) : (
              <TouchableOpacity
                onPress={toggleDisplayOrigines}
                style={{
                  borderBottomColor: 'orange',
                  borderBottomWidth: 0,
                  paddingHorizontal: 30,
                  paddingBottom: 5,
                  marginLeft: 26,
                }}>
                <Text style={{fontSize: 18}}>Recettes</Text>
              </TouchableOpacity>
            )}
          </View>

          <View style={styles.displayDynamicContent}>
            {displayOrigines ? <CategoriesResume /> : <RecipesResumeCategories />}
          </View>

          
         

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
            <CardSelectionFile />
            <CardSelectionFile />
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
