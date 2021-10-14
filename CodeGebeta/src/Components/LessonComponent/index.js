import React from 'react';
import {View, Text} from 'react-native';
import Container from '../Container';
import styles from './styles';

const LessonComponent = ({Data}) => {
  return (
    <View style={styles.wrapper}>
      <Container>
        {/* lesson part */}
        <Text style={styles.lessonPart}>ምዕራፍ {Data.id}</Text>
        {/* Lesson title */}
        <Text style={styles.lessonTitle}>
          {Data.title}
        </Text>
        {/* Description */}
        <Text style={styles.lessonDetail}>
          {Data.detail}
        </Text>
      </Container>
    </View>
  );
};

export default LessonComponent;
