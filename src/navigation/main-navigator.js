import EstablecimientoScreen from '../screens/EstablecimientosScreen'
import HomeScreen from '../screens/HomeScreen'
import React from 'react'
import TopTabNavigator from './top-tab-navigator'
import TorosScreen from '../screens/TorosScreen'
import UbicacionScreen from '../screens/UbicacionScreen'
import VacasScreen from '../screens/VacasScreen'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const mainStack = createNativeStackNavigator()

const MainStackNavigator = () => {
  return (
    <mainStack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}
    >
      <mainStack.Screen
        name="Home"
        component={HomeScreen}
        options={({ navigation }) => ({
          title: 'La veterinaria de Matias Area',
        })}
      />
      <mainStack.Screen name="Establecimiento" component={EstablecimientoScreen} />
      <mainStack.Screen name="Sanidad" component={TopTabNavigator} />
      <mainStack.Screen name="Toros" component={TorosScreen} />
      <mainStack.Screen name="Vacas" component={VacasScreen} />
      <mainStack.Screen name="Ubicacion" component={UbicacionScreen} />
    </mainStack.Navigator>
  )
}

export default MainStackNavigator
