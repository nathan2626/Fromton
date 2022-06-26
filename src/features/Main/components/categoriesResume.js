import * as React from 'react';
import {
  View,
  SafeAreaView,
  Image,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  ImageBackground,
  ScrollView,
} from 'react-native';
import {
  Card,
  CardTitle,
  CardContent,
  CardAction,
  CardButton,
  CardImage,
} from 'react-native-material-cards';
import {useNavigation} from '@react-navigation/core';
import Icon from 'react-native-vector-icons/Ionicons';
import LinearGradient from 'react-native-linear-gradient';
const {width, height} = Dimensions.get('window');

export const CategoriesResume = () => {
  const navigation = useNavigation();
  const TitleRecipe =
    'MINI QUICHES À L’AUBERGINE GRILLÉE ET LA TOME DE PROVENCE';

  return (
    <>

      <ScrollView
      horizontal
              nestedScrollEnabled={true}>
        <View
            style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 4,
            }}>


            <ImageBackground
            source={require('../../../assets/categories/Alsace.png')}
            style={{
                height: height / 5,
                width: width / 2.2,
                position: 'relative', // because it's parent
                marginHorizontal: 2,
            }}>
            <Text
                style={{
                fontWeight: 'bold',
                color: 'white',
                textAlign: 'center',
                marginTop: '40%',
                fontSize: 16,
                paddingVertical: 5,
                paddingHorizontal: 5,
                marginHorizontal: 15,
                backgroundColor: 'rgba(255,100,0,0.5)',
                }}>
                Recette 1
            </Text>
            </ImageBackground>

            <ImageBackground
            source={require('../../../assets/categories/Alsace.png')}
            style={{
                height: height / 5,
                width: width / 2.2,
                position: 'relative', // because it's parent
                marginHorizontal: 2,
            }}>
            <Text
                style={{
                fontWeight: 'bold',
                color: 'white',
                textAlign: 'center',
                marginTop: '40%',
                fontSize: 16,
                paddingVertical: 5,
                paddingHorizontal: 5,
                marginHorizontal: 15,
                backgroundColor: 'rgba(255,100,0,0.5)',
                }}>
                Recette 1
            </Text>
            </ImageBackground>

            <ImageBackground
            source={require('../../../assets/categories/Alsace.png')}
            style={{
                height: height / 5,
                width: width / 2.2,
                position: 'relative', // because it's parent
                marginHorizontal: 2,
            }}>
            <Text
                style={{
                fontWeight: 'bold',
                color: 'white',
                textAlign: 'center',
                marginTop: '40%',
                fontSize: 16,
                paddingVertical: 5,
                paddingHorizontal: 5,
                marginHorizontal: 15,
                backgroundColor: 'rgba(255,100,0,0.5)',
                }}>
                Recette 1
            </Text>
            </ImageBackground>

            <ImageBackground
            source={require('../../../assets/categories/Alsace.png')}
            style={{
                height: height / 5,
                width: width / 2.2,
                position: 'relative', // because it's parent
                marginHorizontal: 2,
            }}>
            <Text
                style={{
                fontWeight: 'bold',
                color: 'white',
                textAlign: 'center',
                marginTop: '40%',
                fontSize: 16,
                paddingVertical: 5,
                paddingHorizontal: 5,
                marginHorizontal: 15,
                backgroundColor: 'rgba(255,100,0,0.5)',
                }}>
                Recette 1
            </Text>
            </ImageBackground>

            <ImageBackground
            source={require('../../../assets/categories/Alsace.png')}
            style={{
                height: height / 5,
                width: width / 2.2,
                position: 'relative', // because it's parent
                marginHorizontal: 2,
            }}>
            <Text
                style={{
                fontWeight: 'bold',
                color: 'white',
                textAlign: 'center',
                marginTop: '40%',
                fontSize: 16,
                paddingVertical: 5,
                paddingHorizontal: 5,
                marginHorizontal: 15,
                backgroundColor: 'rgba(255,100,0,0.5)',
                }}>
                Recette 1
            </Text>
            </ImageBackground>

         
            
        </View>
      </ScrollView>  
     
      

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
    marginTop: 20,
  },
  setLabelInfo: {
    fontSize: 19,
    fontWeight: 'bold',
  },
  viewForPadding: {
    paddingHorizontal: 20,
    marginTop: 15,
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
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  detailsContainer: {
    flex: 0.55,
    backgroundColor: '#fffs',
    marginHorizontal: 7,
    marginBottom: 7,
    borderRadius: 20,
    marginTop: 18,
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
  setStyleIcon: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 12,
  },
  setAllViewDynamic: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    marginTop: 26,
    marginBottom: 15,
    backgroundColor: '#F1F1F1',
    borderRadius: 20,
    paddingVertical: 5,
    marginHorizontal: 12,
  },
  setButton1Dynamic: {
    paddingVertical: 5,
    paddingHorizontal: 26,
    borderRadius: 20,
    backgroundColor: '#fff',
  },
  setTextButton1Dynamic: {
    fontSize: 20,
    color: 'darkorange',
    letterSpacing: 1,
  },
  setButton2Dynamic: {
    paddingVertical: 5,
    paddingHorizontal: 26,
    borderRadius: 20,
    backgroundColor: 'transparent',
  },
  setTextButton2Dynamic: {
    fontSize: 20,
    color: 'grey',
    letterSpacing: 1,
  },
  displayDynamicContent: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
});

export default CategoriesResume;
