import React from 'react';
import {View, Text} from 'react-native';
import Course from '../Course';
import styles from './styles';
import HtmlData from '../../Data/HTML/html'
import CssData from '../../Data/CSS/css'
import PhpData from '../../Data/PHP/php'
import PythonData from '../../Data/PYTHON/python'
import JavaData from '../../Data/JAVA/java'
import JavaScriptData from '../../Data/JavaScript/javascript'
import SqlData from '../../Data/SQL/sql'
import ReactJSData from '../../Data/ReactJS/reactjs'
import AspData from '../../Data/AspDotNet/aspdotnet'
import DjangoData from '../../Data/Django/django'
import ReactNativeData from '../../Data/ReactNative/reactnative'
import RubyData from '../../Data/Ruby/ruby'
import NodeData from '../../Data/NodeJs/nodejs'
const CourseContainer = () => {
  return (
    <View style={styles.wrapper}>
      <Text style={styles.title}>ሁሉም</Text>
      <View style={styles.courseContainer}>
        <Course Data={ReactJSData}/>
        <Course Data={AspData}/>
        <Course Data={DjangoData}/>
        <Course Data={ReactNativeData}/>
        <Course Data={RubyData}/>
        <Course Data={NodeData}/>
        <Course Data={HtmlData}/>
        <Course Data={CssData}/>
        <Course Data={PhpData}/>
        <Course Data={PythonData}/>
        <Course Data={JavaData}/>
        <Course Data={JavaScriptData}/>
        <Course Data={SqlData}/>
      </View>
    </View>
  );
};

export default CourseContainer;
