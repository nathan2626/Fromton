import React, {useState, useEffect} from 'react';
import {
  View,
  ScrollView,
  Text,
  Alert,
  NativeModules,
  Button,
} from 'react-native';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import MenuFile from './components/menu';

const Scan = () => {
  const [label, setLabel] = useState();
  const [response, setResponse] = useState(null);

  useEffect(() => {
    async function getLabel(uri){
      //uri= 'file:///Users/shinobi/Library/Developer/CoreSimulator/Devices/94A3D673-5D64-4B18-93F7-E03BDFA7F462/data/Containers/Data/Application/5719218B-0F58-49BE-BD85-642A9AFC7F68/tmp/049CC259-F39A-477B-A2BC-FDF54617859A.png'
      const detectedLabel = await NativeModules.Detector.detect(uri);
      console.log('detected label:', JSON.stringify(detectedLabel))
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
      <ScrollView style={{padding: 20}}>
        <Button title="Choisis ta photo" onPress={handleOnPress} />
        <Text>{label}</Text>
      </ScrollView>
    </View>
  );
};

export default Scan;