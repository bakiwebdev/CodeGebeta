import React from 'react';
import {View} from 'react-native';
import Container from '../Container';
import CourseImage from '../CourseImage';
import CourseTitle from '../CourseTitle';
import LessonsContainer from '../LessonsContainer';
import styles from './styles';

const CourseScreenComponent = ({Data}) => {
  return (
    <View style={styles.wrapper}>
      <Container>
        {/* Images */}
        <CourseImage CourseName={Data.courseName} CourseImage={Data.courseImage} />
        {/* Title */}
        <CourseTitle />
        {/* Lessons List */}
        <LessonsContainer Lessons={Data.lessons} />
      </Container>
    </View>
  );
};

export default CourseScreenComponent;
