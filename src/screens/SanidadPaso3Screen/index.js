import { Button, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'

import ImageSelector from '../../components/ImageSelector'
import { Picker } from '@react-native-picker/picker'
import { style } from './styles'

const SanidadPaso3Screen = ({ navigation }) => {
  const [ProtocoloNombre, setProtocoloNombre] = useState()
  const [PositivasNro, setPositivasNro] = useState()

  return (
    <View style={style.container}>
      <View>
        <TextInput
          value={ProtocoloNombre}
          onChangeText={(newValue) => setProtocoloNombre(newValue)}
          placeholder="Protocolo Nro"
          placeholderTextColor={'#000'}
        />
        <TextInput
          value={PositivasNro}
          onChangeText={(newValue) => setLabsetPositivasNrooratorio(newValue)}
          placeholder="Nro de Positivas"
          placeholderTextColor={'#000'}
        />
      </View>
      <View style={style.buttonContainer}>
        <Button
          title="Anterior"
          onPress={() => {
            navigation.jumpTo('Paso 2')
          }}
        />
        <Button
          title="Guardar"
          onPress={() => {
            console.log('Persistiendo datos')
          }}
        />
      </View>
    </View>
  )
}

export default SanidadPaso3Screen
