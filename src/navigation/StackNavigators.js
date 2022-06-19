import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Home from '../screens/Main/Home.screen';
import Search from '../screens/Main/Search.screen';
import Scan from '../screens/Main/Scan.screen';
import Categories from '../screens/Main/Categories.screen';
import Profile from '../screens/Main/Profile.screen';
import Cheese from '../screens/Main/Cheese.screen';

const Stack = createStackNavigator();

const HomeStackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={() => ({
        headerShown: false,
      })}>
      <Stack.Screen name="Home" options={{title: 'Home'}} component={Home} />
      <Stack.Screen name="Cheese" component={Cheese} />
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="Categories" component={Categories} />
    </Stack.Navigator>
  );
};

const ProfileStackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={() => ({
        headerShown: false,
      })}>
      <Stack.Screen name="Profile" component={Profile} />
    </Stack.Navigator>
  );
};

const CategoriesStackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={() => ({
        headerShown: false,
      })}>
      <Stack.Screen name="Categories" component={Categories} />
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="Cheese" component={Cheese} />
      <Stack.Screen name="Home" component={Home} />

    </Stack.Navigator>
  );
};

const ScanStackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={() => ({
        headerShown: false,
      })}>
      <Stack.Screen name="Scan" component={Scan} />
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Cheese" component={Cheese} />
    </Stack.Navigator>
  );
};

const SearchStackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={() => ({
        headerShown: false,
      })}>
      <Stack.Screen name="Search" component={Search} />
      <Stack.Screen name="Cheese" component={Cheese} />
      <Stack.Screen name="Categories" component={Categories} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Profile" component={Profile} />

    </Stack.Navigator>
  );
};

export {
  HomeStackNavigator,
  ProfileStackNavigator,
  CategoriesStackNavigator,
  ScanStackNavigator,
  SearchStackNavigator,
};
