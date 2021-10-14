import {useNavigation} from '@react-navigation/core';
import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {CourseScreen} from '../../Constants/screenNames';
import styles from './styles';

const Course = ({Data}) => {
  const image = {
    uri: Data.courseImage,
  };

  // count all the lessons in the course
  const countLessons = () => {
    let count = 0;
    Data.lessons.map(() => {
      count++;
    });
    return count;
  };

  const {navigate} = useNavigation();
  return (
    <TouchableOpacity onPress={() => navigate(CourseScreen, {Data: Data})}>
      <View style={styles.wrapper}>
        {/* Course Name */}
        <Text style={styles.courseName}>{Data.courseName}</Text>
        {/* Picture or Icon */}
        <Image source={image} style={styles.image} resizeMode="center" />
        {/* lessons quantity */}
        <Text style={styles.lessons}>{countLessons()} ምዕራፎች</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Course;
