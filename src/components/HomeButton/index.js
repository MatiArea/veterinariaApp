import { Image, Text, TouchableOpacity, View } from 'react-native'
import { styleIcon, styleText } from '../../contants/styles'

import React from 'react'
import { style } from './styles'

const HomeButton = ({ item, navigation }) => {
  return (
    <View style={style.shadowContainer}>
      <View style={style.container}>
        <TouchableOpacity
          style={{ flexDirection: 'row', justifyContent: 'center' }}
          onPress={() => {
            console.log('pressed')
            navigation.navigate('Establecimiento')
          }}
        >
          <View style={{ width: '50%' }}>
            <Text style={style.title}>{item['title']}</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default HomeButton
