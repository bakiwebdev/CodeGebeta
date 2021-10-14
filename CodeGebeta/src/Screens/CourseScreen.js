import React from 'react';
import CourseScreenComponent from '../Components/CourseScreenContainer';

const Course = ({route}) => {
  // data passed as parameter
  const {Data} = route.params;
  return <CourseScreenComponent Data={Data} />;
};

export default Course;
