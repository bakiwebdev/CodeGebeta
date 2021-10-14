import React from 'react';
import {View, Text} from 'react-native';
import Course from '../Course';
import styles from './styles';
import HtmlData from '../../Data/HTML/html.json'
import CssData from '../../Data/CSS/css.json'
import PhpData from '../../Data/PHP/php.json'
import PythonData from '../../Data/PYTHON/python.json'
import JavaData from '../../Data/JAVA/java.json'
import JavaScriptData from '../../Data/JavaScript/javascript.json'
import SqlData from '../../Data/SQL/sql.json'
import ReactJSData from '../../Data/ReactJS/reactjs.json'
import AspData from '../../Data/AspDotNet/aspdotnet.json'
import DjangoData from '../../Data/Django/django.json'
import ReactNativeData from '../../Data/ReactNative/reactnative.json'
import RubyData from '../../Data/Ruby/ruby.json'
import NodeData from '../../Data/NodeJs/nodejs.json'
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
