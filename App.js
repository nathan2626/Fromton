import 'react-native-gesture-handler';
import React, {useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import OnboardingScreen from './src/features/onBoarding/OnBoarding.screen';
import HomeRegistrationScreen from './src/features/Registration/HomeRegistration.screen';
import Login from './src/features/Registration/Login.screen';
import Register from './src/features/Registration/Register.screen';
import Home from './src/features/Main/Home.screen';
import Categories from './src/features/Main/Categories.screen';
import Scan from './src/features/Main/Scan.screen';
import Profile from './src/features/Main/Profile.screen';
import Search from './src/features/Main/Search.screen';
import Cheese from './src/features/Main/Cheese.screen';
import Cheeses from './src/features/Main/Cheeses.screen';

//testing coin
import HomeCoin from './src/features/TestCoin/home';

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
        {connected ? (
          <BottomTabNavigator />
        ) : (
          <Stack.Navigator screenOptions={{headerShown: false}}>
            {isAppFirstLaunched && (
              <Stack.Screen
                name="OnboardingScreen"
                component={OnboardingScreen}
              />
            )}
            <Stack.Screen
              name="HomeRegistrationScreen"
              component={HomeRegistrationScreen}
            />
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Register" component={Register} />

            <Stack.Screen name="HomeCoin" component={HomeCoin} />

          </Stack.Navigator>
        )}
      </NavigationContainer>
    )
  );
};

export default App;
