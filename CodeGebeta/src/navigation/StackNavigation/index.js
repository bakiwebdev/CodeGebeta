import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {View, Text} from 'react-native';
import {
  AboutScreen,
  CourseScreen,
  HomeScreen,
  LessonScreen,
} from '../../Constants/screenNames';
import About from '../../Screens/AboutScreen';
import Course from '../../Screens/CourseScreen';
import Home from '../../Screens/HomeScreen';
import Lesson from '../../Screens/LessonScreen';

const StackContainer = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator
      initialRouteName={HomeScreen}
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name={HomeScreen} component={Home} />
      <Stack.Screen name={CourseScreen} component={Course} />
      <Stack.Screen name={LessonScreen} component={Lesson} />
      <Stack.Screen name={AboutScreen} component={About} />
    </Stack.Navigator>
  );
};

export default StackContainer;
