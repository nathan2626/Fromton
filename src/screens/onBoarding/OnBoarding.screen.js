import React from 'react';
import {
  TouchableOpacity,
  Dimensions,
  StatusBar,
  FlatList,
  View,
  Image,
  Text,
} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';
import styles from './OnBoarding.styles';

const {width, height} = Dimensions.get('window');

const START_DEFAULT = {x: 0.5, y: 0};
const END_DEFAULT = {x: 0.5, y: 1};
const GRADIENT_COLORS = ['#fde000', '#dd4d11'];
const GRADIENT_LOCATIONS = [0.1, 0.9, 0.9, 0.5];

const slides = [
  {
    id: '1',
    image: require('../../assets/onBoarding/Tasting-amico.png'),
    title: 'Envie de fromage ?',
    subtitle:
      "Obtenez des caractéristiques, des recettes et un juste prix pour n'importe quel fromage.",
  },
  {
    id: '2',
    image: require('../../assets/onBoarding/Tasting-amico.png'),
    title: 'Des producteurs locaux',
    subtitle:
      "Notre application vous propose d'accéder à une selection de fromage depuis votre téléphone.",
  },
  {
    id: '3',
    image: require('../../assets/onBoarding/Tasting-amico.png'),
    title: 'Regardez, scannez et découvez',
    subtitle:
      "Scannez n'importe quel fromage pour en savoir plus sur celui-ci.",
  },
  {
    id: '4',
    image: require('../../assets/onBoarding/logo-fromton-blanc.png'),
    title: 'Régalez vos papilles !',
    subtitle: 'Conservez définitivement vos scans de fromage.',
  },
];

const OnBoarding = ({navigation}) => {
  const [currentSlideIndex, setCurrentSlideIndex] = React.useState(0);
  const ref = React.useRef();

  const updateCurrentSlideIndex = e => {
    const contentOffsetX = e.nativeEvent.contentOffset.x;
    const currentIndex = Math.round(contentOffsetX / width);
    setCurrentSlideIndex(currentIndex);
  };

  const goNextSlide = () => {
    const nextSlideIndex = currentSlideIndex + 1;
    if (nextSlideIndex != slides.length) {
      const offset = nextSlideIndex * width;
      ref?.current?.scrollToOffset({offset});
      setCurrentSlideIndex(nextSlideIndex);
    }
  };

  const skip = () => {
    const lastSlidesIndex = slides.length - 1;
    const offset = lastSlidesIndex * width;
    ref?.current?.scrollToOffset({offset});
    setCurrentSlideIndex(lastSlidesIndex);
  };

  //component Slide
  const Slide = ({item}) => {
    return (
      <View style={styles.slideViewImg}>
        <Image source={item.image} style={styles.slideViewSetImg} />
        <View style={styles.slideViewText}>
          <Text style={styles.slideViewTextTitle}>{item.title}</Text>
          <Text style={styles.slideViewTextSubtitle}>{item.subtitle}</Text>
        </View>
      </View>
    );
  };

  //component footer
  const Footer = () => {
    return (
      <View style={styles.footerView}>
        <View style={styles.footerViewIndicator}>
          {slides.map((_, index) => (
            <View
              key={index}
              style={[
                styles.footerSetIndicator,
                currentSlideIndex == index && {
                  backgroundColor: '#fff',
                  width: 55,
                },
              ]}
            />
          ))}
        </View>

        <View style={styles.viewForInd}>
          {currentSlideIndex == slides.length - 1 ? (
            <View style={styles.viewForIndIf}>
              <TouchableOpacity
                style={[styles.btn]}
                onPress={() => navigation.replace('HomeRegistrationScreen')}>
                <Text style={styles.viewTextInd}>
                  Essayez notre application
                </Text>
              </TouchableOpacity>
            </View>
          ) : (
            <View style={styles.viewForIndSingle}>
              <TouchableOpacity
                activeOpacity={0.8}
                style={[
                  styles.btn,
                  {
                    backgroundColor: 'transparent',
                    borderWidth: 1,
                    borderColor: '#ffffff',
                  },
                ]}
                onPress={skip}>
                <Text style={styles.viewForIndSingleText}>PASSER</Text>
              </TouchableOpacity>

              <TouchableOpacity
                activeOpacity={0.8}
                style={[styles.btnNext]}
                onPress={goNextSlide}>
                <Text style={styles.viewForIndSingleSuivant}>SUIVANT</Text>
              </TouchableOpacity>
            </View>
          )}
        </View>
      </View>
    );
  };

  return (
    <View style={styles.allWiewReturn}>
      <LinearGradient
        style={styles.container}
        colors={GRADIENT_COLORS}
        locations={GRADIENT_LOCATIONS}
        start={START_DEFAULT}
        end={END_DEFAULT}>
        <StatusBar backgroundColor="#F5F5F5" />
        <FlatList
          ref={ref}
          onMomentumScrollEnd={updateCurrentSlideIndex}
          contentContainerStyle={{height: height * 0.78}}
          showsHorizontalScrollIndicator={false}
          horizontal
          data={slides}
          pagingEnabled
          renderItem={({item}) => <Slide item={item} />}
        />
        <Footer />
      </LinearGradient>
    </View>
  );
};

export default OnBoarding;
