import {NavigationContainer} from '@react-navigation/native';
import React, {useEffect} from 'react';
import StackContainer from './StackNavigation';
import SplashScreen from 'react-native-splash-screen';

const AppNavigation = () => {
  useEffect(() => {
    SplashScreen.hide();
  });
  return (
    <NavigationContainer>
      <StackContainer />
    </NavigationContainer>
  );
};

export default AppNavigation;
