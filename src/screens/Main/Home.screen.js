/*import React from 'react';
import {
  View,
  SafeAreaView,
  Text,
  StyleSheet,
  FlatList,
  Image,
  Dimensions,
} from 'react-native';
import {TextInput, TouchableOpacity} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons';
import COLORS from '../../consts/colors';
import plants from '../../consts/plants';
const width = Dimensions.get('window').width / 2 - 30;

const Home = ({navigation}) => {
  const [catergoryIndex, setCategoryIndex] = React.useState(0);

  const categories = ['POPULAR', 'ORGANIC', 'INDOORS', 'SYNTHETIC'];

  const CategoryList = () => {
    return (
      <View style={style.categoryContainer}>
        {categories.map((item, index) => (
          <TouchableOpacity
            key={index}
            activeOpacity={0.8}
            onPress={() => setCategoryIndex(index)}>
            <Text
              style={[
                style.categoryText,
                catergoryIndex === index && style.categoryTextSelected,
              ]}>
              {item}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    );
  };

  const Card = ({plant}) => {
    return (
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => navigation.navigate('Cheeses', plant)}>
        <View style={style.card}>
          <View style={{alignItems: 'flex-end'}}>
            <View
              style={{
                width: 30,
                height: 30,
                borderRadius: 20,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: plant.like
                  ? 'rgba(245, 42, 42,0.2)'
                  : 'rgba(0,0,0,0.2) ',
              }}>
              <Text style={{fontSize: 18}}>❤️</Text>
            </View>
          </View>

          <View
            style={{
              height: 100,
              alignItems: 'center',
            }}>
            <Image
              source={plant.img}
              style={{flex: 1, resizeMode: 'contain'}}
            />
          </View>

          <Text style={{fontWeight: 'bold', fontSize: 17, marginTop: 10}}>
            {plant.name}
          </Text>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: 5,
            }}>
            <Text style={{fontSize: 19, fontWeight: 'bold'}}>
              ${plant.price}
            </Text>
            <View
              style={{
                height: 25,
                width: 25,
                backgroundColor: COLORS.green,
                borderRadius: 5,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text
                style={{fontSize: 22, color: COLORS.white, fontWeight: 'bold'}}>
                +
              </Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <SafeAreaView
      style={{flex: 1, paddingHorizontal: 20, backgroundColor: COLORS.white}}>
      <View style={style.header}>
        <View>
          <Text style={{fontSize: 25, fontWeight: 'bold'}}>Welcome to</Text>
          <Text style={{fontSize: 38, color: COLORS.green, fontWeight: 'bold'}}>
            Plant Shop
          </Text>
        </View>
        <Text style={{fontSize:18}}>🛒</Text>
      </View>
      <View style={{marginTop: 30, flexDirection: 'row'}}>
        <View style={style.searchContainer}>
          <Text style={{fontSize:18, marginLeft: 20}}>🔎</Text>
          <TextInput placeholder="Search" style={style.input} />
        </View>
        <View style={style.sortBtn}>
          <Text style={{fontSize:18}}>🚀</Text>
        </View>
      </View>
      <CategoryList />
      <FlatList
        columnWrapperStyle={{justifyContent: 'space-between'}}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          marginTop: 10,
          paddingBottom: 50,
        }}
        numColumns={2}
        data={plants}
        renderItem={({item}) => {
          return <Card plant={item} />;
        }}
      />
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  categoryContainer: {
    flexDirection: 'row',
    marginTop: 30,
    marginBottom: 20,
    justifyContent: 'space-between',
  },
  categoryText: {fontSize: 16, color: 'grey', fontWeight: 'bold'},
  categoryTextSelected: {
    color: COLORS.green,
    paddingBottom: 5,
    borderBottomWidth: 2,
    borderColor: COLORS.green,
  },
  card: {
    height: 225,
    backgroundColor: COLORS.light,
    width,
    marginHorizontal: 2,
    borderRadius: 10,
    marginBottom: 20,
    padding: 15,
  },
  header: {
    marginTop: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  searchContainer: {
    height: 50,
    backgroundColor: COLORS.light,
    borderRadius: 10,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    fontSize: 18,
    fontWeight: 'bold',
    flex: 1,
    color: COLORS.dark,
  },
  sortBtn: {
    marginLeft: 10,
    height: 50,
    width: 50,
    borderRadius: 10,
    backgroundColor: COLORS.green,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default Home;*/

