import React from 'react';
import {View, Text} from 'react-native';
import Course from '../Course';
import styles from './styles';
import HtmlData from '../../Data/HTML/html.json'
const CourseContainer = () => {
  return (
    <View style={styles.wrapper}>
      <Text style={styles.title}>ሁሉም</Text>
      <View style={styles.courseContainer}>
        <Course Data={HtmlData}/>
      </View>
    </View>
  );
};

export default CourseContainer;
