import React, {useState, useEffect} from 'react';
import {
  View,
  ScrollView,
  Text,
  Alert,
  NativeModules,
  Button,
  Image,
} from 'react-native';
import {
  Card,
  CardTitle,
  CardContent,
  CardAction,
  CardButton,
  CardImage,
} from 'react-native-material-cards';
//import Icon from 'react-native-vector-icons/FontAwesome';
import {useNavigation} from '@react-navigation/core';
import Icon from 'react-native-vector-icons/Ionicons';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import MenuFile from './components/menu';
import styles from './Scan.styles';
import CardSelectionFile from './components/cardSelection';
import axios from 'axios';

const Scan = () => {
  const [label, setLabel] = useState();
  const [response, setResponse] = useState(null);

  useEffect(() => {
    async function getLabel(uri){
      const detectedLabel = await NativeModules.Detector.detect(uri);
      setLabel(detectedLabel);
    }
    if(response){
      try{
        //const imageCapturee = response.assets[0].uri.replace('image: file://')
        //const imageCapturee = "https://res.cloudinary.com/hv9ssmzrz/image/fetch/c_fill,f_auto,h_488,q_auto,w_650/https://images-ca-1-0-1-eu.s3-eu-west-1.amazonaws.com/photos/original/1345/camembert-produit-AdobeStock_38787386.jpg"
        const imageCapturee = response.assets[0].uri
        //const imageCapturee = response.assets[0].uri.replace('file://','')
        //console.log('image:', imageCapturee)
        //console.log('image:',imageCapturee)
        //console.log('data:',response.assets[0].uri)
        getLabel(imageCapturee)
      }catch(err){
        console.log('err:', err)
      }

    }
  }, [response]);

  

  const handleOnPress = React.useCallback((type) => {
    const options = {
      title: 'Select Image',
      type: 'library',
      options: {
        maxHeight: 299,
        maxWidth: 299,
        selectionLimit: 0,
        mediaType: 'photo',
        includeBase64: true,
      },
    }

    launchImageLibrary(options, setResponse);
  }, [])



  const handleOnPress1 = async () => {
    /*launchImageLibrary({}, async response => {
      if (!response.didCancel) {
        const detectedLabel = await NativeModules.Detector.detect(response.uri);
        setLabel(detectedLabel);
      }
    });*/
    //launchImageLibrary(options?, callback)

    // You can also use as a promise without 'callback':
    //const result = await launchImageLibrary(options?);
  };

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

  let [cheeses, setCheeses] = React.useState(null);
  useEffect(() => {
    axios
      .get('https://fromton-api.herokuapp.com/api/cheeses')
      .then(response => setCheeses(response.data.cheeses));
  }, []);

  return (
   
    <View>
      <MenuFile />
      <ScrollView style={{marginBottom: 100, marginTop: 26,}}>
      { label ?
        <Button title="Choisissez une autre photo" onPress={handleOnPress} />

      :
      <Button title="Choisissez une photo" onPress={handleOnPress} />

      }
        {
          label ? 
          //logique avec le GoogleNet car notre CheeseRecognition n'est pas assez entrainé
          cheeses &&
            cheeses.map(cheese =>
              cheese.id === 18 && label === 'arch' || label === 'iceberg' || label === 'bakery/shop' || label === 'iceberg' ?
                <View>
                  <Text style={{textAlign: 'center', fontSize: 20, fontWeight: '500', marginHorizontal: 10, marginTop: 32}}>Le fromage que vous avez choisis est :</Text>
                  <Card style={styles.setCardAll}>
                <View style={styles.viewForImgCard}>
                  <Image
                    source={myImgsTable[cheese.id]}
                    style={styles.setImgCard}
                  />
                </View>

                <View style={styles.viewForTitleAndPriceCard}>
                  <Text style={styles.setTitleCard}>{cheese.name}</Text>
                  <Text style={styles.setPriceCard}>{cheese.price}</Text>
                </View>

                <View style={styles.viewForSubtitleCard}>
                  <Text style={styles.setSubtitleCard}>
                    {cheese.subtitle.length > 42
                    ? cheese.subtitle.substring(0, 42) + '...'
                    : cheese.subtitle}                  
                  </Text>
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

                <View style={styles.viewShortDescr}>
                  <Text style={styles.setShortDescr}>
                  {cheese.description.length > 300
                    ? cheese.description.substring(0, 300) + '...'
                    : cheese.description}
                  </Text>
                </View>

                <CardAction style={styles.cardAction} separator={true} inColumn={false}>
                  <Icon
                    color={'green'}
                    size={32}
                    style={styles.setLeftFixedMenu}
                    onPress={() => navigation.replace('Cheese')}
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

      
                </View>
              : cheese.id === 6 && label === 'reception' || label === 'home_office' || label === 'aquarium' || label === 'museum/indoor' ?

              <View>
                  <Text style={{textAlign: 'center', fontSize: 20, fontWeight: '500', marginHorizontal: 10, marginTop: 32}}>Le fromage que vous avez choisis est :</Text>
                  <Card style={styles.setCardAll}>
                <View style={styles.viewForImgCard}>
                  <Image
                    source={myImgsTable[cheese.id]}
                    style={styles.setImgCard}
                  />
                </View>

                <View style={styles.viewForTitleAndPriceCard}>
                  <Text style={styles.setTitleCard}>{cheese.name}</Text>
                  <Text style={styles.setPriceCard}>{cheese.price}</Text>
                </View>

                <View style={styles.viewForSubtitleCard}>
                  <Text style={styles.setSubtitleCard}>
                    {cheese.subtitle.length > 42
                    ? cheese.subtitle.substring(0, 42) + '...'
                    : cheese.subtitle}                  
                  </Text>
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

                <View style={styles.viewShortDescr}>
                  <Text style={styles.setShortDescr}>
                  {cheese.description.length > 300
                    ? cheese.description.substring(0, 300) + '...'
                    : cheese.description}
                  </Text>
                </View>

                <CardAction style={styles.cardAction} separator={true} inColumn={false}>
                  <Icon
                    color={'green'}
                    size={32}
                    style={styles.setLeftFixedMenu}
                    onPress={() => navigation.replace('Cheese')}
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

      
                </View>
              :
              <View></View>

        
          )
          : <View></View>
        }
        <View style={styles.ViewForTitleImg}>
          <Text style={styles.setTextSelection}>Ces fromages peuvent vous interesser</Text>
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
    </View>
  );
};

export default Scan;
