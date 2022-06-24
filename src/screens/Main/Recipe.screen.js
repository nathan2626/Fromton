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

import Ingredients from './components/ingredients';
import Steps from './components/steps';

import styles from './Recipe.styles';
import LinearGradient from 'react-native-linear-gradient';

const START_DEFAULT = {x: 0, y: 1};
const END_DEFAULT = {x: 0.5, y: 0.5};
const GRADIENT_COLORS = ['#fde000', '#dd4d11'];
const GRADIENT_LOCATIONS = [0.9, 0.1, 0.5, 0.5];

const {width, height} = Dimensions.get('window');

const Recipe = () => {
  const navigation = useNavigation();

  const [displayIngredients, setDisplayIngredients] = useState(true);

  const toggleDisplayIngredients = () => {
    setDisplayIngredients(!displayIngredients);
  };

  return (
    <>
      <MenuCheese />

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
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginRight: 12,
              }}>
              <Icon
                name="time-outline"
                color={'black'}
                style={styles.setStarsReviewsCard}
              />
              <Text style={styles.setTextNotation}>20 min</Text>
            </View>

            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginRight: 12,
              }}>
              <Icon
                name="megaphone-outline"
                color={'black'}
                style={styles.setStarsReviewsCard}
              />
              <Text style={styles.setTextNotation}> 4 personnes</Text>
            </View>

            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Icon
                name="restaurant-outline"
                color={'black'}
                style={styles.setStarsReviewsCard}
              />
              <Text style={styles.setTextNotation}>Facile</Text>
            </View>
          </View>


          <View style={{flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center', marginTop: 26, marginBottom: 15, backgroundColor: '#F1F1F1', borderRadius: 20, paddingVertical: 5, marginHorizontal: 12}}>
              
              {displayIngredients ? 
                <TouchableOpacity
                    style={{paddingVertical: 5, paddingHorizontal: 26, borderRadius: 20, backgroundColor:'#fff'}}
                    onPress={toggleDisplayIngredients}>
                    <Text style={{fontSize: 20, color: 'darkorange', letterSpacing: 1}}>Ingrédients</Text>
                </TouchableOpacity>
                  : 
                  <TouchableOpacity
                    style={{paddingVertical: 5, paddingHorizontal: 26, borderRadius: 20, backgroundColor: 'transparent'}}
                    onPress={toggleDisplayIngredients}>
                    <Text style={{fontSize: 20, color: 'grey', letterSpacing: 1}}>Ingrédients</Text>
                  </TouchableOpacity>
              }
    
              {!displayIngredients ? 
               
                <TouchableOpacity
                    style={{paddingVertical: 5, paddingHorizontal: 26, borderRadius: 20, backgroundColor:'#fff'}}
                    onPress={toggleDisplayIngredients}>
                    <Text style={{fontSize: 20, color: 'darkorange', letterSpacing: 1}}>Déroulement</Text>
                  </TouchableOpacity>
                  : 
                 
                  <TouchableOpacity
                    style={{paddingVertical: 5, paddingHorizontal: 26, borderRadius: 20,}}
                    onPress={toggleDisplayIngredients}>
                    <Text style={{fontSize: 20, color: 'grey', letterSpacing: 1}}>Déroulement</Text>
                  </TouchableOpacity>
              }
        
          </View>

          <View style={{flexDirection: 'row', justifyContent: 'center'}}>

            {displayIngredients ? <Ingredients /> : <Steps />}
          </View>

          <View style={styles.viewForPadding}>
            <Text style={styles.setLabelInfo}>Informations :</Text>
            <Text style={styles.setLabelDescription}>
              Potted Plant Ravenea Plant one of the most popular and beautiful
              species that will produce clumpms. The storage of water often
              gives succulent plants a more swollen or fleshy appearance than
              other plants, a characteristic known as succulence. Potted Plant
              Ravenea Plant one of the most popular.
            </Text>

            <View style={styles.setViewAllLabels}>
              <Text style={styles.setLabelForInf}>
                Lait de : <Text style={styles.setAnswInf}>Vache</Text>{' '}
              </Text>
              <Text style={styles.setLabelForInf}>
                Affinage : <Text style={styles.setAnswInf}>2 mois</Text>{' '}
              </Text>
              <Text style={styles.setLabelForInf}>
                Poids : <Text style={styles.setAnswInf}>500g</Text>{' '}
              </Text>
              <Text style={styles.setLabelForInf}>
                Pâte :{' '}
                <Text style={styles.setAnswInf}>
                  Pâte molle à croûte fleurie
                </Text>{' '}
              </Text>
            </View>

            <Text style={styles.wineChoose}>Quel vin choisir ?</Text>
            <Text style={styles.perfectWine}>
              Le vin parfait pour le Comté 12 mois d'affinage est le{' '}
              <Text style={styles.wineSpecial}>Vin jaune</Text>.
            </Text>

            <Text style={styles.recipeLink}>Recettes liées au fromage :</Text>

            <ScrollView
              style={styles.setScrollViewNews}
              horizontal
              nestedScrollEnabled={true}>
              <RecipeResume />
              <RecipeResume />
              <RecipeResume />
              <RecipeResume />
            </ScrollView>

            <Text style={styles.setTexteQuestion}>Une question ?</Text>
            <Text style={styles.setTexteSupport}>Contactez le support !</Text>
          </View>
        </View>
      </ScrollView>
    </>
  );
};

export default Recipe;