import React, {Component} from 'react';
import {
  StyleSheet, 
  Text, 
  View, 
  ScrollView,
  Dimensions,
  Image
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
import LinearGradient from 'react-native-linear-gradient';

const START_DEFAULT = {x: 0.5, y: 0};
const END_DEFAULT = {x: 0.5, y: 1};
const GRADIENT_COLORS = ['#fde000', '#dd4d11'];
const GRADIENT_LOCATIONS = [0.1, 0.9, 0.9, 0.5];

const {width, height} = Dimensions.get('window');

const Home = ({navigation}) => {
  return (
    <View style={styles.container}>
      <ScrollView>
        
        <Card style={{shadowColor: "#000", shadowOffset: {width: 0, height: 4,}, shadowOpacity: 0.30, shadowRadius: 4.65, elevation: 8, paddingTop:0, marginTop:10, borderRadius:13}}>
            <View style={{display: 'flex', width: width, backgroundColor: "#fff"}}>
              <Image source={require('../../assets/cheeses/cheese1.png')} style={{resizeMode: 'contain', flex: 1}} />
            </View>
          
            <View style={{maxWidth: width, flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: width * 1, marginTop: 10}}>
              <Text style={{fontSize: 22, fontWeight: '500', marginLeft:15}}>Comté 12 mois d'affinage</Text>
              <Text style={{fontSize: 20, marginRight:35}}> 4.99€</Text>
            </View>

            <View style={{maxWidth: width, flex: 1, width: width * 1, marginTop: 2, marginBottom: 15}}>
              <Text style={{color:'orange', fontStyle: 'italic', fontSize: 17, marginLeft: 15, textAlign: 'justify'}}>Comté 12 mois d'affinage</Text>
            </View>

            <View style={{flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
                <Text style={{fontSize: 26, marginLeft: 15, marginRight: 5}}>4,9</Text>

              <View style={{flex: 1}}>
                <Text style={{fontSize: 14, textAlign: 'left'}}>⭐️⭐️⭐️⭐️⭐️</Text>
                <Text style={{fontSize: 12, textAlign: 'left'}}> 479 Avis</Text>
              </View>
            </View>
            <View style={{maxWidth: width, flex: 1, width: width * 1, marginTop: 15, marginBottom: 10}}>
              <Text style={{color:'#989898', fontSize: 15, marginRight:35, marginLeft: 15, textAlign: 'justify'}}>Potted Plant Ravenea Plant one of the most popular and beautiful species that will produce clumpms. The storage of water often gives succulent plants a more swollen or fleshy appearance than other plants, a characteristic known as succulence.</Text>
            </View>

            <CardAction style={{flex: 1, justifyContent: 'space-between'}} separator={true} inColumn={false}>
              <CardButton onPress={() => {}} title="➕" />
              <CardButton style={{}} onPress={() => {}} title="PARTAGER" />
              <CardButton style={{}} onPress={() => {}} title="❤️" />
            </CardAction>
        </Card>

        <Card style={{shadowColor: "#000", shadowOffset: {width: 0, height: 4,}, shadowOpacity: 0.30, shadowRadius: 4.65, elevation: 8, paddingTop:0, marginTop:10, borderRadius:13}}>
            <View style={{display: 'flex', width: width, backgroundColor: "#fff"}}>
              <Image source={require('../../assets/cheeses/cheese1.png')} style={{resizeMode: 'contain', flex: 1}} />
            </View>
          
            <View style={{maxWidth: width, flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: width * 1, marginTop: 10}}>
              <Text style={{fontSize: 22, fontWeight: '500', marginLeft:15}}>Comté 12 mois d'affinage</Text>
              <Text style={{fontSize: 20, marginRight:35}}> 4.99€</Text>
            </View>

            <View style={{maxWidth: width, flex: 1, width: width * 1, marginTop: 2, marginBottom: 15}}>
              <Text style={{color:'orange', fontStyle: 'italic', fontSize: 17, marginLeft: 15, textAlign: 'justify'}}>Comté 12 mois d'affinage</Text>
            </View>

            <View style={{flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
                <Text style={{fontSize: 26, marginLeft: 15, marginRight: 5}}>4,9</Text>

              <View style={{flex: 1}}>
                <Text style={{fontSize: 14, textAlign: 'left'}}>⭐️⭐️⭐️⭐️⭐️</Text>
                <Text style={{fontSize: 12, textAlign: 'left'}}> 479 Avis</Text>
              </View>
            </View>
            <View style={{maxWidth: width, flex: 1, width: width * 1, marginTop: 15, marginBottom: 10}}>
              <Text style={{color:'#989898', fontSize: 15, marginRight:35, marginLeft: 15, textAlign: 'justify'}}>Potted Plant Ravenea Plant one of the most popular and beautiful species that will produce clumpms. The storage of water often gives succulent plants a more swollen or fleshy appearance than other plants, a characteristic known as succulence.</Text>
            </View>

            <CardAction style={{flex: 1, justifyContent: 'space-between'}} separator={true} inColumn={false}>
              <CardButton onPress={() => {}} title="➕" />
              <CardButton style={{}} onPress={() => {}} title="PARTAGER" />
              <CardButton style={{}} onPress={() => {}} title="❤️" />
            </CardAction>
        </Card>

        <Card style={{shadowColor: "#000", shadowOffset: {width: 0, height: 4,}, shadowOpacity: 0.30, shadowRadius: 4.65, elevation: 8, paddingTop:0, marginTop:10, borderRadius:13}}>
            <View style={{display: 'flex', width: width, backgroundColor: "#fff"}}>
              <Image source={require('../../assets/cheeses/cheese1.png')} style={{resizeMode: 'contain', flex: 1}} />
            </View>
          
            <View style={{maxWidth: width, flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: width * 1, marginTop: 10}}>
              <Text style={{fontSize: 22, fontWeight: '500', marginLeft:15}}>Comté 12 mois d'affinage</Text>
              <Text style={{fontSize: 20, marginRight:35}}> 4.99€</Text>
            </View>

            <View style={{maxWidth: width, flex: 1, width: width * 1, marginTop: 2, marginBottom: 15}}>
              <Text style={{color:'orange', fontStyle: 'italic', fontSize: 17, marginLeft: 15, textAlign: 'justify'}}>Comté 12 mois d'affinage</Text>
            </View>

            <View style={{flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
                <Text style={{fontSize: 26, marginLeft: 15, marginRight: 5}}>4,9</Text>

              <View style={{flex: 1}}>
                <Text style={{fontSize: 14, textAlign: 'left'}}>⭐️⭐️⭐️⭐️⭐️</Text>
                <Text style={{fontSize: 12, textAlign: 'left'}}> 479 Avis</Text>
              </View>
            </View>
            <View style={{maxWidth: width, flex: 1, width: width * 1, marginTop: 15, marginBottom: 10}}>
              <Text style={{color:'#989898', fontSize: 15, marginRight:35, marginLeft: 15, textAlign: 'justify'}}>Potted Plant Ravenea Plant one of the most popular and beautiful species that will produce clumpms. The storage of water often gives succulent plants a more swollen or fleshy appearance than other plants, a characteristic known as succulence.</Text>
            </View>

            <CardAction style={{flex: 1, justifyContent: 'space-between'}} separator={true} inColumn={false}>
              <CardButton onPress={() => {}} title="➕" />
              <CardButton style={{}} onPress={() => {}} title="PARTAGER" />
              <CardButton style={{}} onPress={() => {}} title="❤️" />
            </CardAction>
        </Card>

        
        
      </ScrollView>
    </View>
  );
};
export default Home;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    backgroundColor: '#E1E1E1',
    paddingLeft: 5,
    paddingRight: 5,
    marginTop: 30,
  },
  cardImgSty: {
    resizeMode: 'contain',
    flex: 1
  },
});
