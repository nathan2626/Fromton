import 'react-native-gesture-handler';
import React, {useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import OnboardingScreen from './src/screens/onBoarding/OnBoarding.screen';
import HomeRegistrationScreen from './src/screens/Registration/HomeRegistration.screen';
import Login from './src/screens/Registration/Login.screen';
import Register from './src/screens/Registration/Register.screen';
import Home from './src/screens/Main/Home.screen';
import Categories from './src/screens/Main/Categories.screen';
import Scan from './src/screens/Main/Scan.screen';
import Profile from './src/screens/Main/Profile.screen';
import Search from './src/screens/Main/Search.screen';
import Cheese from './src/screens/Main/Cheese.screen';
import Cheeses from './src/screens/Main/Cheeses.screen';

import BottomTabNavigator from './src/navigation/TabNavigators';

import AsyncStorage from '@react-native-async-storage/async-storage';

const Stack = createStackNavigator();

const App = () => {

  const connected = true;

  const [isAppFirstLaunched, setIsAppFirstLaunched] = React.useState(null);
  React.useEffect(async () => {
    const appData = await AsyncStorage.getItem('isAppFirstLaunched');
    console.log(appData);

    if (appData == null) {
      setIsAppFirstLaunched(true);
      AsyncStorage.setItem('isAppFirstLaunched', 'false');
    } else {
      setIsAppFirstLaunched(false);
    }
  }, []);

  return (
    isAppFirstLaunched != null && (
      <NavigationContainer>
      {connected ? 
        (<BottomTabNavigator/>)
        :(
          <Stack.Navigator screenOptions={{headerShown: false}}>
            {isAppFirstLaunched && (
              <Stack.Screen
                name="OnboardingScreen"
                component={OnboardingScreen}
              />
            )}
            <Stack.Screen name="HomeRegistrationScreen" component={HomeRegistrationScreen} />
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Register" component={Register} />
          </Stack.Navigator>
        )}
      </NavigationContainer>
    )
  );
};

export default App;
