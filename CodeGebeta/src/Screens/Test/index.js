import React, {useState, useContext} from 'react'
import { View, Text, Button } from 'react-native'
import ColorSchema from '../../Constants/ColorSchema'
import ThemeContext from '../../Provider/ThemeProvider'
import styles from './styles'

const TestScreen = () => {

    const {value, setValue} = useContext(ThemeContext)
    return (
        <View style={styles.container}>
            <Text style={styles.text}>TestScreen</Text>
            <Text style={styles.text}>{value ? "True" : "False"}</Text>
            <Button title="Change Mode" onPress={() => setValue(!value)} />
            {/* <Button title="Show Alert" onPress={() => alert(ColorSchema)} /> */}
        </View>
    )
}

export default TestScreen
