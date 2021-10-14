import React from 'react'
import { View, Text, ScrollView } from 'react-native'
import Lesson from '../Lesson'
import styles from './styles'

const LessonsContainer = ({Lessons}) => {
    return (
        <View style={styles.wrapper}>
            {Lessons.map(lesson => {
                return <Lesson key={lesson.id} Data={lesson} />
            })}
        </View>
    )
}

export default LessonsContainer
