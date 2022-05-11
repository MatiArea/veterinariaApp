import { FlatList, SafeAreaView, Text, View } from 'react-native'

import { ESTABLECIMIENTOS } from '../../contants/data'
import HomeButton from '../../components/HomeButton'
import React from 'react'
import { style } from './styles'

const HomeScreen = ({ navigation }) => {
  const renderItem = ({ item }) => <HomeButton item={item} navigation={navigation} />

  return (
    <SafeAreaView>
      <Text style={style.titleHeader}>Establecimientos: </Text>
      <FlatList
        style={{ height: '90%', marginHorizontal: '2%' }}
        contentContainerStyle={{ flexGrow: 1 }}
        data={ESTABLECIMIENTOS}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
      />
    </SafeAreaView>
  )
}

export default HomeScreen
