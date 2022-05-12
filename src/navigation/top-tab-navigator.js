import EstablishmentScreen from '../screens/EstablishmentsScreen'
import HealthStep1Screen from '../screens/HealthStep1Screen'
import HealthStep2Screen from '../screens/HealthStep2Screen'
import HealthStep3Screen from '../screens/HealthStep3Screen'
import HomeScreen from '../screens/HomeScreen'
import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'

const Tab = createMaterialTopTabNavigator()

const TopTabNavigator = () => {
  return (
    <Tab.Navigator initialRouteName="Home">
      <Tab.Screen name="Paso 1" component={HealthStep1Screen} />
      <Tab.Screen name="Paso 2" component={HealthStep2Screen} />
      <Tab.Screen name="Paso 3" component={HealthStep3Screen} />
    </Tab.Navigator>
  )
}

export default TopTabNavigator
