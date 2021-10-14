import { useNavigation } from '@react-navigation/core';
import React from 'react';
import {View, Text, ImageBackground, TouchableOpacity} from 'react-native';
import { CourseScreen } from '../../Constants/screenNames';
import styles from './styles';

const FeatureCourse = ({Data}) => {

  const {navigate} = useNavigation();


  const image = {uri: Data.courseImage}
  return (
    <TouchableOpacity
    onPress={() => navigate(CourseScreen,{Data: Data})} >
      <View style={styles.wrapper}>
      <ImageBackground
        source={image}
        resizeMode={'cover'}
        style={styles.bgImage}>
            <View style={styles.justStyle} />
            <View style={styles.titleWrapper}>
                <Text style={styles.title}>{Data.courseName}</Text>
            </View>
        </ImageBackground>
    </View>
    </TouchableOpacity>
  );
};

export default FeatureCourse;