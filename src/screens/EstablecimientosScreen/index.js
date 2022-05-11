import { FlatList, SafeAreaView, Text, View } from 'react-native'

import EstablecimientoItem from '../../components/EstablecimientoItem'
import { MENUITEMS } from '../../contants/data'
import React from 'react'
import { style } from './styles'

const EstablecimientoScreen = ({ navigation }) => {
  const renderItem = ({ item }) => <EstablecimientoItem item={item} navigation={navigation} />

  return (
    <SafeAreaView>
      <FlatList
        style={{ height: '90%' }}
        contentContainerStyle={{ flexGrow: 1, marginHorizontal: '2%' }}
        data={MENUITEMS}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        numColumns={2}
      />
    </SafeAreaView>
  )
}

export default EstablecimientoScreen
