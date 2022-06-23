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

import Icon from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="TabHome"
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarShowLabel: false,
        tabBarIcon: ({focused, color, size}) => {
          let iconName;
          if (route.name === 'TabHome') {
            iconName = focused ? 'home' : 'home-outline';
            size = focused ? 32 : 26;
            color = focused ? 'orange' : 'black';
          } else if (route.name === 'TabCategories') {
            iconName = focused ? 'apps' : 'apps-outline';
            size = focused ? 32 : 26;
            color = focused ? 'orange' : 'black';
          } else if (route.name === 'TabScan') {
            iconName = focused ? 'scan' : 'md-scan-outline';
            size = focused ? 32 : 26;
            color = focused ? 'orange' : 'black';
          } else if (route.name === 'TabSearch') {
            iconName = focused ? 'search' : 'search-outline';
            size = focused ? 32 : 26;
            color = focused ? 'orange' : 'black';
          } else if (route.name === 'TabProfile') {
            iconName = focused ? 'person' : 'person-outline';
            size = focused ? 32 : 26;
            color = focused ? 'orange' : 'black';
          }

          return <Icon name={iconName} size={size} color={color} />;
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
