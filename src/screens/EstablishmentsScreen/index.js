import { FlatList, SafeAreaView, Text, View } from 'react-native'

import EstablishmentItem from '../../components/EstablishmentItem'
import { MENUITEMS } from '../../contants/data'
import React from 'react'
import { style } from './styles'

const EstablishmentScreen = ({ navigation }) => {
  const renderItem = ({ item }) => <EstablishmentItem item={item} navigation={navigation} />

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

export default EstablishmentScreen
