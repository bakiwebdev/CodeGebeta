import React from 'react';
import {View, Text, ImageBackground} from 'react-native';
import styles from './styles';

const CourseImage = ({CourseImage,CourseName}) => {
  const image = {
    uri: CourseImage,
  };
  return (
    <View style={styles.wrapper}>
      <ImageBackground
        source={image}
        resizeMode="stretch"
        style={styles.bgImage}>
        <View style={{flex: 1}} />
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{CourseName}</Text>
        </View>
      </ImageBackground>
    </View>
  );
};

export default CourseImage;
