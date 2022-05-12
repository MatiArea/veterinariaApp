import { Button, Text, View } from 'react-native'
import React, { useState } from 'react'

import CheckBox from '@react-native-community/checkbox'
import { style } from './styles'

const HealthStep1Screen = ({ navigation }) => {
  const [Brucelosis, setBrucelosis] = useState(false)
  const [Tuberculosis, setTuberculosis] = useState(false)
  const [Venerear, setVenerear] = useState(false)
  const [Otras, setOtras] = useState(false)

  return (
    <View style={style.container}>
      <View style={style.checkboxContainer}>
        <CheckBox
          disabled={false}
          value={Brucelosis}
          onValueChange={(newValue) => setBrucelosis(newValue)}
          tintColor="#000000"
        />
        <Text style={style.title}>Brucelosis</Text>
      </View>
      <View style={style.checkboxContainer}>
        <CheckBox
          disabled={false}
          value={Tuberculosis}
          onValueChange={(newValue) => setTuberculosis(newValue)}
          tintColor="black"
        />
        <Text style={style.title}>Tuberculosis</Text>
      </View>
      <View style={style.checkboxContainer}>
        <CheckBox
          disabled={false}
          value={Venerear}
          onValueChange={(newValue) => setVenerear(newValue)}
          tintColor="black"
        />
        <Text style={style.title}>Venerear</Text>
      </View>
      <View style={style.checkboxContainer}>
        <CheckBox
          disabled={false}
          value={Otras}
          onValueChange={(newValue) => setOtras(newValue)}
          tintColor="black"
        />
        <Text style={style.title}>Otras</Text>
      </View>
      <View style={style.buttonContainer}>
        <Button
          title="Siguiente"
          onPress={() => {
            navigation.jumpTo('Paso 2', { Brucelosis, Tuberculosis, Venerear, Otras })
          }}
        />
      </View>
    </View>
  )
}

export default HealthStep1Screen
