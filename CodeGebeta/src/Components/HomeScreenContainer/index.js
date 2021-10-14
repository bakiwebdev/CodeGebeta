import React from 'react';
import {View, Text} from 'react-native';
import Container from '../Container';
import CourseContainer from '../CourseContainer';
import Header from '../HomeHeader';
import PopularContainer from '../PopularCourseContainer';
import styles from './styles';

const HomeScreenComponents = () => {
  return (
    <View style={styles.wrapper}>
      <Container>
        {/* Text Container */}
        <Header />
        {/* Popular Courses */}
        <PopularContainer />
        {/* Courses */}
        <CourseContainer />
      </Container>
    </View>
  );
};

export default HomeScreenComponents;
