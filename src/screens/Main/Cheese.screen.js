import React from 'react';
import {View, SafeAreaView, Image, Text, StyleSheet, Dimensions} from 'react-native';
import COLORS from '../../consts/colors';
import { useNavigation } from '@react-navigation/core';
import Icon from 'react-native-vector-icons/Ionicons';
import { ScrollView } from 'react-native-gesture-handler';
import RecipeResume from './components/recipeResume';
const {width, height} = Dimensions.get('window');

const Cheese = () => {

  const navigation = useNavigation();

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: COLORS.white,
      }}>
      <View style={style.header}>
        <Icon name='arrow-back' style={{fontSize:32}} onPress={() => navigation.navigate('Home', { screen: 'Cheese' })}/>
        <Icon name='cart' style={{fontSize:32}}/>
      </View>
      <View style={style.imageContainer}>
        <Image source={require('../../assets/cheeses/cheese1.png')} style={{resizeMode: 'contain', flex: 1}} />
      </View>
      <View>
        <Text style={{textAlign: 'center', marginTop: 10, backgroundColor: 'red', color: '#fff', fontWeight: '500', fontStyle: 'italic', padding: 10}}>Franche-Comté</Text>
      </View>
      <ScrollView style={style.detailsContainer}>
        <View
          style={{
            marginLeft: 20,
            flexDirection: 'row',
            alignItems: 'flex-end',
          }}>
          <Text style={{fontSize: 16, fontWeight: '400', maxWidth: 300, color: 'orange', fontStyle: 'italic'}}>Comté 12 mois d'affinage</Text>
        </View>
        <View
          style={{
            marginLeft: 20,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <Text style={{fontSize: 22, fontWeight: 'bold', maxWidth: 270,}}>Comté 12 mois d'affinage</Text>
          <View style={style.priceTag}>
            <Text
              style={{
                marginLeft: 15,
                color: COLORS.white,
                fontWeight: 'bold',
                fontSize: 16,
              }}>
              4.99€
            </Text>
          </View>
        </View>
        <View style={style.viewAllNotation}>
          <Text style={style.setTextNotation}>4,9</Text>

          <View style={style.viewReviewsCard}>
            <Text style={style.setStarsReviewsCard}>
              <Icon
                name="star"
                color={'gold'}
                style={style.setStarsReviewsCard}
              />
              <Icon
                name="star"
                color={'gold'}
                style={style.setStarsReviewsCard}
              />
              <Icon
                name="star"
                color={'gold'}
                style={style.setStarsReviewsCard}
              />
              <Icon
                name="star"
                color={'gold'}
                style={style.setStarsReviewsCard}
              />
              <Icon
                name="star"
                color={'gold'}
                style={style.setStarsReviewsCard}
              />
            </Text>
            <Text style={style.setTextReviewsCard}> 479 Avis</Text>
          </View>
        </View>
        <View style={{paddingHorizontal: 20, marginTop: 15}}>
          <Text style={{fontSize: 19, fontWeight: 'bold'}}>Informations :</Text>
          <Text
            style={{
              color: 'grey',
              fontSize: 16,
              lineHeight: 22,
              marginTop: 5,
              textAlign: 'justify'
            }}>
            Potted Plant Ravenea Plant one of the most popular and beautiful species that will produce clumpms. The storage of water often gives succulent plants a more swollen or fleshy appearance than other plants, a characteristic known as succulence. Potted Plant Ravenea Plant one of the most popular.
          </Text>
          
          <View style={{marginTop: 10}}>
            <Text style={{flex: 1, justifyContent: 'center', alignItems: 'center', fontSize: 18}}>Lait de : <Text style={{color: 'orange', fontWeight: '500', fontSize: 15, fontStyle: 'italic'}}>Vache</Text> </Text>
            <Text style={{flex: 1, justifyContent: 'center', alignItems: 'center', fontSize: 18}}>Affinage : <Text style={{color: 'orange', fontWeight: '500', fontSize: 15, fontStyle: 'italic'}}>2 mois</Text> </Text>
            <Text style={{flex: 1, justifyContent: 'center', alignItems: 'center', fontSize: 18}}>Poids : <Text style={{color: 'orange', fontWeight: '500', fontSize: 15, fontStyle: 'italic'}} >500g</Text> </Text>
            <Text style={{flex: 1, justifyContent: 'center', alignItems: 'center', fontSize: 18}}>Pâte : <Text style={{color: 'orange', fontWeight: '500', fontSize: 15, fontStyle: 'italic'}}>Pâte molle à croûte fleurie</Text> </Text>

          </View>

          <Text style={{fontSize: 19, fontWeight: 'bold', marginTop: 20}}>Quel vin choisir ?</Text>
          <Text
            style={{
              color: 'grey',
              fontSize: 16,
              lineHeight: 22,
              marginTop: 4,
              textAlign: 'justify'
            }}>
            Le vin parfait pour le Comté 12 mois d'affinage est le  <Text style={{color: 'orange', fontWeight: '500',}} >Vin jaune</Text>.
          </Text>

          <Text style={{fontSize: 19, fontWeight: 'bold', marginTop: 20}}>Recettes liées au fromage :</Text>
      
        <ScrollView
          style={style.setScrollViewNews}
          horizontal
          nestedScrollEnabled={true}>
          <RecipeResume />
          <RecipeResume />
          <RecipeResume />
          <RecipeResume />
        </ScrollView>



          <View
            style={{
              marginTop: 80,
              marginBottom: 50,
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <View style={style.borderBtn}>
                <Text style={style.borderBtnText}>-</Text>
              </View>
              <Text
                style={{
                  fontSize: 20,
                  marginHorizontal: 10,
                  fontWeight: 'bold',
                }}>
                1
              </Text>
              <View style={style.borderBtn}>
                <Text style={style.borderBtnText}>+</Text>
              </View>
            </View>

            <View style={style.buyBtn}>
              <Text
                style={{color: COLORS.white, fontSize: 18, fontWeight: 'bold'}}>
                Buy
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  header: {
    paddingHorizontal: 20,
    marginTop: 20,
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
    flex: 0.45,
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  detailsContainer: {
    flex: 0.55,
    backgroundColor: COLORS.light,
    marginHorizontal: 7,
    marginBottom: 7,
    borderRadius: 20,
    marginTop: 10,
    paddingTop: 26,
  },
  line: {
    width: 25,
    height: 2,
    backgroundColor: COLORS.dark,
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
    backgroundColor: COLORS.green,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
  },
  priceTag: {
    backgroundColor: 'orange',
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
    marginLeft: 5,
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
});

export default Cheese;