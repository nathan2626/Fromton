import React from 'react';
import {
  View,
  SafeAreaView,
  Image,
  Text,
  StyleSheet,
  Dimensions,
} from 'react-native';
import COLORS from '../../consts/colors';
import {useNavigation} from '@react-navigation/core';
import Icon from 'react-native-vector-icons/Ionicons';
import {ScrollView} from 'react-native-gesture-handler';
import RecipeResume from './components/recipeResume';
import MenuCheese from './components/menuCheese';
import styles from './Cheese.styles';
import LinearGradient from 'react-native-linear-gradient';
import { useRoute } from '@react-navigation/core';

const START_DEFAULT = {x: 0, y: 1};
const END_DEFAULT = {x: 0.5, y: 0.5};
const GRADIENT_COLORS = ['#fde000', '#dd4d11'];
const GRADIENT_LOCATIONS = [0.9, 0.1, 0.5, 0.5];

const {width, height} = Dimensions.get('window');

const Cheese = () => {
  const navigation = useNavigation();
  const route = useRoute();
  return (
    <>
      <MenuCheese />

      <ScrollView
        style={styles.setScrollViewAll}>
        <View style={styles.imageContainer}>
          <Image
            source={require('../../assets/cheeses/cheese1.png')}
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
              Le vin parfait pour le Comté 12 mois d'affinage est le{' '}
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
              <RecipeResume />
            
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
