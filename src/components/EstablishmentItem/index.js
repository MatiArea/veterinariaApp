import { Image, Text, TouchableOpacity, View } from 'react-native'
import { styleIcon, styleText } from '../../contants/styles'

import React from 'react'
import { style } from './styles'

const EstablishmentItem = ({ item, navigation }) => {
  return (
    <View style={style.shadowContainer}>
      <View style={style.container}>
        <TouchableOpacity
          style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}
          onPress={() => {
            console.log('pressed')
            navigation.navigate('Sanidad')
          }}
        >
          <View style={{ width: '80%' }}>
            <Text style={style.title}>{item['title']}</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default EstablishmentItem
