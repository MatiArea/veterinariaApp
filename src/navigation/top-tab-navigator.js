import EstablecimientoScreen from '../screens/EstablecimientosScreen'
import HomeScreen from '../screens/HomeScreen'
import React from 'react'
import SanidadPaso1Screen from '../screens/SanidadPaso1Screen'
import SanidadPaso2Screen from '../screens/SanidadPaso2Screen'
import SanidadPaso3Screen from '../screens/SanidadPaso3Screen'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'

const Tab = createMaterialTopTabNavigator()

const TopTabNavigator = () => {
  return (
    <Tab.Navigator initialRouteName="Home">
      <Tab.Screen name="Paso 1" component={SanidadPaso1Screen} />
      <Tab.Screen name="Paso 2" component={SanidadPaso2Screen} />
      <Tab.Screen name="Paso 3" component={SanidadPaso3Screen} />
    </Tab.Navigator>
  )
}

export default TopTabNavigator
