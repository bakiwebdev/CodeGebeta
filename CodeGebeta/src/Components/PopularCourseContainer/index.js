import React from 'react'
import { View, Text, ScrollView } from 'react-native'
import FeatureCourse from '../FeatureCourse'
import styles from './styles'
import HtmlData from '../../Data/HTML/html.json'
import CssData from '../../Data/CSS/css.json'
import PhpData from '../../Data/PHP/php.json'
import PythonData from '../../Data/PYTHON/python.json'
import JavaData from '../../Data/JAVA/java.json'
import JavaScriptData from '../../Data/JavaScript/javascript.json'
import SqlData from '../../Data/SQL/sql.json'

const PopularContainer = () => {
    return (
        <View style={styles.wrapper}>
            <Text style={styles.title}>በጣም ተወዳጅ</Text>
            <ScrollView style={styles.courseContainer} horizontal={true} showsHorizontalScrollIndicator={false} >
                <FeatureCourse Data={HtmlData}/>
                <FeatureCourse Data={CssData}/>
                <FeatureCourse Data={PhpData}/>
                <FeatureCourse Data={PythonData}/>
                <FeatureCourse Data={JavaData}/>
                <FeatureCourse Data={JavaScriptData}/>
                <FeatureCourse Data={SqlData}/>
            </ScrollView>
        </View>
    )
}

export default PopularContainer
