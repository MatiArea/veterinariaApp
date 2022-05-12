import CowsScreen from '../screens/CowsScreen'
import EstablishmentScreen from '../screens/EstablishmentsScreen'
import HomeScreen from '../screens/HomeScreen'
import LocationScreen from '../screens/LocationScreen'
import React from 'react'
import TopTabNavigator from './top-tab-navigator'
import BullsScreen from '../screens/BullsScreen'
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
      <mainStack.Screen name="Establishment" component={EstablishmentScreen} />
      <mainStack.Screen name="Health" component={TopTabNavigator} />
      <mainStack.Screen name="Bulls" component={BullsScreen} />
      <mainStack.Screen name="Cows" component={CowsScreen} />
      <mainStack.Screen name="Location" component={LocationScreen} />
    </mainStack.Navigator>
  )
}

export default MainStackNavigator
