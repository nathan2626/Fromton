import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Home from '../features/Main/Home.screen';
import Search from '../features/Main/Search.screen';
import Scan from '../features/Main/Scan.screen';
import Categories from '../features/Main/Categories.screen';
import Profile from '../features/Main/Profile.screen';
import Cheese from '../features/Main/Cheese.screen';
import Recipe from '../features/Main/Recipe.screen';
import ProfileNotConnected from '../features/Main/ProfileNotConnected.screen';
import Cheeses from '../features/Main/Cheeses.screen';
const Stack = createStackNavigator();

const HomeStackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={() => ({
        headerShown: false,
      })}>
      <Stack.Screen name="Home" options={{title: 'Home'}} component={Home} />
      <Stack.Screen name="Cheeses" component={Cheeses} />
      <Stack.Screen name="Cheese" component={Cheese} />
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen
        name="ProfileNotConnected"
        component={ProfileNotConnected}
      />
      <Stack.Screen name="Categories" component={Categories} />
      <Stack.Screen name="Recipe" component={Recipe} />
    </Stack.Navigator>
  );
};

const CheesesStackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={() => ({
        headerShown: false,
      })}>
      <Stack.Screen
        name="Cheese"
        options={{title: 'Cheeses'}}
        component={Cheeses}
      />
      <Stack.Screen name="Cheese" component={Cheese} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen
        name="ProfileNotConnected"
        component={ProfileNotConnected}
      />
      <Stack.Screen name="Categories" component={Categories} />
      <Stack.Screen name="Recipe" component={Recipe} />
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
      <Stack.Screen
        name="ProfileNotConnected"
        component={ProfileNotConnected}
      />
    </Stack.Navigator>
  );
};

const ProfileNotConnectedStackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={() => ({
        headerShown: false,
      })}>
      <Stack.Screen
        name="ProfileNotConnected"
        component={ProfileNotConnected}
      />
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
      <Stack.Screen
        name="ProfileNotConnected"
        component={ProfileNotConnected}
      />
      <Stack.Screen name="Cheese" component={Cheese} />
      <Stack.Screen name="Cheeses" component={Cheeses} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Recipe" component={Recipe} />
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
      <Stack.Screen
        name="ProfileNotConnected"
        component={ProfileNotConnected}
      />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Cheeses" component={Cheeses} />
      <Stack.Screen name="Cheese" component={Cheese} />
      <Stack.Screen name="Recipe" component={Recipe} />
    </Stack.Navigator>
  );
};

const SearchStackNavigator = () => {
  const connected = true;

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
      <Stack.Screen
        name="ProfileNotConnected"
        component={ProfileNotConnected}
      />
      <Stack.Screen name="Recipe" component={Recipe} />
    </Stack.Navigator>
  );
};

export {
  HomeStackNavigator,
  CheesesStackNavigator,
  ProfileStackNavigator,
  CategoriesStackNavigator,
  ScanStackNavigator,
  SearchStackNavigator,
  ProfileNotConnectedStackNavigator,
};
