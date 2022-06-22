import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  HomeStackNavigator,
  ProfileStackNavigator,
  CategoriesStackNavigator,
  ScanStackNavigator,
  SearchStackNavigator,
} from './StackNavigators';
import {Text} from 'react-native';
import Icon from 'react-native-ionicons';

//import Icon from 'react-native-vector-icons/AntDesign';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="TabHome"
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarShowLabel: false,
        tabBarIcon: ({focused}) => {
          let iconName;

          if (route.name === 'TabHome') {
            iconName = 'home';
          } else if (route.name === 'TabCategories') {
            iconName = 'apps';
          } else if (route.name === 'TabScan') {
            iconName = 'qr-scanner';
          } else if (route.name === 'TabSearch') {
            iconName = 'search';
          } else if (route.name === 'TabProfile') {
            iconName = 'person';
          }
          return <Icon name={iconName} />;
        },
        tabBarActiveTintColor: '#fff',
        tabBarInactiveTintColor: 'black',
      })}>
      <Tab.Screen name="TabHome" component={HomeStackNavigator} />
      <Tab.Screen name="TabCategories" component={CategoriesStackNavigator} />
      <Tab.Screen name="TabScan" component={ScanStackNavigator} />
      <Tab.Screen name="TabSearch" component={SearchStackNavigator} />
      <Tab.Screen name="TabProfile" component={ProfileStackNavigator} />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
