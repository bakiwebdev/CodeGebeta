import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from './styles';
import Icon from 'react-native-vector-icons/Ionicons';
import ColorSchema from '../../Constants/ColorSchema';
import {useNavigation} from '@react-navigation/core';
import {LessonScreen} from '../../Constants/screenNames';

const Lesson = ({Data}) => {
  const {navigate} = useNavigation();
  return (
    <TouchableOpacity onPress={() => navigate(LessonScreen,{Data: Data})}>
      <View style={styles.wrapper}>
        <View style={styles.textStyle}>
          <Text style={styles.lessonText}>ምዕራፍ {Data.id}</Text>
          <Text style={styles.lessonTitle}>{Data.title}</Text>
        </View>
        <Icon name="play" color={ColorSchema.primary} size={24} />
      </View>
    </TouchableOpacity>
  );
};

export default Lesson;
