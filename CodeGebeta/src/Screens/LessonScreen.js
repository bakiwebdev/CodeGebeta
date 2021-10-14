import React from 'react';
import LessonComponent from '../Components/LessonComponent';

const Lesson = ({route}) => {
  const {Data} = route.params;
  return <LessonComponent Data={Data} />;
};

export default Lesson;
