import React from 'react'
import { View, Text, ScrollView } from 'react-native'
import FeatureCourse from '../FeatureCourse'
import styles from './styles'
import HtmlData from '../../Data/HTML/html.json'

const PopularContainer = () => {
    return (
        <View style={styles.wrapper}>
            <Text style={styles.title}>በጣም ተወዳጅ</Text>
            <ScrollView style={styles.courseContainer} horizontal={true} showsHorizontalScrollIndicator={false} >
                <FeatureCourse Data={HtmlData}/>
            </ScrollView>
        </View>
    )
}

export default PopularContainer
