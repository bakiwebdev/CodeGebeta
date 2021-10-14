import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import StackContainer from './StackNavigation'

const AppNavigation = () => {
    return (
        <NavigationContainer>
            <StackContainer />
        </NavigationContainer>
    )
}

export default AppNavigation
