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

  return (
    <View>
      <MenuFile />
      <ScrollView style={{marginBottom: 100, marginTop: 26,}}>
      { label ?
        <Button title="Choisis une autre photo" onPress={handleOnPress} />

      :
      <Button title="Choisis une photo" onPress={handleOnPress} />

      }
        {
          label ? 
          
          
          <View>
          <Text style={{textAlign: 'center', fontSize: 20, fontWeight: '500', marginHorizontal: 10, marginTop: 32}}>Le fromage que vous avez choisis est :</Text>
          <Card style={styles.setCardAll}>
        <View style={styles.viewForImgCard}>
          <Image
            source={require('../../assets/cheeses/cheese1.png')}
            style={styles.setImgCard}
          />
        </View>

        <View style={styles.viewForTitleAndPriceCard}>
          <Text style={styles.setTitleCard}>{label}</Text>
          <Text style={styles.setPriceCard}> 4.99€</Text>
        </View>

        <View style={styles.viewForSubtitleCard}>
          <Text style={styles.setSubtitleCard}>Comté 12 mois d'affinage</Text>
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
            Potted Plant Ravenea Plant one of the most popular and beautiful
            species that will produce clumpms. The storage of water often gives
            succulent plants a more swollen or fleshy appearance than other
            plants, a characteristic known as succulence.
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

      <View style={styles.ViewForTitleImg}>
          <Text style={styles.setTextSelection}>Ces fromages peuvent vous interesser</Text>
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
          </View>
          : <Text>No ok</Text>
        }

      </ScrollView>
    </View>
  );
};

export default Scan;
