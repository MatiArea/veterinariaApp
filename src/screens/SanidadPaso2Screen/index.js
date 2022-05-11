import { Button, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'

import ImageSelector from '../../components/ImageSelector'
import { Picker } from '@react-native-picker/picker'
import { style } from './styles'

const SanidadPaso2Screen = ({ navigation, route }) => {
  const [selectedLanguage, setSelectedLanguage] = useState()
  const [Fecha, setFecha] = useState()
  const [Laboratorio, setLaboratorio] = useState()
  const [Lote, setLote] = useState()
  const [CantidadMuestras, setCantidadMuestras] = useState()
  const [Comentarios, setComentarios] = useState()
  const [Image, setImage] = useState()
  const { Brucelosis, Tuberculosis, Venerear, Otras } = route.params ? route.params : {}

  const handleOnImage = (uri) => {
    setImage(uri)
  }

  return (
    <View style={style.container}>
      <View>
        <TextInput
          value={Fecha}
          onChangeText={(newValue) => setFecha(newValue)}
          placeholder="Fecha"
          placeholderTextColor={'#000'}
        />
        <TextInput
          value={Laboratorio}
          onChangeText={(newValue) => setLaboratorio(newValue)}
          placeholder="Laboratorio"
          placeholderTextColor={'#000'}
        />
        <TextInput
          value={Lote}
          onChangeText={(newValue) => setLote(newValue)}
          placeholder="Lote"
          placeholderTextColor={'#000'}
        />
        <TextInput
          value={CantidadMuestras}
          onChangeText={(newValue) => setCantidadMuestras(newValue)}
          placeholder="Cantidad de muestras"
          placeholderTextColor={'#000'}
        />
        <Picker
          selectedValue={selectedLanguage}
          onValueChange={(itemValue, itemIndex) => setSelectedLanguage(itemValue)}
        >
          <Picker.Item label="Categoria 1" value="1" style={{ color: 'black' }} />
          <Picker.Item label="Categoria 2" value="2" style={{ color: 'black' }} />
          <Picker.Item label="Categoria 3" value="3" style={{ color: 'black' }} />
          <Picker.Item label="Categoria 4" value="4" style={{ color: 'black' }} />
          <Picker.Item label="Categoria 5" value="5" style={{ color: 'black' }} />
        </Picker>
        <TextInput
          value={Comentarios}
          onChangeText={(newValue) => setComentarios(newValue)}
          placeholder="Comentarios"
        />
        <ImageSelector onImage={handleOnImage} />
      </View>
      <View style={style.buttonContainer}>
        <Button
          title="Anterior"
          onPress={() => {
            navigation.jumpTo('Paso 1')
          }}
        />
        <Button
          title="Siguiente"
          onPress={() => {
            navigation.jumpTo('Paso 3')
          }}
        />
      </View>
    </View>
  )
}

export default SanidadPaso2Screen
